import React from 'react';
import './App.css';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='app-container'>
      <CalculatorDisplay />
      <ButtonContainer />
    </div>
  );
};

export default App;
