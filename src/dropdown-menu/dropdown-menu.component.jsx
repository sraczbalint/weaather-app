import React, { useState} from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const cities = [
  {city:"Berlin",lon: 52.52 , lat: 13.40},
  {city:"Budapest" ,lon: 47.49, lat: 19.04 },
  {city:"Praha",lon:50.07,lat:14.43},
  {city:"London",lon:51.51,lat:0.12},
  {city:"Milano",lat:9.19,lon:45.46}
];

export default function ComboBox(props) {

  const handleSubmit = (e,option) => {
    e.preventDefault();
       
  
    props.sendCity({
      lon: option.lon,
      lat: option.lat
    });
    
  };

  return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cities}
        onChange={handleSubmit}
        getOptionLabel={(option) => option.city || ""}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="City" />}
      />
  );
}