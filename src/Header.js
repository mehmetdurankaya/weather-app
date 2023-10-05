import { useContext, useState,useEffect } from "react"
import Context from "./context"



function Header(){ 
  const value = useContext(Context);
  const [citys, setCitys] = useState([]);

  useEffect(() => {
    async function getCitys() {
      try {
        let fetchData = await fetch("https://turkiyeapi.cyclic.app/api/v1/provinces?&limit=81");
        let response = await fetchData.json();
        setCitys(response.data);       
      } catch (error) {
        console.error("API veri alımında bir hata oluştu:", error);
      }
    }
    getCitys();
  }, []);
  return (    
    <div>
        <header className="Header">
        <select onChange={value.fonksiyon}>
        {citys && citys.length > 0 ? (
  citys.map((e, i) => (
    <option value={e.name} key={i}>
      {e.name}
    </option>
  ))
) : (
  <option value="" disabled>
    Şehirler yükleniyor...
  </option>
)}
</select>


        </header>
    </div>      
  )}


export default Header