import React from 'react';
import {IonHeader, 
  IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonThumbnail,IonImg} from '@ionic/react';


type MyModalProps = {
  closeAction: Function;
  text: string;
}
/*test*/
class MyModal extends React.Component<MyModalProps> {
   
  render() {
    return <>
      <IonHeader>
       
        <IonToolbar color="primary">
          <IonTitle></IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => this.props.closeAction()}>
              <IonIcon name="close" slot="icon-only"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      
      </IonContent>
    </>
  };
}

export default ({closeAction, podcast}: { closeAction: Function, podcast:object }) => (
  <MyModal closeAction={closeAction} podcast={podcast}>
  </MyModal>
)