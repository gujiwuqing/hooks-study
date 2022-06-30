import React, {useState} from 'react';
import {useInterval} from '../hooks/useInterval';

export default () => {
    const [count, setCount] = useState(0);

    const clear = useInterval(() => {
        setCount(count + 1);
    }, 1000, {
        immediate: true
    });

    return <div>
        <div>count: {count}</div>
        <button onClick={clear}>clear</button>
    </div>;
};
