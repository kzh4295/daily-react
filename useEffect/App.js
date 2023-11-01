import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const moveDistance = 5;
      setPosition((prevPosition) => prevPosition + moveDistance);
    }, 1000);
  }, []);

  return (
    <div className='character' style={{ left: position + 'px' }}>
      캐릭터
    </div>
  );
}

export default App;
