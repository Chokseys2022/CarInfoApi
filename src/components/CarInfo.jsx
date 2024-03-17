// CarInfo.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CarInfo = () => {
    const [carsData, setCarsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        const options = {
            method: 'GET',
            url: 'https://car-data.p.rapidapi.com/cars',
            params: {
                limit: '10',
                page: '0'
            },
            headers: {
                'X-RapidAPI-Key': '0e5840fce5msh64e8ae08cf2c1aep165dedjsnbefc17e7a46b',
                'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setCarsData(response.data);
        } catch (error) {
            console.error('Error:', error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button onClick={fetchData} disabled={isLoading}>
                {isLoading ? 'Fetching...' : 'Fetch Car Data'}
            </button>
            {error && <div>Error: {error.message}</div>}
            {!isLoading && carsData.length > 0 && (
                <div>
                    <h2>Car Information</h2>
                    <ul>
                        {carsData.map(car => (
                            <li key={car.id}>
                                <strong>Name:</strong> {car.name}<br />
                                <strong>Make:</strong> {car.make}<br />
                                <strong>Model:</strong> {car.model}<br />
                                <strong>Year:</strong> {car.year}<br />
                                {/* Add other properties as needed */}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CarInfo;
