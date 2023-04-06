import React, { useState } from 'react';
import { useRouter } from 'next/router';

import AuthForm from '../components/AuthForm';
import Backdrop from '../components/ui/Backdrop';
import Modal from '../components/ui/Modal';

function AuthPage() {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  const [confirmAgree, setConfirmAgree] = useState(false);

  const router = useRouter();

  const showMessageHandler = (message, bool) => {
    setModal(true);
    setMessage(message);
    setConfirmAgree(bool);
  };

  const modalBackdropCloseHandler = (route) => {
    setModal(false);
    if (route === '/') {
      router.replace(route);
    }
  };

  const agreementHandler = () => {
    setConfirmAgree((prevState) => !prevState);
  };

  const resetAgreementState = () => {
    setConfirmAgree(false);
  }

  return (
    <>
      {modal ? <Backdrop onBackdropClose={modalBackdropCloseHandler} /> : null}
      {modal ? (
        <Modal
          onCloseModal={modalBackdropCloseHandler}
          message={message}
          onAgreement={agreementHandler}
          enableButton={confirmAgree}
        />
      ) : null}
      <AuthForm
        admin={false}
        onShowMessage={showMessageHandler}
        resetAgreement={resetAgreementState}
      />
    </>
  );
}

export default AuthPage;
