import React from 'react';
import {IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonThumbnail,IonImg} from '@ionic/react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

type MyModalProps = {
  closeAction: Function;
  text: string;
}

class MyModal extends React.Component<MyModalProps> {
   
  render() {
    return <>
      <IonHeader>
          { console.log(this.props.podcast.audioURL)}
        <IonToolbar color="primary">
          <IonTitle>test</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => this.props.closeAction()}>
              <IonIcon name="close" slot="icon-only"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonCard>
          <IonCardHeader>
            <IonCardSubtitle></IonCardSubtitle>
            <IonCardTitle>{this.props.podcast.title}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
        
            <IonImg src={this.props.podcast.thumbnail} />
            <AudioPlayer
                autoPlay
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]} 
                src={this.props.podcast.audioURL}
                onPlay={e => console.log("onPlay")}
                // other props here
              />
            {this.props.podcast.description}
      </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  };
}

export default ({closeAction, podcast}: { closeAction: Function, podcast:object }) => (
  <MyModal closeAction={closeAction} podcast={podcast}>
  </MyModal>
)