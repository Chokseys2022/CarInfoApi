// CarInfo.jsx
import React, { useState } from "react";
import axios from "axios";

//car component display car info
const CarInfo = () => {
  //variables manage data, loading it and any errors
  const [carsData, setCarsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //funct to fetch car data from 'RapidApi'
  const fetchData = async () => {
    setIsLoading(true); //setting loading to true

    //api rewuest options based on doc from the Rapid Api website
    const options = {
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars",
      params: {
        limit: "12",
        page: "0",
      },
      headers: {
        "X-RapidAPI-Key": "0e5840fce5msh64e8ae08cf2c1aep165dedjsnbefc17e7a46b",
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };
    //send api request with axios
    try {
      const response = await axios.request(options);
      console.log(response.data); //we log data hre
      setCarsData(response.data); //set data in state
    } catch (error) {
      console.error("Error:", error); //log error if fails
      setError(error);
    } finally {
      setIsLoading(false); //set loading to falase sucess or not
    }
  };
  //buttons to fetch data from api - isloading to show browser is fetching data
  return (
    <div>
      <button className="fetch-button" onClick={fetchData} disabled={isLoading}>
        {isLoading ? "Loading..." : "Fetch Car Information"}
      </button>
      {error && <div>Error: {error.message}</div>}{" "}
    {isLoading && carsData.length >0 && (
        <div className="car-container">
          <h2>Car Information</h2>
          <div className="car-cards">
            {carsData.map((car) => (
              <div key={car.id} className="car-card">
                <h3>{car.name}</h3>
                <p>
                  <strong>Make:</strong> {car.make}
                </p>
                <p>
                  <strong>Model:</strong> {car.model}
                </p>
                <p>
                  <strong>Year:</strong> {car.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarInfo;
