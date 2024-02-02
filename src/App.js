import Button from './components/Button/Button';
import Container from './components/Container/Container';
import FormattedTime from './components/FormattedTime/FormattedTime';
import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let intervalTimer;
    if (timer) {
      intervalTimer = setInterval(() => {
        setTime(prevTime => prevTime + 100);
      }, 100);
    }
    return () => {
      if (intervalTimer) clearInterval(intervalTimer);
    };
  }, [timer]);

  const handleStart = () => {
    setTimer(true);
  };

  const handleStop = () => {
    setTimer(false);
  };

  const handleReset = () => {
    setTimer(false);
    setTime(0);
  };

  return (
    <Container>
      <FormattedTime time={time}/>
      <Button onClick={handleStart}>Start</Button>
      <Button onClick={handleStop}>Stop</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Container>
  );
};

export default App;