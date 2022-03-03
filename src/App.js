import React, {useState, useEffect} from 'react';
import ComboBox from './dropdown-menu/dropdown-menu.component';
import './App.css';
import FullWidthGrid from './chart/chart.component';

const API_KEY = '73f27d585583b11e0d2c1fcd4c77621c';

function App() {

  const [apiData, setApiData] = useState(JSON.parse(localStorage.getItem('apiData')) || 'Default Value');
  //console.log(apiData);

  const [state, setState] = useState({
    lat: apiData.lat,
    lon: apiData.lon
});

 const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${state.lat}&lon=${state.lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setApiData(data))
  }, [state]);

   useEffect(() => {
     localStorage.setItem('apiData', JSON.stringify(apiData));
   }, [apiData]);


 return (
    <div className="App">
      <header className="App-header">
        <h2>React Weather App</h2>
      </header>
            
      <div className='container'>
        <div className='input-container'>
          <ComboBox sendCity={(props) => setState(props)} coordinates={state}/>
          </div>
      </div>

      <div className='card'>
        
        {apiData.lat ? (
          <div className="chart-container">
          <FullWidthGrid weatherData={apiData} />
          </div>
        ) : (
          <div className='chart-alternative'> 
          <h1>Please choose a city first.</h1>
          </div>
        )}
    </div>
    </div>
  );
}

export default App;
