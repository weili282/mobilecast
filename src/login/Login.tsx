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

const Login: React.FC<LoginProps> = (props) => {
  const { error, isAuthenticated, login, getIdToken } = useAuthConnect();
  const router = useIonRouter();
 
  useEffect(() => {
    if (isAuthenticated) {
     
      getIdToken().then((res)=>{
        fetch(`https://api.dev.clips.t-mobile.com/checkuser?id=${res.EmployeeNumber}`,{
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'omit',
          headers: {
          // 'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          }) .then(response => {
          response.json().then(function(data) {
            if(!data){
              const newUser = 
              { "id": `${res.EmployeeNumber}`,
                "firstname": `${res.FirstName}`,
                "lastname": `${res.LastName}`};
              fetch(`https://api.dev.clips.t-mobile.com/registeruser`,{
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'omit',
                headers: {
                // 'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(newUser)
                }) .then(response => {
                response.json().then(function(data) {
                  console.log(data)
                
                });
                })
            }
          
          });
          })
      });
      router.push("/tabs", "none", "replace");
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