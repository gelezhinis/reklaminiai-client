import React, { useState } from 'react';
import { useRouter } from 'next/router';

import ResetForm from '../../../components/ResetForm';
import Modal from '../../../components/ui/Modal';
import Backdrop from '../../../components/ui/Backdrop';


const ResetPasswordPage = () => {
  const [validUserId, setValidUserId] = useState();
  const [validToken, setValidToken] = useState();
  const [message, setMessage] = useState();
  const [modal, setModal] = useState(false);
  const [path, setPath] = useState();
  const [confirmAgree, setConfirmAgree] = useState(false);

  const router = useRouter();

  const API = process.env.NEXT_PUBLIC_API_URL;

  let content;

  if (router.isReady) {
    const userId = router.query.id;
    fetch(`${API}/user-data/${userId}`)
      .then((responseData) => responseData.json())
      .then((data) => {
        if (!data.userId) {
          setMessage(data.message);
          setModal(true);
        }
        data.userId === userId && setValidUserId(data.userId);
        setValidToken(router.query.token);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const showMessageHandler = (message, bool, url) => {
    setModal(true);
    setMessage(message);
    setConfirmAgree(bool);
    setPath(url);
  };

  const modalBackdropCloseHandler = () => {
    setModal(false);
    router.replace(path);
  };

  if (validUserId) {
    // content = <ResetForm userId={validUserId} token={validToken} onSHowMessage={showMessageHandler} />;
    content = (
      <>
        {modal ? (
          <Backdrop onBackdropClose={modalBackdropCloseHandler} />
        ) : null}
        {modal ? (
          <Modal
            onCloseModal={modalBackdropCloseHandler}
            message={message}
            enableButton={confirmAgree}
          />
        ) : null}
        <ResetForm userId={validUserId} token={validToken} onShowMessage={showMessageHandler} />
      </>
    );
  } else {
    content = (
      <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>{message}</p>
    );
  }

  return <>{content}</>;
};

export default ResetPasswordPage;
