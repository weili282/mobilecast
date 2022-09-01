import { Redirect, Route,RouteComponentProps } from 'react-router-dom';
import React, { useEffect } from "react";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonGrid,
  IonCol,
  IonRow,
  IonChip,
  IonText,
  useIonRouter,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, homeOutline, homeSharp, menuSharp, searchOutline, searchSharp, square, triangle, ellipsisVerticalSharp, ellipsisVertical } from 'ionicons/icons';
import logoSVG from '../asset/icon/logo.svg';
import searchIcon from '../asset/icon/searchIcon.svg';
import homeIcon from '../asset/icon/homeIcon.svg';
import activityIcon from '../asset/icon/activityIcon.svg';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import PodcastPage from  './Podcast'
import SubscriptionsPage from  './Subscriptions'
import { person} from 'ionicons/icons';

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
import '../theme/variables.css';


const TabController: React.FC<RouteComponentProps> = (props) => {
  const router = useIonRouter();

  useEffect(() => {
   
  }, []);
  const simpleNavigate = (path) => {
    console.log('nav')
    router.push(`/tabs/${path}`, "forward", "push");
    }

return(
  <IonApp>
    <IonHeader  >
      <IonToolbar class="main" color="primary">
        
        <IonGrid slot='start' >
         <IonRow  >
           <IonIcon  style={{width:150,height:30}}src={logoSVG}  />
        </IonRow>
        </IonGrid>
       
         <IonRow  size-sm slot='end'style={{width:80,display:'flex', alignItems: 'center'}}>
         {/*<IonIcon  style={{fontSize:24}} class='icon' icon={ellipsisVertical} />*/}
      <IonAvatar style={{width:30,height:30,backgroundColor:'#999',paddingLeft:10}}>
     
      {/* <IonIcon style={{width:30,height:30}} icon={person}  />
       <img src="https://media.npr.org/assets/img/2021/11/08/gettyimages-1064367448-0a580d4a5a33558528b8ddd13b46dc67ef6643ab-s1100-c50.jpg" />*/}
      </IonAvatar>
        </IonRow>
      </IonToolbar>
    </IonHeader>

    <IonReactRouter >
      <IonTabs >
        <IonRouterOutlet>
        <Route exact path={props.match.url} component={Tab1} />
        <Route path={`${props.match.url}/podcast/:id`} component={PodcastPage} />
        <Route path={`${props.match.url}/home`} component={Tab1} />
        <Route path={`${props.match.url}/subscriptions`} component={SubscriptionsPage} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="primary">
          <IonTabButton tab="tab1" href="/tab1" >
            <IonIcon style={{width:28,height:28,opacity:.2}} class='icon' icon={searchIcon} />
        
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tabs">
            <IonIcon style={{width:40,height:40}}class='icon' icon={homeIcon} />
           
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tabs/subscriptions" >
            <IonIcon class='icon' onClick={()=>simpleNavigate('subscriptions')} icon={activityIcon} />
           
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  );
      }
  export default TabController;