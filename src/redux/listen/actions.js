export const START_LISTENING = 'START_LISTENING';
export const STOP_LISTENING = 'STOP_LISTENING';
export const ADD_RESULT = 'ADD_RESULT';

export function startListening() {
  return (dispatch) => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US'; 

    recognition.onspeechstart = () => console.log('speech start');
    recognition.onspeechend = () => console.log('speech end');
    //??? move to another function, handleResult
    recognition.onresult = (e) => {
      const index = e.results.length - 1;
      const result = e.results[index][0];
      const text = result.transcript;
      const confidence = Math.round(100 * result.confidence);

      dispatch({
        type: ADD_RESULT,
        text,
        confidence,
      });
    };
    //??? move to another function, handleEnd
    recognition.onend= () => {
      console.log('END');
      //??? if listening, also clear result, move to reducer
      recognition.start();
    };

    recognition.start();

    return dispatch({
      type: START_LISTENING,
      recognition,
    });
  };
}

export function stopListening() {
  return {
    type: STOP_LISTENING,
  };
}

//??? RESTART_LISTENING
//??? GOT_RESULT
