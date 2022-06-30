import {useCallback, useEffect, useRef} from 'react';
import useLatest from './useLatest';

export const useInterval = (fn: () => void, delay: number | undefined = 0, options?: {
    immediate?: boolean;
}): () => void => {
    const immediate = options?.immediate;
    const isNumber = (value: unknown): boolean => typeof value === 'number';
    const fnRef = useLatest(fn);
    const timerRef = useRef<number | NodeJS.Timer>();

    useEffect(() => {
        if (!isNumber(delay) || delay < 0) return;

        if (immediate) {
            fnRef.current();
        }

        timerRef.current = setInterval(() => {
            fnRef.current();
        }, delay);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [delay]);

    const clear = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
    }, []);

    return clear;
};
