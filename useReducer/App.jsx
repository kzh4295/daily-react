import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_R1':
      return {
        ...state,
        r: state.r < 255 ? state.r + 100 : state.r,
      };
    case 'INCREMENT_G1':
      return {
        ...state,
        g: state.g < 255 ? state.g + 100 : state.g,
      };
    case 'INCREMENT_B1':
      return {
        ...state,
        b: state.b < 255 ? state.b + 100 : state.b,
      };
    case 'DECREMENT_R2':
      return {
        ...state,
        r: state.r > 0 ? state.r - 100 : state.r,
      };
    case 'DECREMENT_G2':
      return {
        ...state,
        g: state.g > 0 ? state.g - 100 : state.g,
      };
    case 'DECREMENT_B2':
      return {
        ...state,
        b: state.b > 0 ? state.b - 100 : state.b,
      };
    default:
      return state;
  }
};

const initialState = {
  r: 0,
  g: 0,
  b: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const onClick = (param) => {
    if (param.at(-1) === '1') {
      dispatch({
        type: `INCREMENT_${param}`,
      });
    } else {
      dispatch({
        type: `DECREMENT_${param}`,
      });
    }
  };

  return (
    <>
      <button onClick={() => onClick('R1')}>Increase R</button>
      <button onClick={() => onClick('G1')}>Increase G</button>
      <button onClick={() => onClick('B1')}>Increase B</button>

      <div
        style={{
          backgroundColor: `rgba(${state.r}, ${state.g}, ${state.b}, 1)`,
          width: '100px',
          height: '100px',
        }}
      ></div>

      <button onClick={() => onClick('R2')}>Decrease R</button>
      <button onClick={() => onClick('G2')}>Decrease G</button>
      <button onClick={() => onClick('B2')}>Decrease B</button>
    </>
  );
}

export default App;
