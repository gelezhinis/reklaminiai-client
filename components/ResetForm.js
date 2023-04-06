import React, { useRef, useState } from 'react';

import FormCard from '../components/ui/FormCard';

import classes from './ResetForm.module.css';

const ResetForm = (props) => {
  const [error, setError] = useState(null);

  const passwordInput = useRef();
  const confPasswordInput = useRef();

  const changePassHandler = async (event) => {
    event.preventDefault();

    const newPassword = passwordInput.current.value;
    const newConfPassword = confPasswordInput.current.value;

    if (newPassword !== newConfPassword) {
      setError('Slaptažodžiai nesutampa!');
      return;
    }
    await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/change-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: props.userId,
        token: props.token,
        password: newPassword,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            setError(data.message);
            let errorMessage = data.message;
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        props.onShowMessage(data.message, true, '/authenticate');
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <FormCard>
      <form onSubmit={changePassHandler} noValidate>
        <div className={classes.control}>
          <label htmlFor="password">Naujas Slaptažodis</label>
          <input type="password" id="password" ref={passwordInput} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="confPassword">Pakartoti Slaptažodį</label>
          <input
            type="password"
            id="confPassword"
            ref={confPasswordInput}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>Patvirtinti</button>
        </div>
        {error && (
          <div style={{ color: 'red', marginTop: '0.5rem' }}>{error}</div>
        )}
      </form>
    </FormCard>
  );
};

export default ResetForm;
