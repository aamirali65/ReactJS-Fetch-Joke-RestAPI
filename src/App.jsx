import React, { useState, useEffect } from 'react';
import { Audio } from 'react-loader-spinner';

function App() {
  const [joke, setJoke] = useState('');
  const [loader, setloader] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () =>{
    setloader(true);
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });
    if(!response.ok){
      setJoke('Error in response.try again later')
      return
    }
    const data = await response.json();
    setJoke(data.joke);
    setloader(false);
  };
  return (
    <div className='flex flex-col h-screen items-center justify-center bg-purple-500 text-white'>
      <h1 className='text-5xl font-semibold mb-5'>Jokes</h1>
      { loader ? <div className='mb-5'>
        <Audio
      height="50"
      width="50"
      radius="9"
      color="white"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
    </div>:
      <p className='text-[20px] mb-5'>{joke}</p>
      }
          
      <button className='bg-green-500 px-5 py-3 rounded-lg' onClick={getData}>Change</button>
    </div>
  );
}

export default App;
