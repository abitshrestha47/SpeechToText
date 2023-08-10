import React,{useState} from 'react';
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition';

const UsrInputs=()=>{
    const [isListening,setisListening]=useState(false);
    const [clear,setclear]=useState(false);
    const { resetTranscript } = useSpeechRecognition()
    const copytoClipboard=(text)=>{
        //to convert the string values to the array of strings
        const textBlob=new Blob([text],{type: 'text/plain'});
        //clipboard accepts the array of strings 
        //else the error is shown the data is not in sequence
        navigator.clipboard.write([
            new ClipboardItem({
                "text/plain": textBlob,
            }),
        ])
        .then(()=>{
            alert('Copied to clipboard');
        })
        .catch(error=>{
            console.log(`error copying to clipboard: ${error}`);
        })
    }
    const clearText=()=>{
        setclear(true);
        setTimeout(()=>{
            setclear(false);
        },1000);
        stopListening();
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
           
            <textarea rows={10} cols={20}  value={clear?'':transcript} placeholder='Your text will be shown here...'/>
            <button type='button' class="copyBtn Button1" onClick={()=>copytoClipboard(transcript)}>Copy</button>
            <button type='button' class='clearBtn Button1' onClick={clearText}>Clear</button>
        </div>
    )
}

export default UsrInputs;