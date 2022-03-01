import React from 'react';
import {Line} from 'react-chartjs-2';

const BarChart = ({weatherData}) => {
  //console.log(new Date(weatherData.daily[0].dt*1000));

  return (<div>
      <Line
      data={{
        labels: weatherData.daily.filter((dt,idx)=> idx < 5).map((weatherData) => {return new Date(weatherData.dt*1000).toLocaleString("en-us", {weekday: "long"})}),
        yAxesID: 'Temp',
        datasets: [{
            label: 'Temperature [°C]',
            data: weatherData.daily.map(weatherData => {return weatherData.temp.day}),
            backgroundColor: [
                'rgba(255, 205, 0, 0.5)'
            ],
            borderColor: [
              'rgba(255, 205, 0, 0.9)'
            ],
            borderWidth: 1
          },
        {
          label: 'Probability of Precipitation [%]',
          yAxesID: 'POP',
          data: weatherData.daily.map(weatherData => {return weatherData.pop*100},'%'),
          backgroundColor: 'rgba(0, 99, 255, 0.2)',
          borderColor: 'rgba(0, 99, 255, 0.4)'
        }]
        }}
        height={450}
        width={500}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            }
          },
          scales: {
            yAxes: [{
              id: 'Temp',
              type: 'linear',
              position: 'left',
            },
            {
              id: 'POP',
              type: 'linear',
              position: 'right',
              ticks:{
                min: 0,
                max: 1 }

            }]
          }
        }}
      />
  </div>)
};

export default BarChart;