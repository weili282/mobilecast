import React, { useEffect, useState } from 'react';
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
        useIonRouter,
        IonModal,
      IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Player from './Player.tsx'
import PodcastPage from  './Podcast'
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

const data = [
  {
      "audienceList": [
          "Administrators"
      ],
      "mediaType": "audio/mpeg",
      "publishType": "Immediate",
      "expiration": false,
      "audioURL": "https://cdn.dev.clips.sprint.com/public/vco/MJqGqhDoTJ1CTbUx/audio_aac.m4a",
      "includeInfederatedSearch": false,
      "keywords": [
          "Short"
      ],
      "audioDuration": "00:00:30.",
      "owner": "T-Mobile-Employees_Venkatesh.Kadiyala@sprint.com",
      "writer": "none",
      "id": "MJqGqhDoTJ1CTbUx",
      "secondaryAuthor": "undefined",
      "thumbnail": "https://cdn.dev.clips.sprint.com/public/vco/MJqGqhDoTJ1CTbUx/poster.png",
      "allowDownload": false,
      "__typename": "Audio",
      "audioOwner": null,
      "groupsCanAccess": [
          "us-east-1_NQjk01ouf_T-Mobile-Employees",
          "Administrators"
      ],
      "createdAt": "2020-11-13T21:38:29.648Z",
      "audience": "Public",
      "fileSize": "470 KiB",
      "includeInClipsSearch": true,
      "creative": "none",
      "updatedAt": "2020-11-13T21:38:30.439064",
      "primaryAuthor": "T-Mobile-Employees_Venkatesh.Kadiyala@sprint.com",
      "publishDate": "2020-11-13T21:37:56.454Z",
      "description": "Short",
      "title": "Short"
  },
  {
      "audienceList": [
          "Administrators"
      ],
      "mediaType": "audio/mpeg",
      "publishType": "Immediate",
      "expiration": false,
      "audioURL": "https://cdn.dev.clips.sprint.com/public/vco/LdOrfyicKHlB3vai/audio_aac.m4a",
      "includeInfederatedSearch": false,
      "keywords": [
          "test",
          " sample",
          " audio"
      ],
      "audioDuration": "00:01:17",
      "owner": "T-Mobile-Employees_Venkatesh.Kadiyala@sprint.com",
      "writer": "none",
      "id": "LdOrfyicKHlB3vai",
      "secondaryAuthor": "undefined",
      "thumbnail": "https://cdn.dev.clips.sprint.com/public/vco/LdOrfyicKHlB3vai/poster.png",
      "allowDownload": false,
      "__typename": "Audio",
      "audioOwner": null,
      "groupsCanAccess": [
          "us-east-1_NQjk01ouf_T-Mobile-Employees",
          "Administrators"
      ],
      "createdAt": "2020-12-07T18:55:22.328Z",
      "audience": "Public",
      "fileSize": "1.15 MiB",
      "includeInClipsSearch": true,
      "creative": "none",
      "updatedAt": "2020-12-07T18:55:23.324246",
      "primaryAuthor": "T-Mobile-Employees_Venkatesh.Kadiyala@sprint.com",
      "publishDate": "2020-12-07T18:54:09.025Z",
      "description": "Test Patch",
      "title": "Test Patch"
  },
  {
      "audienceList": [
          "Administrators"
      ],
      "audioViews": 3,
      "mediaType": "audio/mpeg",
      "publishType": "Immediate",
      "expiration": false,
      "audioURL": "https://cdn.dev.clips.sprint.com/public/vco/oVsDxlayDRQQf4gs/audio_aac.m4a",
      "includeInfederatedSearch": false,
      "keywords": [
          "test"
      ],
      "audioDuration": "00:01:25.",
      "owner": "T-Mobile-Employees_Eric.Madsen@sprint.com",
      "writer": "none",
      "id": "oVsDxlayDRQQf4gs",
      "secondaryAuthor": "undefined",
      "thumbnail": "https://cdn.dev.clips.sprint.com/public/vco/oVsDxlayDRQQf4gs/poster.jpg",
      "allowDownload": false,
      "__typename": "Audio",
      "audioOwner": null,
      "groupsCanAccess": [
          "us-east-1_NQjk01ouf_T-Mobile-Employees",
          "Administrators"
      ],
      "createdAt": "2020-11-19T17:29:45.416Z",
      "audience": "Public",
      "fileSize": "501 KiB",
      "includeInClipsSearch": true,
      "creative": "none",
      "updatedAt": "2020-11-19T17:29:46.877349",
      "primaryAuthor": "T-Mobile-Employees_Eric.Madsen@sprint.com",
      "publishDate": "2020-11-19T17:21:32.890Z",
      "description": "this is a test file",
      "title": "Sample AUdio"
  },
  {
      "audienceList": [
          "Administrators"
      ],
      "publishType": "Immediate",
      "expiration": false,
      "audioURL": "https://cdn.dev.clips.sprint.com/public/vco/L9yzAPGeLmBWxMno/sources/audio.mp3",
      "keywords": [
          "test"
      ],
      "includeInfederatedSearch": false,
      "owner": "T-Mobile-Employees_Wei.2.Li@sprint.com",
      "writer": "none",
      "secondaryAuthor": "undefined",
      "id": "L9yzAPGeLmBWxMno",
      "thumbnail": "https://cdn.dev.clips.sprint.com/public/vco/L9yzAPGeLmBWxMno/poster.06",
      "allowDownload": false,
      "audioOwner": null,
      "__typename": "Audio",
      "groupsCanAccess": [
          "us-east-1_NQjk01ouf_T-Mobile-Employees",
          "Administrators"
      ],
      "createdAt": "2020-11-12T22:43:38.464Z",
      "audience": "Public",
      "includeInClipsSearch": true,
      "creative": "none",
      "updatedAt": "2020-11-12T22:43:38.464Z",
      "primaryAuthor": "T-Mobile-Employees_Wei.2.Li@sprint.com",
      "publishDate": "2020-11-12T22:42:55.251Z",
      "description": "test",
      "title": "test"
  },
  {
      "audienceList": [
          "Administrators"
      ],
      "publishType": "Immediate",
      "expiration": false,
      "audioURL": "https://cdn.dev.clips.t-mobile.com/public/vco/dbdQm0iDxLSm6761/sources/audio.mp3",
      "keywords": [
          "sdf"
      ],
      "includeInfederatedSearch": false,
      "owner": "Clips-User_P13011054",
      "writer": "T-Mobile-Employees_Wei.2.Li@sprint.com",
      "secondaryAuthor": "undefined",
      "id": "dbdQm0iDxLSm6761",
      "thumbnail": "https://cdn.dev.clips.t-mobile.com/public/vco/dbdQm0iDxLSm6761/poster.png",
      "allowDownload": false,
      "audioOwner": null,
      "__typename": "Audio",
      "groupsCanAccess": [
          "us-east-1_NQjk01ouf_Clips-User",
          "Administrators"
      ],
      "createdAt": "2021-09-03T15:29:46.581Z",
      "audience": "Public",
      "includeInClipsSearch": true,
      "creative": "none",
      "updatedAt": "2021-09-03T15:29:46.582Z",
      "primaryAuthor": "T-Mobile-Employees_Wei.2.Li@sprint.com",
      "publishDate": "2021-09-03T15:28:36.212Z",
      "description": "test",
      "title": "tes"
  },
  {
      "audienceList": [
          "Administrators"
      ],
      "audioViews": 23,
      "publishType": "Immediate",
      "expiration": false,
      "audioURL": "https://cdn.dev.clips.sprint.com/public/vco/OzFG7E8zTszCTg8K/audio.mp3",
      "includeInfederatedSearch": false,
      "keywords": [
          "test"
      ],
      "owner": "86718685-f935-4913-85d8-b5ad9288da6f",
      "writer": "none",
      "id": "OzFG7E8zTszCTg8K",
      "secondaryAuthor": "undefined",
      "thumbnail": "https://cdn.dev.clips.sprint.com/public/vco/OzFG7E8zTszCTg8K/poster.jpg",
      "allowDownload": false,
      "__typename": "Audio",
      "audioOwner": null,
      "groupsCanAccess": [
          "us-east-1_NQjk01ouf_Clips-User",
          "Administrators"
      ],
      "createdAt": "2020-10-28T16:54:23.215Z",
      "audience": "Public",
      "includeInClipsSearch": true,
      "creative": "none",
      "updatedAt": "2020-11-05T15:48:20.052Z",
      "primaryAuthor": "T-Mobile-Employees_Wei.2.Li@sprint.com",
      "publishDate": "2020-10-26T20:58:27.942Z",
      "description": "test",
      "title": "Updating Audio"
  },
  {
      "audienceList": [
          "Administrators"
      ],
      "audioViews": 5,
      "mediaType": "audio/vnd.wave",
      "publishType": "Immediate",
      "expiration": false,
      "audioURL": "https://cdn.dev.clips.sprint.com/public/vco/IhsVHjfkJR6fSZ93/audio_aac.m4a",
      "includeInfederatedSearch": false,
      "keywords": [
          "test",
          "Sample",
          "Example"
      ],
      "audioDuration": "00:04:54.",
      "owner": "T-Mobile-Employees_Venkatesh.Kadiyala@sprint.com",
      "writer": "none",
      "id": "IhsVHjfkJR6fSZ93",
      "secondaryAuthor": "undefined",
      "thumbnail": "https://cdn.dev.clips.sprint.com/public/vco/IhsVHjfkJR6fSZ93/poster.png",
      "allowDownload": false,
      "__typename": "Audio",
      "audioOwner": null,
      "groupsCanAccess": [
          "us-east-1_NQjk01ouf_T-Mobile-Employees",
          "Administrators"
      ],
      "createdAt": "2020-11-19T17:55:14.179Z",
      "audience": "Public",
      "fileSize": "80.8 MiB",
      "includeInClipsSearch": true,
      "creative": "none",
      "updatedAt": "2020-11-19T17:55:15.801566",
      "primaryAuthor": "T-Mobile-Employees_Venkatesh.Kadiyala@sprint.com",
      "publishDate": "2020-11-19T17:52:15.916Z",
      "description": "test",
      "title": "Audio Test"
  },
  {
      "audienceList": [
          "Administrators"
      ],
      "publishType": "Immediate",
      "expiration": false,
      "audioURL": "https://cdn.dev.clips.t-mobile.com/public/vco/jYpEtzbe8bZIswlp/sources/audio.mp3",
      "keywords": [
          "sd"
      ],
      "includeInfederatedSearch": false,
      "owner": "Clips-User_P13011054",
      "writer": "none",
      "secondaryAuthor": "undefined",
      "id": "jYpEtzbe8bZIswlp",
      "thumbnail": "https://cdn.dev.clips.t-mobile.com/public/vco/jYpEtzbe8bZIswlp/poster.png",
      "allowDownload": false,
      "audioOwner": null,
      "__typename": "Audio",
      "groupsCanAccess": [
          "us-east-1_NQjk01ouf_T-Mobile-Employees",
          "Administrators"
      ],
      "createdAt": "2021-06-08T14:47:01.981Z",
      "audience": "Public",
      "includeInClipsSearch": true,
      "creative": "none",
      "updatedAt": "2021-06-08T14:47:01.981Z",
      "primaryAuthor": "Clips-User_P13011054",
      "publishDate": "2021-06-08T14:45:45.542Z",
      "description": "audio",
      "title": "test audio"
  },
  {
      "audienceList": [
          "Administrators"
      ],
      "audioViews": 1,
      "mediaType": "m4a",
      "publishType": "Immediate",
      "expiration": false,
      "audioURL": "https://cdn.dev.clips.sprint.com/public/vco/LeJKtH3XGP9XrdOT/audio_aac.m4a",
      "includeInfederatedSearch": false,
      "keywords": [
          "tes"
      ],
      "audioDuration": "00:00:15.",
      "owner": "T-Mobile-Employees_Wei.2.Li@sprint.com",
      "writer": "none",
      "id": "LeJKtH3XGP9XrdOT",
      "secondaryAuthor": "undefined",
      "thumbnail": "https://cdn.dev.clips.sprint.com/public/vco/LeJKtH3XGP9XrdOT/poster.png",
      "allowDownload": false,
      "__typename": "Audio",
      "audioOwner": null,
      "groupsCanAccess": [
          "us-east-1_NQjk01ouf_Clips-User",
          "Administrators"
      ],
      "createdAt": "2020-11-19T16:50:55.931Z",
      "audience": "Public",
      "fileSize": "1248.7745098039215",
      "includeInClipsSearch": true,
      "creative": "none",
      "updatedAt": "2021-09-02T16:11:38.494936",
      "primaryAuthor": "T-Mobile-Employees_Wei.2.Li@sprint.com",
      "publishDate": "2020-11-19T16:50:01.304Z",
      "description": "test",
      "title": "test"
  },
  {
      "audienceList": [
          "Administrators"
      ],
      "mediaType": "audio/mpeg",
      "publishType": "Immediate",
      "expiration": false,
      "audioURL": "https://cdn.dev.clips.sprint.com/public/vco/INF9TalY65JiQRZi/audio_aac.m4a",
      "includeInfederatedSearch": false,
      "keywords": [
          "bvfvb"
      ],
      "audioDuration": "00:05:48.",
      "owner": "T-Mobile-Employees_Venkatesh.Kadiyala@sprint.com",
      "writer": "none",
      "id": "INF9TalY65JiQRZi",
      "secondaryAuthor": "undefined",
      "thumbnail": "https://cdn.dev.clips.sprint.com/public/vco/INF9TalY65JiQRZi/poster.jpg",
      "allowDownload": false,
      "__typename": "Audio",
      "audioOwner": null,
      "groupsCanAccess": [
          "us-east-1_NQjk01ouf_T-Mobile-Employees",
          "Administrators"
      ],
      "createdAt": "2020-11-13T21:37:51.461Z",
      "audience": "Public",
      "fileSize": "8.02 MiB",
      "includeInClipsSearch": true,
      "creative": "none",
      "updatedAt": "2020-11-13T21:38:04.137313",
      "primaryAuthor": "T-Mobile-Employees_Venkatesh.Kadiyala@sprint.com",
      "publishDate": "2020-11-13T21:37:16.513Z",
      "description": "dvdfbv",
      "title": "dvdv"
  },
  {
      "audienceList": [
          "Administrators"
      ],
      "mediaType": "audio/mpeg",
      "publishType": "Immediate",
      "expiration": false,
      "audioURL": "https://cdn.dev.clips.sprint.com/public/vco/6CTakmZqx5cPieYK/audio_aac.m4a",
      "includeInfederatedSearch": false,
      "keywords": [
          "test"
      ],
      "audioDuration": "00:00:15.",
      "owner": "T-Mobile-Employees_Wei.2.Li@sprint.com",
      "writer": "none",
      "id": "6CTakmZqx5cPieYK",
      "secondaryAuthor": "undefined",
      "thumbnail": "https://cdn.dev.clips.sprint.com/public/vco/6CTakmZqx5cPieYK/poster.jpg",
      "allowDownload": false,
      "__typename": "Audio",
      "audioOwner": null,
      "groupsCanAccess": [
          "us-east-1_NQjk01ouf_T-Mobile-Employees",
          "Administrators"
      ],
      "createdAt": "2020-11-19T15:43:57.649Z",
      "audience": "Public",
      "fileSize": "123 KiB",
      "includeInClipsSearch": true,
      "creative": "none",
      "updatedAt": "2020-11-19T15:43:59.590042",
      "primaryAuthor": "T-Mobile-Employees_Wei.2.Li@sprint.com",
      "publishDate": "2020-11-19T15:42:46.205Z",
      "description": "test",
      "title": "test"
  }
]


const  endpoint  =  'https://651ru2f8j2.execute-api.us-east-1.amazonaws.com/staging/latestaudio ';

async function sendGetRequest(){
 
  const response =  fetch(endpoint
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
  )  .then(response => {
    return response.text()
  })
 
  }
   
 /* 
  axios.defaults.headers.common['Content-type'] = 'application/json';
  const res =  axios.get(endpoint, { headers: { 'contenttype': 'application/json' } });

  return axios({
    url: endpoint,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
  }
  }).then(response => {

    console.log(response);
    return response.data;
  })
  */
const Tab1: React.FC = () => {
  const router = useIonRouter();
    const [audio, setAudio] = useState([
        {
            thumbnail:'',
            title:'',
        }
    ]);
    const[podcast, setPodcast] = useState([]);
    const[content, setContent] = useState({});
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

  const simpleNavigate = (id) => {
    router.push(`/tabs/podcast/${id}`, "forward", "push");
    }

  useEffect(() => {
    
      console.log('home')
    fetch('https://651ru2f8j2.execute-api.us-east-1.amazonaws.com/staging/latestaudio',{
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
            setAudio(data);
          });
    })

    fetch('https://651ru2f8j2.execute-api.us-east-1.amazonaws.com/staging/podcastlist',{
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
            new Glide(".glide", {
              peek: 50,
              perView: 2,
              type: "carousel"
            }).mount();
          });
    })
   
  }, []);

  const getMinutes = (time)=>{
    var hms = time||"00:00:00";   // your input string
    var a = hms.split(':'); // split it at the colons
    
    // Hours are worth 60 minutes.
    var minutes = (+a[0]) * 60 + (+a[1]);
    return minutes;
  }
  return (
    <IonPage style={{marginTop:46}} >
    
 
    <IonContent fullscreen class='main1' >
    <IonModal isOpen={showModal}>
        <Player closeAction={closeModal}
                podcast ={content}>
        </Player>
      </IonModal>

<div class="glide" style={{backgroundColor:'#E20074',minHeight:110}}>
  <div data-glide-el="track" class="glide__track">
    <ul class="slides">
    {podcast.map((podcast) => (
      <li  class="slide">
         <div  onClick={() => {simpleNavigate(podcast.id)}}>
          
           <IonImg  src={podcast.art}/>
          </div>
      </li>
    ))}
    </ul>
  </div>
</div>
    <IonList>
    {audio.map((podcast) => (
      
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
       ))}
    </IonList>   
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
