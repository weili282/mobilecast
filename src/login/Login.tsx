import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  useIonRouter,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";
import { useAuthConnect } from "@ionic-enterprise/auth-react";
import logoSVG from '../asset/icon/biglogo.svg';

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
    <IonPage  color="primary">
     
      <IonContent color="primary" style={{display:"block",textAlign: "center"}}>
        <IonGrid>
          <IonCol>
      <IonIcon  style={{width:300,height:400}}src={logoSVG}  />
        <IonButton color='tertiary' expand="block" onClick={handleLogin}>
          Login
        </IonButton>
        {error && (
          <>
            <div>error</div>
            <div>{JSON.stringify(error)}</div>
          </>
        )}
        </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;