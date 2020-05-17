type callbackType = (args?: any) => any;

function debounce(callback: callbackType, waitTime: number) {
  let timeNow: number = Date.now();
  return () => {
    if (timeNow - Date.now() + waitTime < 0) {
      callback();
      timeNow = Date.now();
    }
  };
}
export default debounce;
