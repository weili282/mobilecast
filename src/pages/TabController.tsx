import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, homeOutline, homeSharp, menuSharp, searchOutline, searchSharp, square, triangle, ellipsisVerticalSharp } from 'ionicons/icons';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

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
const TabController: React.FC = () => (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tab1">
          <Tab1 />
        </Route>
        <Route exact path="/tab2">
          <Tab2 />
        </Route>
        <Route path="/tab3">
          <Tab3 />
        </Route>
        <Route exact path="/">
          <Redirect to="/tab1" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom" color="primary">
          <IonTabButton tab="tab1" href="/tab1" >
            <IonIcon class='icon' icon={searchSharp} />
        
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon class='icon' icon={homeSharp} />
           
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon class='icon' icon={menuSharp} />
           
          </IonTabButton>
        </IonTabBar>
    </IonTabs>
  );

  export default TabController;