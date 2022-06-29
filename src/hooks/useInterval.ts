export const useInterval = (fn: () => void, delay?: number | undefined, options?: any): void => {
  delay = delay || 1000;
  setInterval(() => {
    fn();
  }, delay);
};
