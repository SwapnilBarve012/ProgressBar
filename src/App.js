import React, { useEffect, useState } from 'react';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => {
        if (val >= 100) {
          clearInterval(interval); 
          setSuccess(true); 
          return 100;
        }
        return val + 1;
      });
    }, 100);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className='App'>
      <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? 'Complete!' : 'Loading....'}</span>
    </div>
  );
};

export default App;
