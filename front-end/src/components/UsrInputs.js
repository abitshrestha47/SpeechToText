import React from 'react';
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition';

const UsrInputs=()=>{
    const startListening=()=>SpeechRecognition.startListening({continuous:true,language:'en'});
    const {transcript,browserSupportsSpeechRecognition}=useSpeechRecognition();
    if(!browserSupportsSpeechRecognition){
        return null;
    }
    // const HandleClick=()=>{
    //     const recognition=new window.webkitSpeechRecognition();

    //     recognition.onresult=event=>{
    //         const transcript=event.results[0][0].transcript;
    //         console.log(transcript);
    //     }
    //     recognition.start();
    // }
    return(
        <div className='UsrInputs'>
            <h1>Speech To Text</h1>
            <div className='saySomething'>
                <label>Say Something . . .</label>
                <button type="button" onClick={startListening} className='usrButton'> <i className="material-icons">mic</i></button>
            </div>
           
            <input type="text" value={transcript} placeholder='Your text will be shown here...'/>
        </div>
    )
}

export default UsrInputs;