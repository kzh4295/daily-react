import { useState } from 'react';

export default function App() {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  const handleIncrement = (channel, setter) => {
    if (channel < 255) {
      setter(channel + 1);
    }
  };

  const handleDecrement = (channel, setter) => {
    if (channel > 0) {
      setter(channel - 1);
    }
  };

  return (
    <>
      <button onClick={() => handleIncrement(r, setR)}>Increase R</button>
      <button onClick={() => handleDecrement(r, setR)}>Decrease R</button>
      <button onClick={() => handleIncrement(g, setG)}>Increase G</button>
      <button onClick={() => handleDecrement(g, setG)}>Decrease G</button>
      <button onClick={() => handleIncrement(b, setB)}>Increase B</button>
      <button onClick={() => handleDecrement(b, setB)}>Decrease B</button>
      <div
        style={{
          backgroundColor: `rgba(${r}, ${g}, ${b}, 1)`,
          width: '100px',
          height: '100px',
        }}
      ></div>
    </>
  );
}


