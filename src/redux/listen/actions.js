export const INIT = 'INIT';
export const LISTEN = 'LISTEN';

export function init() {
  return {
    type: INIT,
  };
}

export function listen() {
  return {
    type: LISTEN,
  };
}
