import React, { useContext } from "react";
import { Redirect, Route,Switch,useLocation } from 'react-router-dom';
import { UserContext, UserContextProvider } from "./UserContex";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  isPlatform,
} from '@ionic/react';
import {
  AuthConnectProvider,
  PrivateRoute,
} from "@ionic-enterprise/auth-react";
import { useAuthConnect } from "@ionic-enterprise/auth-react";
import { IonReactRouter, } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Login from './login/Login';
import Logout from './login/Logout';
import Callback from './login/Callback';
import PodcastPage from  './pages/Podcast'
import SubscriptionsPage from  './pages/Subscriptions'
import TabController from './pages/TabController';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const platform = isPlatform("capacitor") ? "capacitor" : "web";

const redirectUri = isPlatform("capacitor")
  ? "com.oktapreview.t-mobile:/callback"
  : "https://dev.sprintu.com/login";

const logoutUrl = isPlatform("capacitor")
  ? "com.oktapreview.t-mobile:/"
  : "https://dev.sprintu.com/";
  

  const AuthConnectContainer: React.FC = () => {
    const location = useLocation();
   
    return (
      <AuthConnectProvider
        checkSessionOnChange={location.pathname}
        logLevel={"ERROR"}
        authConfig={"okta"}
        platform={"web"}
        clientID={"0oa12hthsfmElQhhe0h8"}
        discoveryUrl={"https://t-mobile.oktapreview.com/oauth2/aus12hte7hwztaMuH0h8/.well-known/oauth-authorization-server"}
        redirectUri={redirectUri}
        scope={"openid profile email address phone offline_access"}
        logoutUrl={logoutUrl}
        iosWebView={"private"}
        webAuthFlow={"PKCE"}
        implicitLogin={"POPUP"}
        loginPath={"/login"}
        onLoginSuccess={(result) => console.log("Login Successful", { result })}
        onLogoutSuccess={() => console.log("Logout Successful")}
      >
         <UserContextProvider>
          <Switch>
          
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/callback" component={Callback} />
            <PrivateRoute path="/tabs" component={TabController} initializingComponent={() => <div>...Private Route Loading...</div>} />        
            <Route path='/podcast' component={PodcastPage} />
            <Route path='/subscriptions' component={SubscriptionsPage} />
            <Redirect from="/" to="/login" exact />
          </Switch>
        </UserContextProvider>
      </AuthConnectProvider>
    );
  };

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
     
        <AuthConnectContainer />
      
    </IonReactRouter>
</IonApp>
);

export default App;
