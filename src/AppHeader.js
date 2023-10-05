import { useContext, useState,useEffect } from "react"
import Context from "./context"


function AppHeader(){ 
  const value = useContext(Context)
  const [citys, setCitys] = useState([])
  useEffect(() => {
    async function getCitys() {
      let fetchDAta=await fetch("https://gist.githubusercontent.com/mehmetdurankaya/c3f59af871be95114c9263660692bb9a/raw/efc1785d564e4df47c3508deadd054af9b1405e3/turkey-cities.json");
      let response = await fetchDAta.json();
      setCitys(response.data)  
    }      
    getCitys();
  }, [])  
  return (    
    <div>
        <header className="AppHeader">
        <select onChange={value.fonksiyon} value={value.city}>
  {citys.map((e, i) => (
    <option value={e.name} key={i}>
      {e.name}
    </option>
  ))}
</select>                 
        </header>
    </div>      
  )
}

export default AppHeader