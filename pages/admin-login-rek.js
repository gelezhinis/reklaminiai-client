import {useContext} from 'react';
import {useRouter} from 'next/router';

import AuthForm from "../components/AuthForm";
import { Context } from '../store/context';

function AuthPage() {
  const ctx = useContext(Context);
  const router = useRouter();

  if (!ctx.isAuthenticated) {
    return ( 
      <AuthForm admin={true} />
    );
  } else {
    router.replace('/');
  }

};

export default AuthPage;