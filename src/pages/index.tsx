import React, {useState} from 'react';
import useSetState from '../hooks/useSetState';
export default () => {
    const [state, setState] = useSetState({
        name: 'test',
        age: 18
    });


    return (
        <div>
            <div>name: {state.name}</div>
            <div>age: {state.age}</div>
            <button type="button" onClick={() => setState((prev) => ({ age: prev.age + 1 }))}>
                count + 1
            </button>
            <button type="button" onClick={() =>setState({name:'zsas'})}>
                count + 1
            </button>
        </div>
    );
};
