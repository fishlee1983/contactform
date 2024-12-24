//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Contactform } from './components/Contactform';
import { Success } from './components/Success';

function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleIsSuccess = () => {
    setIsSuccess(true);
  }

 useEffect(() => {
    if(isSuccess){
      const timer = setTimeout(()=> setIsSuccess(false), 3000);
      return () => clearTimeout(timer);
    }

  }, [isSuccess]);


  return (
    <div className='App'>
      <Contactform setSuccess={handleIsSuccess}/>

      {isSuccess ? <Success /> : undefined }  
    </div>
  );
}

export default App;
