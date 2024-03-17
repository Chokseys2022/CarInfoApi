// // CarMake.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CarMake = () => {
//     const [carMakes, setCarMakes] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const fetchCarMakes = async () => {
//         setIsLoading(true);

//         const options = {
//             method: 'GET',
//             url: 'https://car-data.p.rapidapi.com/cars/makes',
//             headers: {
//                 'X-RapidAPI-Key': '0e5840fce5msh64e8ae08cf2c1aep165dedjsnbefc17e7a46b',
//                 'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
//             }
//         };

//         try {
//             const response = await axios.request(options);
//             console.log(response.data);
//             setCarMakes(response.data);
//         } catch (error) {
//             console.error('Error:', error);
//             setError(error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCarMakes();
//     }, []);

//     return (
//         <div>
//             <h2>Car Makes</h2>
//             <button onClick={fetchCarMakes} disabled={isLoading}>
//                 {isLoading ? 'Fetching...' : 'Fetch Car Makes'}
//             </button>
//             {error && <div>Error: {error.message}</div>}
//             {!isLoading && carMakes.length > 0 && (
//                 <ul>
//                     {carMakes.map(make => (
//                         <li key={make.id}>
//                             {make.make}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default CarMake;
