import React from 'react';

const ItineraryPage = ({ destination, weatherData, itinerary }) => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-center text-2xl font-bold mb-6">Your Travel Itinerary for {destination}</h1>

                {/* Weather Section */}
                <div className="bg-blue-100 p-6 rounded-lg mb-6">
                    <h2 className="text-lg font-semibold mb-4">Weather Forecast for {destination}</h2>
                    <ul>
                        {weatherData.map((day, index) => (
                            <li key={index} className="forecast-item mb-2">
                                <strong>{day.date}:</strong> {day.temperature} - {day.description}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Itinerary Section */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">Your Personalized Itinerary</h2>
                    <p>{itinerary}</p>
                </div>
            </div>
        </div>
    );
};

export default ItineraryPage;
