import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
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
import Members from './pages/Members';
import Scrutins from './pages/Scrutins';
import ScrutinDetails from './pages/ScrutinDetails';
import StatsScrutin from './pages/StatsScrutin';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
       
        <Route exact path="/members" >
          <Members />
        </Route>

        <Route exact path="/scrutins">
          <Scrutins />
        </Route>

        <Route exact path="/scrutins/:id/members">
          <ScrutinDetails />
        </Route>

        <Route exact path="/scrutins/:id/stats">
          <StatsScrutin />
        </Route>

        <Route exact path="/">
          <Redirect to="/scrutins" />
        </Route>
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
