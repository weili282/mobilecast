import React from 'react';
import {IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonThumbnail,IonImg} from '@ionic/react';
import AudioPlayer, { RHAP_UI }  from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import VideoPlayer from '../audioPlayer/VideoJS.js'
import ReactAudioPlayer from 'react-audio-player';
import {logoSVG} from '../asset/icon/30SeekForward.jsx';
import './player.css';
type MyModalProps = {
  closeAction: Function;
  text: string;
}
const forwardSvg = () =>
<svg xmlns="http://www.w3.org/2000/svg" width="19.47" height="19" viewBox="0 0 19.47 19">
<path id="Path_272" data-name="Path 272" d="M11.5,3a10.514,10.514,0,0,0-9.97,7.22L3.9,11A7.971,7.971,0,0,1,16.62,7.38L14,10h7V3L18.4,5.6A10.516,10.516,0,0,0,11.5,3M19,14v6a1.993,1.993,0,0,1-2,2H15a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2m-4,0v6h2V14H15m-4,6a2,2,0,0,1-2,2H5V20H9V18H7V16H9V14H5V12H9a2,2,0,0,1,2,2v1.5A1.5,1.5,0,0,1,9.5,17,1.5,1.5,0,0,1,11,18.5Z" transform="translate(-1.53 -3)" fill="#e21274"/>
</svg>

class MyModal extends React.Component<MyModalProps> {
  
  render() {
   
    
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [{
        src: this.props.podcast.audioURL,
        type: 'video/mp4'
      }]
    }
    return <>
      <IonHeader>
        {console.log(logoSVG)}
         
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
            <IonCardSubtitle></IonCardSubtitle>
            <IonImg src={this.props.podcast.thumbnail} />
            <IonCardTitle>{this.props.podcast.title}</IonCardTitle>
            {this.props.podcast.description}
            <AudioPlayer
                autoPlay
                showJumpControls={true}
                customVolumeControls={[]}
                customAdditionalControls={[]} 
                src={this.props.podcast.audioURL}
                onPlay={e => console.log("onPlay")}
                
                progressJumpSteps={{
                  forward: 30000,
                  backward: 30000
                }}
                customIcons={{
                  play:<svg height="32px"  version="1.1" viewBox="0 0 32 32" width="32px"  xmlns="http://www.w3.org/2000/svg"><g id="Layer_1"/><g id="play_x5F_alt"><path d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M10,24V8l16.008,8L10,24z   "  fill="#e21274"/></g></svg>,
                  forward: <svg xmlns="http://www.w3.org/2000/svg" width="19.47" height="19" viewBox="0 0 19.47 19">
                  <path id="Path_272" data-name="Path 272" d="M11.5,3a10.514,10.514,0,0,0-9.97,7.22L3.9,11A7.971,7.971,0,0,1,16.62,7.38L14,10h7V3L18.4,5.6A10.516,10.516,0,0,0,11.5,3M19,14v6a1.993,1.993,0,0,1-2,2H15a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2m-4,0v6h2V14H15m-4,6a2,2,0,0,1-2,2H5V20H9V18H7V16H9V14H5V12H9a2,2,0,0,1,2,2v1.5A1.5,1.5,0,0,1,9.5,17,1.5,1.5,0,0,1,11,18.5Z" transform="translate(-1.53 -3)" fill="#e21274"/>
                </svg>,
                rewind:<svg xmlns="http://www.w3.org/2000/svg" width="19.47" height="19" viewBox="0 0 19.47 19">
                <path id="Path_273" data-name="Path 273" d="M19,14v6a1.993,1.993,0,0,1-2,2H15a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2m-4,0v6h2V14H15m-4,6a2,2,0,0,1-2,2H5V20H9V18H7V16H9V14H5V12H9a2,2,0,0,1,2,2v1.5A1.5,1.5,0,0,1,9.5,17,1.5,1.5,0,0,1,11,18.5V20M12.5,3a10.514,10.514,0,0,1,9.97,7.22L20.1,11A7.971,7.971,0,0,0,7.38,7.38L10,10H3V3L5.6,5.6A10.516,10.516,0,0,1,12.5,3Z" transform="translate(-3 -3)" fill="#e21274"/>
              </svg>
                   
                }}
                // other props here
              />
            
           

    
     
      </IonContent>
    </>
  };
}

export default ({closeAction, podcast}: { closeAction: Function, podcast:object }) => (
  <MyModal closeAction={closeAction} podcast={podcast}>
  </MyModal>
)