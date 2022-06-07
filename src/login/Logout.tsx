import { useIonRouter } from '@ionic/react';
import React, { useEffect } from 'react';
import { useAuthConnect } from '@ionic-enterprise/auth-react';

interface LogoutProps {}

const Logout: React.FC<LogoutProps> = () => {
  const router = useIonRouter();
  const {logout } = useAuthConnect();
  
  useEffect(() => {
    logout();
    (async () => {
      // use when implicitLogin is set to CURRENT
      
      // router.push('/tabs/tab1');
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return(<div>logout</div>)
};

export default Logout;