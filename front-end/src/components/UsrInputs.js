import React,{useState} from 'react';
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition';

const UsrInputs=()=>{
    const [isListening,setisListening]=useState(false);
    const copytoClipboard=()=>{
        navigator.clipboard.write(transcript)
        .then(()=>{
            alert('Copied to clipboard');
        })
        .catch(error=>{
            console.log(`error copying to clipboard: ${error}`);
        })
    }
    const startListening=()=>{
        SpeechRecognition.startListening({continuous:true,language:'en'});
        setisListening(true);
    }
    const stopListening=()=>{
        SpeechRecognition.stopListening();
        setisListening(false);
    }
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
                {isListening?<button type="button" onClick={stopListening} className='usrButton'><i className="material-icons">mic</i></button>:<button type="button" onClick={startListening} className='usrButton'><i className="material-icons">mic_off</i></button>}
            </div>
           
            <textarea rows={10} cols={20} value={transcript} placeholder='Your text will be shown here...'/>
            <button type='button' class="copyBtn" onClick={copytoClipboard}>Copy</button>
        </div>
    )
}

export default UsrInputs;