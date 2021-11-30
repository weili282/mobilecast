import { useAuthConnect } from '@ionic-enterprise/auth-react';
import { useIonRouter } from '@ionic/react';
import React, { useEffect } from 'react';

interface CallbackProps {}

const Callback: React.FC<CallbackProps> = () => {
  const { handleLoginCallback } = useAuthConnect();
  const router = useIonRouter();

  useEffect(() => {
    async function doCallback() {
      try {
        // use when implicitLogin is set to CURRENT
        // await handleLoginCallback();
        // router.push('/tabs/tab1');
      } catch (e) { console.error(e)}
    }
    doCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default Callback;