import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  useIonRouter,
} from "@ionic/react";
import { useAuthConnect } from "@ionic-enterprise/auth-react";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const { error, isAuthenticated, login } = useAuthConnect();
  const router = useIonRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/tabs/tab1", "none", "replace");
    }
  }, [isAuthenticated, router]);

  const handleLogin = () => {
    login();
  };  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton expand="block" onClick={handleLogin}>
          Login
        </IonButton>
        {error && (
          <>
            <div>error</div>
            <div>{JSON.stringify(error)}</div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Login;