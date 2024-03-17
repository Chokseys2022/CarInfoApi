// import React from "react";
// import Axios from "axios";

// const CarSearch = ({ setCarMake, setLoadingMake, setCarModel, setLoadingModel }) => {
//   const fetchCarMake = () => {
//     setLoadingMake(true);
//     Axios.get("https://api.api-ninjas.com/v1/cars")
//       .then((response) => {
//         setCarMake(response.data.make);
//         setLoadingMake(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching car make:", error);
//         setLoadingMake(false);
//       });
//   };

//   const fetchCarModel = () => {
//     setLoadingModel(true);
//     Axios.get("https://api.api-ninjas.com/v1/cars?limit=2&model=")
//       .then((response) => {
//         setCarModel(response.data.model);
//         setLoadingModel(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching car model:", error);
//         setLoadingModel(false);
//       });
//   };

//   return (
//     <div className="button-container">
//       <button className="generate-button" onClick={fetchCarMake}>Generate Car Make</button>
//       <button className="model-button" onClick={fetchCarModel}>Fetch Car Model</button>
//     </div>
//   );
// };

// export default CarSearch;
