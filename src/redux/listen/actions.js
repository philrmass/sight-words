export const INIT = 'INIT';
export const LISTEN = 'LISTEN';
export const STOP = 'STOP';

let recognition;
export function init() {
  //??? move to start
  recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = 'en-US'; 
  recognition.onresult = addResult;
  recognition.onend= () => {
    console.log('END');
    //??? if listening, also clear result
    recognition.start();
  };

  return {
    type: INIT,
    recognition,
  };
}

//??? START_LISTENING
//??? STOP_LISTENING
//??? PROCESS_RESULT
//??? GOT_STOP
//??? GOT_RESULT

export function listen() {
  return {
    type: LISTEN,
  };
}

export function stop() {
  return {
    type: STOP,
  };
}

function addResult(e) {
  const index = e.results.length - 1;
  const result = e.results[index][0];
  console.log(`GOT [${result.transcript}] (${result.confidence.toFixed(2)})`);
  //??? result
}

export function processResult() {
}
