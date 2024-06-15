import Search from "./components/search/search"
import './App.css'
import Currentweather from "./components/current-weather/currentweather"
import Forecast from "./components/forecast/forecast"
import { weatherapikey, Weatherapi } from "./api"
import { useState } from "preact/hooks"

export function App() {

  const [currWeather,setcurrWeather] = useState(null)
  const [forecast,setforecast] = useState(null)


  const handleonsearchchange = (searchdata) =>{
    console.log(searchdata)
   const [lat, lon] = searchdata.value.split(" ")

   const currentweatherFeth = fetch(`${Weatherapi}/weather?lat=${lat}&lon=${lon}&appid=${weatherapikey}&units=metric`)
   const forcastFeth = fetch(`${Weatherapi}/forecast?lat=${lat}&lon=${lon}&appid=${weatherapikey}&units=metric`)
   
   Promise.all([currentweatherFeth, forcastFeth])
   .then(async(Response)=>{
    const weatherresponse = await Response[0].json()
    const forecastresponse = await Response[1].json()


    setcurrWeather({city: searchdata.label, ...weatherresponse})
    setforecast({city: searchdata.label, ...forecastresponse})
    // setcurrWeather(weatherresponse)
   })
   .catch((err)=>console.log(err))

  }
  
 console.log(currWeather)
 console.log(forecast)

  return (
    
      <div className="container">
       <Search onsearchchange={handleonsearchchange}/>
       {Currentweather && <Currentweather data={currWeather}  />}
       <Forecast data={forecast}/>
      </div>
     
    
  )
}
