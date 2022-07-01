import {useCallback, useState} from 'react';
import {isFunction} from '@/utils';

export type SetStatePrpps<T extends Record<string, string> >=<K extends keyof T>(
    state:Pick<T, K>
)=>void

const useSetState = <S extends Record<string, any>>(
    initialState: S | (() => S),
): [S, SetStatePrpps<S>] => {
    const [state, setState] = useState(initialState);

    const setMergeState = useCallback((patch: any) => {
        setState((nextState) => {
            const newState = isFunction(patch) ? patch(nextState) : patch;

            return newState?{...nextState,...newState}:nextState
        });
    }, []);

    return [state, setMergeState]
};

export default useSetState;
