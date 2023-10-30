import { useEffect, useState } from 'react';
import { Routes } from 'react-router-dom';

const App = () => {
  const [tabs, setTabs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const load = () => {
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <Routes>
        {}
      </Routes>
    </>
  );
};

export default App;
