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
import { useAuthConnect } from "@ionic-enterprise/auth-react";
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
const[podcastEpisodes, setPodcastEpisodes] = useState([]);
const[content, setContent] = useState({});
const[isSubscribe, setIsSubscribe] = useState(false);
const[userID, setUserID] = useState();
const { getIdToken } = useAuthConnect();
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
        setPodcastEpisodes(data.audio_list)
      });
      })
      getIdToken().then((res)=>{
          setUserID(res.EmployeeNumber)
          fetch(`https://api.dev.clips.t-mobile.com/checkusersubscriptions?id=${res.EmployeeNumber}`,{
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
            if(data.find(x => x.id === match.params.id)!==undefined) setIsSubscribe(true)
          });
          })
        })

}, [match.params.id]);

const getMinutes = (time)=>{
var hms = time||"00:00:00"; // your input string
var a = hms.split(':'); // split it at the colons
// Hours are worth 60 minutes.
var minutes = (+a[0]) * 60 + (+a[1]);
return minutes;
}
const subscribeAction=()=>{
  const databody = 
    { "id": `${userID}`,
    "event_type": `${!isSubscribe?'SUBSCRIBE':'UNSUBSCRIBE'}`,
    "podcast_id": `${match.params.id}`};
    setIsSubscribe(!isSubscribe)

  fetch(`https://api.dev.clips.t-mobile.com/usersubscriptions`,{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit',
    headers: {
    // 'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-wwddw-fordm-urlencoded',
    },
    body: JSON.stringify(databody)
    }) .then(response => {
    response.json().then(function(data) {
      console.log(data)
    })
      })
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
            <IonButton size="small" color="secondary" onClick={()=>subscribeAction()}>
           {!isSubscribe?'Subscribe':'Unsubscribe'} 
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  </IonHeader>

  <IonContent >
  <IonModal isOpen={showModal}>
        <Player closeAction={closeModal}
                podcast ={content}>
        </Player>
      </IonModal>
      
    <div style={{backgroundColor:"#fff",paddingTop:40,padding: 10,}}>
      <IonText >{new Date(podcast.createAt).toLocaleDateString("en-US")}</IonText><br/>
      <IonText >{truncate(podcast.description||'',140,true)}</IonText>
      <IonList>
             
      {podcastEpisodes.map((podcast) => (
      
      <IonItem  onClick={() => {setShowModal(true);setContent(podcast)}}>

         <IonThumbnail style={{marginTop:10,marginBottom:10,minHeight:100,fontSize:12 }}slot='start'>
           <IonImg  style={{width:75, height:75}}src={podcast.thumbnail}/>
           <div style={{verticalAlign:"middle",display:"flex"}}>
            <IonIcon color='primary' icon={playCircleSharp} class='icon' style={{margin:3}}/><IonText>{getMinutes(podcast.audioDuration)} min</IonText>
            </div> 
        </IonThumbnail>
        
        <IonGrid>
        <IonCol style={{fontSize:12,position:'absolute',top:0}}>
        <IonIcon color='primary' icon={headset} class='icon' style={{marginRight:3}}/><IonText ><b>{podcast.title}</b></IonText><br/>
          <IonText >{new Date(podcast.publishDate).toLocaleDateString("en-US")}</IonText><br/>
          <IonText >{truncate(podcast.description||'',140,true)}</IonText>
          
          </IonCol>
        </IonGrid>
      </IonItem>
       )
       )}

      </IonList> 
    </div>
  </IonContent>
</IonPage>
);
};

export default Podcast;