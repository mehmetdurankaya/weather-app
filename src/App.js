
import './App.css';
import Header from './Header';
import Content from "./Content"
import {useState} from 'react';
import Context  from './context';
function App() {    
  const [city, setCity]=useState("Hatay")     
  let fonksiyon=(e)=>{
    setCity(e.target.value)
  }  
  return (
    <div className="App">
      <Context.Provider value={{city,fonksiyon}}>
        <Header/>
        <Content/>
      </Context.Provider>  
    </div>
  );
}

export default App;
