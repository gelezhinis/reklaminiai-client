import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

export const Context = React.createContext({
  admin: null,
  token: null,
  isAuthenticated: null,
  isMobileDevice: false,
  login: (token, expirationTime) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjustedExpirationTime = new Date(expirationTime).getTime();
  const remainingTime = adjustedExpirationTime - currentTime;

  return remainingTime;
};

const retrieveStoredToken = () => {
  const storedToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('token') : null;
  const storedExpirationTime =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('expiration')
      : null;

  const remainingTime = calculateRemainingTime(storedExpirationTime);

  if (remainingTime <= 60000) {
    typeof window !== 'undefined'
      ? window.localStorage.removeItem('token')
      : null;
    typeof window !== 'undefined'
      ? window.localStorage.removeItem('expiration')
      : null;
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

let userIsAuthenticated;
let logoutTimer;

const ContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [tokenState, setTokenState] = useState(initialToken);
  const [isAdmin, setIsAdmin] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const router = useRouter();

  const API = process.env.NEXT_PUBLIC_API_URL;

  userIsAuthenticated = !!tokenState;

  const windowSizeChangeHandler = () => {
    setWidth(window.innerWidth);
  };

  const loginHandler = (token, expirationTime) => {
    const expTime = new Date(expirationTime);
    setTokenState(token);
    if (token === process.env.NEXT_PUBLIC_ADMIN_TOKEN) {
      console.log('Čia patenka tik adminas.');
      setIsAdmin(true);
    }
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('expiration', expTime);
    userIsAuthenticated = true;

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const logoutHandler = useCallback(async () => {
    await fetch(`${API}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Kažkas nepavyko. Apgailestaujame';
            throw new Error(errorMessage);
          });
        }
      })
      .then((responseData) => {
        if (responseData.message === 'Logging out') {
          setTokenState(null);
          setIsAdmin(false);
          window.localStorage.removeItem('token');
          window.localStorage.removeItem('expiration');
          router.push('/');
        } else {
          throw new Error('Kažkas nepavyko. Apgailestaujame');
        }
      })
      .catch((err) => console.log(err));

    // setTokenState(null);
    // setIsAdmin(false);
    // window.localStorage.removeItem('token');
    // window.localStorage.removeItem('expiration');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (tokenData) {
      // console.log('Token', tokenData);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
      setIsAdmin(tokenData.token === process.env.NEXT_PUBLIC_ADMIN_TOKEN);
    }

    window.addEventListener('resize', windowSizeChangeHandler);
    return () => {
      window.removeEventListener('resize', windowSizeChangeHandler);
    };
  }, [tokenData, logoutHandler]);

  // Context values
  const contextValue = {
    admin: isAdmin,
    token: tokenState,
    isAuthenticated: userIsAuthenticated,
    isMobileDevice: width <= 768,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
