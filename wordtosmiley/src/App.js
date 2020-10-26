import React, { useState, useEffect } from 'react';
import logo from './plain-Backgrounds.jpg';
import './App.css';

function App() {

  const [query, setQuery] = useState('');

  const inputRef = React.createRef()

  const updateQuery = () => {
    const inputText = inputRef.current.value
    setQuery(inputText)
  }


 const renderSwitch= (param) =>  {
   const param1 = param.toLowerCase();
    switch(param1) {
      case 'happy':
        return '😊';
      case 'food':
        return ' 🥘';
      case 'sad':
        return '😟';
      case 'dance':
        return ' 💃 ';
      case 'yes' :
        return ' ✔️';
      case 'no' :
        return ' ❌';
      case 'love' :
        return '💖';
      case 'art':
        return '🎨';
      case 'laptop':
        return '💻';
      default:
        return 'No Smiley , Please Enter the Text';
    }
  }

  
  useEffect(() => {
    console.log(`you have updated your query to ${query}`) 

  }, [query])

  const smiley =   renderSwitch(query);
  const val = query
  
  return (
    <div className="App" style={divStyle}>
    
      <header style ={{ height: 100 }}><h1> Welcome to Word to Smiley convertor </h1></header>
      <p>        </p>
      <input ref={inputRef}/>
      <button onClick={updateQuery} style ={{fontStyle : "oblique"}}>
        <strong>Convert to smiley</strong> </button>
      { val ?? null ? 
     <> <h4 id ="emoji">Smiley Detected :  </h4> <h1>{smiley}</h1> </>: <h4> Please Enter a Word </h4>}
    </div>
  )
}



const divStyle = {
 width: '100%',
  height: '900px',
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover'   
}



export default App;

