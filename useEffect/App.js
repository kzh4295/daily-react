import { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [position, setPosition] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     const MOVEDISTANCE = 5;
  //     setPosition((prevPosition) => prevPosition + MOVEDISTANCE);
  //   }, 1_000);
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, []);

  useInterval(() => {
    const MOVEDISTANCE = 5;
    setPosition((prevPosition) => prevPosition + MOVEDISTANCE);
  }, 1_000);

  return (
    <div className='character' style={{ left: position + 'px' }}>
      캐릭터
    </div>
  );
}

export default App;
