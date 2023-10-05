import { useEffect,useState,useContext } from 'react'
import axios from 'axios'
import Context from "./context"

let days=["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]


function Content(){
  const value=useContext(Context)
  const [choice, setChoice]=useState(value.city)  
  useEffect(()=>{
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=56890d0a64ed4bf89e7202725230110&q=${value.city}&days=7&aqi=no&alerts=no`)
      .then(function (response){        
        setChoice(response)
      })
      .catch(function (error) {        
        //console.log(error);
      })      
  },[value.city])   
  return (
    <div className='container'>      
        <div className='Content'> 
        
        {
          choice!=="Hatay" ?choice.data.forecast.forecastday.map((t,i)=>{
            return <div className='col' key={i}>
              <div className='ContentText' >
                {days[new Date(t.date).getDay()]}
              </div>
              <div className='ContentPic'>                
                <img alt='mdk'  src={t.day.condition.icon}/>
              </div>
              <div className='ContentTemperatures'>                
                <p>{Math.ceil(t.day.maxtemp_c)+"°"}</p>
                <p>{Math.ceil(t.day.mintemp_c)+"°"}</p>
              </div>
            </div>
          }) : "Loading"
        }                    
        </div>
    </div>
  )
}

export default Content