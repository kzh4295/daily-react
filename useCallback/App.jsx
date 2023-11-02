import { useCallback } from 'react';

function App() {
  let text1, text2;

  const printLog1 = useCallback(() => {
    console.log('text1 변경되따');
  }, [text1]);

  const printLog2 = useCallback(() => console.log('text2 변경되따'), [text2]);

  return (
    <>
      <input type='text' value={text1} onChange={printLog1} />
      <input type='text' value={text2} onChange={printLog2} />
    </>
  );
}

export default App;

// text1, text2의 변화는 무관하게 반응하고 있습니닷!
