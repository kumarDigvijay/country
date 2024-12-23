import React, { useEffect, useState } from "react";
import Input from "./Input";
import List from "./List";

export default function App() {
  let [country, setCountry] = useState([]);
  let [searchData, setSearchData] = useState(false);

  let getCountries = async () => {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();

    setCountry(data);
  };

  let search = async (param) => {
    console.log(param);

    let response = await fetch(`https://restcountries.com/v3.1/name/${param}`);

    let data = await response.json();
    setSearchData(true);

    setCountry([...data]);
  };

  const checkSearchData = (data) => {
    if (data.length === 0) {
      setSearchData(false);
    }
  };

  useEffect(() => {
    if (!searchData) {
      getCountries();
    }
    // console.log(country);
  }, [searchData, country.length]);

  return (
    <div className="container mt-4">
      <Input search={search} checkSearchData={checkSearchData} />
      <List country={country} />
    </div>
  );
}
