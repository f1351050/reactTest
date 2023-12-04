
import { useState } from "react";
import axios from "axios";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';

function App() {

  const [city,setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityname: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });
 
  const getWeather = (e) => { 
      e.preventDefault();

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40ecf98be36227bc779058e3fdec0467&units=metric`)
      .then( res => 
      {
        console.log(res)
        setResults({
          country: res.data.sys.country,
          cityName: res.data.name,
          temperature: res.data.main.temp,
          conditionText: res.data.weather[0].main,
          icon: "https://openweathermap.org/img/wn/"+res.data.weather[0].icon+"@2x.png"
        })
      }
      ) 
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form  setCity={setCity} getWeather={getWeather}/>
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
