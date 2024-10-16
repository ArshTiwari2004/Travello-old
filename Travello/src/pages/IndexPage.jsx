import React from 'react';

const IndexPage = () => {
    return (
        <div className="container mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-center text-2xl font-bold mb-8">Create Your Personalized Itinerary</h1>
            <form action="/generate_itinerary" method="post">
                <div className="form-group mb-4">
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Travel Duration (in days):</label>
                    <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" name="duration" required />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="destinations" className="block text-sm font-medium text-gray-700">Destinations (Cities/Regions):</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" name="destinations" required />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget (Luxury, Mid-range, Budget):</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" name="budget" required />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Interests (Culture, Adventure, Nature, Beaches, Historical sites, Food experiences):</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" name="interests" required />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="travel_style" className="block text-sm font-medium text-gray-700">Travel Style (Slow-paced, Moderate, Fast-paced):</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" name="travel_style" required />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="previous_visits" className="block text-sm font-medium text-gray-700">Previous Visits (Any places you want to avoid):</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" name="previous_visits" />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="food_preferences" className="block text-sm font-medium text-gray-700">Food Preferences (Vegetarian, Vegan, Allergies):</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" name="food_preferences" />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="traveling_with" className="block text-sm font-medium text-gray-700">Traveling with (Family, Solo, Friends, Partner):</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" name="traveling_with" required />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="hidden_gems" className="block text-sm font-medium text-gray-700">Do you want to explore hidden gems? (Yes/No):</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" name="hidden_gems" required />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="cultural_tips" className="block text-sm font-medium text-gray-700">Are you interested in local culture and trivia? (Yes/No):</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" name="cultural_tips" required />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="events" className="block text-sm font-medium text-gray-700">Do you want to know about local events/activities? (Yes/No):</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" name="events" required />
                </div>

                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Generate Itinerary</button>
            </form>
        </div>
    );
};

export default IndexPage;
