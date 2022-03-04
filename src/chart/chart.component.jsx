//import React from 'react';
import '../App.css';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#74959A',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid({weatherData}) {
  return (
    <Box sx={{ flexGrow: 1 }} className="chart-container">
        <div className='weather-text-container'>
        <h2>Today:</h2>
      </div>
      <Grid container spacing={2} className="weather-today">
      {weatherData.daily.filter((dt,idx)=> idx < 1).map((weatherData) => {return (
          <Grid item xs={12} md={12} sx={{
            '&. MuiGrid-root': {
              color: 'black',
            },
          }}
          >
          <Item>
            <h1>
            {new Date(weatherData.dt*1000).toLocaleString("en-us", {weekday: "long"})}
            </h1>
            <h2>
            {new Date(weatherData.dt*1000).toLocaleString("en-us", { year: 'numeric', month: '2-digit', day: '2-digit' })}
            </h2>
            <div>
            <img 
                alt={weatherData.weather[0].icon}
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              />
            </div>
            <div>
            Probability of of Precipitation: {(weatherData.pop*100).toFixed(1)}%
            </div>
            {}
          </Item>
        </Grid>
       ) })}
       </Grid>
        <div className='weather-text-container'>
          <h2>
            Forecast:
          </h2>
        </div>
      <Grid container spacing={1} className="forecast">
      {weatherData.daily.filter((dt,idx)=> idx < 6 && idx > 0).map((weatherData) => {return (
          <Grid item xs={12} md={2.4} >
          <Item className="forecast-card-container">
            <h3>
            {new Date(weatherData.dt*1000).toLocaleString("en-us", {weekday: "long"})}
            </h3>
            <div>
            {new Date(weatherData.dt*1000).toLocaleString("en-us", { year: 'numeric', month: '2-digit', day: '2-digit' })}
            </div>
            <div>
              <img 
                alt={weatherData.weather[0].icon}
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              />
            </div>
            <div>
              <span>Probability of of Precipitation: {(weatherData.pop*100).toFixed(1)}% </span>
            </div>
            {}
          </Item>
        </Grid>
       ) })}
      </Grid>
    </Box>
  );
};
