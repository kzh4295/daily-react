import React, { useReducer } from 'react';

const GAP = 100;

const reducer = (rgbState, action) => {
  switch (action.type) {
    case 'INCREMENT_R':
      return {
        ...rgbState,
        r: rgbState.r < 255 ? rgbState.r + GAP : rgbState.r,
      };
    case 'INCREMENT_G':
      return {
        ...rgbState,
        g: rgbState.g < 255 ? rgbState.g + GAP : rgbState.g,
      };
    case 'INCREMENT_B':
      return {
        ...rgbState,
        b: rgbState.b < 255 ? rgbState.b + GAP : rgbState.b,
      };
    case 'DECREMENT_R':
      return {
        ...rgbState,
        r: rgbState.r > 0 ? rgbState.r - GAP : rgbState.r,
      };
    case 'DECREMENT_G':
      return {
        ...rgbState,
        g: rgbState.g > 0 ? rgbState.g - GAP : rgbState.g,
      };
    case 'DECREMENT_B':
      return {
        ...rgbState,
        b: rgbState.b > 0 ? rgbState.b - GAP : rgbState.b,
      };
    default:
      return rgbState;
  }
};

const initialRGBState = {
  r: 0,
  g: 0,
  b: 0,
};

function App() {
  const [rgbState, dispatch] = useReducer(reducer, initialRGBState);

  const handleIncrease = (colorClass) => {
    dispatch({
      type: `INCREMENT_${colorClass}`,
    });
  };

  const handleDecrease = (colorClass) => {
    dispatch({
      type: `DECREMENT_${colorClass}`,
    });
  };

  return (
    <>
      <button onClick={() => handleIncrease('R')}>Increase R</button>
      <button onClick={() => handleIncrease('G')}>Increase G</button>
      <button onClick={() => handleIncrease('B')}>Increase B</button>

      <div
        style={{
          backgroundColor: `rgba(${rgbState.r}, ${rgbState.g}, ${rgbState.b}, 1)`,
          width: '100px',
          height: '100px',
        }}
      />

      <button onClick={() => handleDecrease('R')}>Decrease R</button>
      <button onClick={() => handleDecrease('G')}>Decrease G</button>
      <button onClick={() => handleDecrease('B')}>Decrease B</button>
    </>
  );
}

export default App;
