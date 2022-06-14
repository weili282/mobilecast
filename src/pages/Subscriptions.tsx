import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
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
        IonIcon,
        IonModal,
        IonListHeader,
        IonItemDivider,
      IonButton} from '@ionic/react';
import './Tab1.css';
import Player from './Player.tsx'

import { useAuthConnect } from "@ionic-enterprise/auth-react";
import {truncate} from '../function/util.js'




const Subscriptions: React.FC = () => {
  const router = useIonRouter();
   
  const[content, setContent] = useState([]);
  const location = useLocation();

const { getIdToken } = useAuthConnect();
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
    console.log('subscription')
    getIdToken().then((res)=>{
        console.log(res)
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
        setContent(data)
      });
      })
    })
  }, [location.key]);

  return (
    <IonPage style={{marginTop:46}} >
    <IonContent fullscreen class='main1' >
   
    <IonList>
    <IonListHeader lines="inset">
        <IonLabel> My Subscriptions</IonLabel>
      </IonListHeader>
    {content.map((podcast) => (
      
      <IonItem  onClick={() => {simpleNavigate(podcast.id)}}>
     
          <IonGrid>
          <IonRow>
            <IonCol size='4'>
        
           <IonImg src={podcast.art}/>
      
        </IonCol>
        <IonCol>
           <IonText><h6>{podcast.title}</h6></IonText>
           <IonText><p>{podcast.description}</p></IonText>
        </IonCol>
         
           
        </IonRow>
        </IonGrid>
      </IonItem>
     
       ))}
    </IonList>   
    </IonContent>
  </IonPage>
  );
};

export default Subscriptions;
