export const START_LISTENING = 'START_LISTENING';
export const STOP_LISTENING = 'STOP_LISTENING';
export const RESTART_LISTENING = 'RESTART_LISTENING';
export const ADD_RESULT = 'ADD_RESULT';

export function startListening() {
  return (dispatch) => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US'; 

    recognition.onresult = (e) => dispatch(handleResult(e));
    recognition.onend= () => dispatch(handleEnd());

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

function handleResult(e) {
  const index = e.results.length - 1;
  const result = e.results[index][0];
  const text = result.transcript;
  const confidence = Math.round(100 * result.confidence);

  return {
    type: ADD_RESULT,
    text,
    confidence,
  };
}

function handleEnd() {
  return {
    type: RESTART_LISTENING,
  };
}
