import React, { useRef, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Context } from '../store/context';
import {agreeText} from '../utils/agreement';

import FormCard from './ui/FormCard';
import classes from './AuthForm.module.css';

// const url = process.env.NEXT_PUBLIC_DOMAIN;
const API = process.env.NEXT_PUBLIC_API_URL;

const AuthForm = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState();
  const [resetPass, setResetPass] = useState(false);
  const nameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const confPasswordInput = useRef();

  const router = useRouter();

  const ctx = useContext(Context);

  useEffect(() => {
    setError(null);
  }, []);

  const changeAuthType = () => {
    setIsLogin(prevState => !prevState);
    setError(null);
    props.resetAgreement();
    if (isLogin) {
      props.onShowMessage(agreeText, false);
    }
  };

  const login = (token, route) => {
    const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    ctx.login(token, expirationTime);
    router.push(route);
  }

  const submitAdminHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;

    await fetch(`${API}/admin-login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Login failed!';
            throw new Error(errorMessage);
          });
        }
      })
      .then((responseData) => {
        console.log(responseData);
        if (responseData.message === 'OK') {
          login(responseData.token, '/admin');

          // const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
          // ctx.login(responseData.token, expirationTime);

          // console.log('EXPIRATION', new Date(expirationTime).toISOString());
          // sessionStorage.setItem(
          //   'auth_session',
          //   JSON.stringify({ expiresAt: expirationTime })
          // );
          // cookies.set('authenticated', true);
          // router.replace('/admin');
        } else {
          throw new Error('Prisiloginimas nepavyko!');
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const submitUserHandler = async (event) => {
    event.preventDefault();

    const enteredName = !isLogin ? nameInput.current.value : null;
    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;
    const enteredConfPassword = !isLogin ? confPasswordInput.current.value : null;

    if (isLogin) {
      await fetch(`${API}/user-login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            if (data.noPass) {
              console.log('Reseting pass');
              setResetPass(true);
            }
            setError([data.message]);
            let errorMessage = data.message;
            // setError(data.message);
            throw new Error(errorMessage);
          });
        }
      })
      .then((responseData) => {
        // console.log('RESP_MESASGE', responseData);
        if (responseData.message === 'OK') {
          setResetPass(false);
          login(responseData.token, '/produktai');
          // console.log('EXPIRATION', new Date(expirationTime).toISOString());
          // sessionStorage.setItem(
          //   'auth_session',
          //   JSON.stringify({ expiresAt: expirationTime })
          // );
          // cookies.set('authenticated', true);
          // router.replace('/produktai');
        } else {
          throw new Error('Prisiloginimas nepavyko!');
        }
      })
      .catch((err) => {
        console.log(err.message);
        // alert(err.message);
      });
    } else {
      if (enteredPassword !== enteredConfPassword) {
        setError(['Slaptažodžiai nesutampa.']);
        return;
      }
        await fetch(`${API}/user-signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
        }).then(res => {
          if (res.ok) {
            setResetPass(false);
            return res.json();
          } else {
            return res.json().then((data) => {
              setError([data.message]);
              let errorMessage = data.message;
              throw new Error(errorMessage);
            });
          }
        }).then(responseData => {
          if (responseData) {
            console.log(responseData.message);
            props.onShowMessage(responseData.message, true);
            // const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000 * 30;
            // ctx.login(responseData.token, expirationTime);
  
            // --- Email Confirmation ---
            // router.replace('/');
          } else {
            throw new Error('Prisijungti nepavyko!');
          }
        }).catch(err => {
          console.log(err.message);
          // alert(err.message);
        });      
    }
  };

  const resetPassHandler = async() => {
    const enteredEmail = emailInput.current.value;
    props.onShowMessage('Tolimesnė slaptažodžio keitimo instrukcija Jums išsiųsta el. paštu.', true);
    await fetch(`${API}/password-reset/${enteredEmail}`);
  };


  return (
    <FormCard>
      <form onSubmit={props.admin ? submitAdminHandler : submitUserHandler} noValidate>
        {!isLogin && <div className={classes.control}>
          <label htmlFor="email">Vardas / Įmonės pavadinimas</label>
          <input type="text" id="name" ref={nameInput}  />
        </div>}
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailInput} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Slaptažodis</label>
          <input type="password" id="password" ref={passwordInput} required />
        </div>
        {!isLogin && <div className={classes.control}>
          <label htmlFor="confPassword">Pakartoti Slaptažodį</label>
          <input type="password" id="confPassword" ref={confPasswordInput} required />
        </div>}
        <div className={classes.actions}>
          <button disabled={!isLogin && props.agree}>{!isLogin ? 'Registruotis' : 'Prisijungti'}</button>
        </div>
        {!props.admin && <div className={classes.register}>
          <p onClick={changeAuthType}>{!isLogin ? 'Prisijungti' : 'Registruotis'}</p>
        </div>}
        {resetPass && <p onClick={resetPassHandler} className={classes.resetPass}>Pamiršau slaptažodį</p>}
        {error && 
        error.map((err, i) => <div style={{color: 'red'}} key={i}>{err}</div>)
        }
      </form>
    </FormCard>
  );
};

export default AuthForm;
