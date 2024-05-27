import { useState } from "react"


const api = {
  key: "44f3f6958c6e4851d9da75a9fae460a8",
  base: "https://api.openweathermap.org/data/2.5/",
}


const Weather = () => {
  const [search, setSearch] = useState("")

   const searchPressed = () => {
    // fetch(`${api.base}weather?q=${search}&`)
    console.log('search pressed')
   }

  return <section className="weather-api">
    <h1>Check the weather</h1>

    {/* Search box */}
    <div>
      <input 
        type="text" 
        placeholder="Enter city/town..."
        onChange={(e) => setSearch(e.target.value)}
         />
      <button onClick={searchPressed}>Search pressed</button>
    </div>
    
    {/* Location */}
    <p>New York City, United States</p>
     {/* Temperature F/C  */}
    <p>32 °F</p>
     {/* Condition (Sunny) */}
    <p>Sunny</p>


  </section>
}

export default Weather
