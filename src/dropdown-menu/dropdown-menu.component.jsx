import React, { useState} from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const cities = [
  {city:"Caracas",lon:-61.8926 , lat: 6.9118},
  {city:"Nairobi",lon:40.4168,lat:3.7038},
  {city:"Cairo",lon:26.2041,lat:28.0473},
  {city:"New York",lat:40.7128,lon:-74.0060},
  {city:"Paris",lat:48.8566,lon:2.3522}
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