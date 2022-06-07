import React, { useEffect, useState, useContext } from 'react';

import { UserContext, UserContextProvider } from "../UserContex";
import { IonContent, 
IonHeader, 
IonPage, 
IonTitle, 
IonToolbar,
IonGrid,
IonRow,
IonCol,
IonAvatar,
IonItem,
IonLabel,
IonInput,
IonCard,
IonImg,
IonCardHeader,
IonCardTitle,
IonCardContent,
IonText ,
IonList,
IonThumbnail,
IonChip,
useIonModal,
IonModal,
useIonRouter,
IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Player from './Player.tsx'
import PodcastPage from './Podcast.tsx'
import { playCircleSharp,headset} from 'ionicons/icons';
import {truncate} from '../function/util.js'
//import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
//import { useAuthInterceptor } from '../core/auth';

import { IonIcon } from '@ionic/react';
import Glide from "@glidejs/glide";
// Required Core Stylesheet
import "../theme/glide.css";

// Optional Theme Stylesheet
//import "@glidejs/glide/src/assets/sass/glide.theme";

import { RouteComponentProps } from 'react-router';

interface PodcastPageProps extends RouteComponentProps<{
  id: string;
}> {}



async function sendGetRequest(){
const response = fetch(endpoint
,{
method: 'POST', // *GET, POST, PUT, DELETE, etc.
mode: 'cors', // no-cors, *cors, same-origin
cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
credentials: 'same-origin', // include, *same-origin, omit
headers: {
'Content-Type': 'application/json'
// 'Content-Type': 'application/x-www-form-urlencoded',
},
}
) .then(response => {
return response.text()
})
}

const Podcast: React.FC <PodcastPageProps> = ({match, history}) => {
const [audio, setAudio] = useState([
{
thumbnail:'',
title:'',
}
]);
const[podcast, setPodcast] = useState([]);
const[content, setContent] = useState({});

const user = useContext(UserContext);

const handleDismiss = () => {
dismiss();
};
const [present, dismiss] = useIonModal(Player, {
onDismiss: handleDismiss,
});

const [showModal, setShowModal] = useState(false);


async function closeModal() {
await setShowModal(false);
}

useEffect(() => {
  
fetch(`https://54wui56yo5.execute-api.us-east-1.amazonaws.com/develop/podcastshow?id=${match.params.id}`,{
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
  console.log(data)
  setPodcast(data);
});
})
}, [match.params.id]);

const getMinutes = (time)=>{
var hms = time||"00:00:00"; // your input string
var a = hms.split(':'); // split it at the colons
// Hours are worth 60 minutes.
var minutes = (+a[0]) * 60 + (+a[1]);
return minutes;
}
return (
<IonPage >
  <IonHeader>
    <div style={{backgroundColor:'#E20074',minHeight:150,topPadding:100}}>
      <IonText style={{color:'#fff'}}>
        <h2>{podcast.title}</h2>
      </IonText>
      <IonGrid>
        <IonRow>
          <IonCol size="8">
            <IonThumbnail >
              <IonImg style={{height:100,width:100,border:2,borderColor:"#E20074",float:'left',margin:5}}src={podcast.art} />
            </IonThumbnail>
           
          </IonCol>
          <IonCol>
            <IonButton size="small" color="secondary" >
            Subscribe
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  </IonHeader>

  <IonContent >
    <div style={{backgroundColor:"#fff",paddingTop:40,padding: 10,}}>
      <IonText >{new Date(podcast.createAt).toLocaleDateString("en-US")}</IonText><br/>
      <IonText >{truncate(podcast.description||'',140,true)}</IonText>
      <IonList>
      </IonList> 
    </div>
  </IonContent>
</IonPage>
);
};

export default Podcast;