import { useState } from "preact/hooks";
import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { options,url } from "../../api"; 

const search = ({ onsearchchange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) =>{

           return fetch(`${url}?minPopulation=100000&namePrefix=${inputValue}`, options)
           .then(response => response.json())
           .then(response => {
            return{
                options: response.data.map((city)=>{
                    return{

                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} , ${city.countryCode}`
                    }
                })
            }
           })
           
  }

  const handleonchange = (searchdata) => {
    setSearch(searchdata);
    onsearchchange(searchdata);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleonchange}
      loadOptions={loadOptions}
    />
  );
};

export default search;
