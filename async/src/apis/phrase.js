/* eslint-disable import/prefer-default-export */
let counter = 0;
export const getPhrase = () => new Promise((resolve, reject) => {
  window.setTimeout(() => {
    if (Math.floor(Math.random() * 2) % 2 === 0) {
      resolve(`SAMPLE PHRASE ${counter.toString()}`);
      counter += 1;
    } else {
      reject(new Error('SAMPLE ERROR'));
    }
  }, 2000);
});
