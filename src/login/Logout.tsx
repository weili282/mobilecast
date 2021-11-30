import { useIonRouter } from '@ionic/react';
import React, { useEffect } from 'react';
import { useAuthConnect } from '@ionic-enterprise/auth-react';

interface LogoutProps {}

const Logout: React.FC<LogoutProps> = () => {
  const router = useIonRouter();
  const { handleLogoutCallback } = useAuthConnect();

  useEffect(() => {
    (async () => {
      // use when implicitLogin is set to CURRENT
      // await handleLogoutCallback();
      // router.push('/tabs/tab1');
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default Logout;