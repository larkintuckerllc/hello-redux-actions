/* eslint-disable import/prefer-default-export */
export const get = () => new Promise((resolve) => {
  // TODO: EXAMPLE OF FAILURE
  // TODO: USE SILLYNAME
  window.setTimeout(() => resolve('Howdy'), 1000);
  // window.setTimeout(() => reject(new Error('BARF')), 1000);
});
