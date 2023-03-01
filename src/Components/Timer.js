import React, { useEffect, useState } from 'react';

const Timer = ({ maxTime }) => {
  const [count, setCount] = useState(maxTime);
  useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount(count - 1), 1000);
    }
  }, [count]);
  return <span>{count === 0 ? alert('Voce perdeu') : count}</span>;
};

export default Timer;
