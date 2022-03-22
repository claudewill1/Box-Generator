import React, { useState } from 'react'
import './App.css';
import NewBox from './components/NewBox';
import DisplayBox from './components/DisplayBox';

function App() {
  const [ currentColor, setCurrentColor ] = useState([])
  const sendColor = (color) => {
    setCurrentColor([...currentColor,color]);
  }
  return (
    <div className="App">
      <NewBox onSend={sendColor} />
      <DisplayBox color={currentColor} />
    </div>
  );
}

export default App;
