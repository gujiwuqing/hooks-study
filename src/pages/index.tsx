import React, {useState} from 'react';
import {useInterval} from '../hooks/useInterval';

export default () => {
  const [count, setCount] = useState(0);

  // useInterval(() => {
  //   setCount(count + 1);
  // }, 1000);

  return <div>count: {count}</div>;
};
