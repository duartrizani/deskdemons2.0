import React, { useState } from "react";
import axios from "axios";


const SearchPlayer = () => {
  const [searchText, setSearchText] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_VALO_API_KEY;
  const baseUrl = process.env.REACT_APP_VALO_API;
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT; // Make sure it's set in .env

  const searchForPlayer = async () => {
    if (!searchText.includes("#")) {
      setMessage("Please enter a valid Name#Tag");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const splited = searchText.replace(/#/, "/");
      const playerResponse = await axios.get(`${baseUrl}/account/${splited}?api_key=${apiKey}`);
      const puuid = playerResponse.data.data.puuid;

      // Check if PUUID already exists
      const checkResponse = await axios.get(`${apiEndpoint}/auth/check-puuid/${puuid}`);
      if (checkResponse.data.exists) {
        setMessage("Puuid already exists in the database.");
      } else {
        // Save the puuid to API
        await axios.post(`${apiEndpoint}/auth/save-puuid`, { puuid });
        setMessage("Puuid saved successfully.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Error fetching player data. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="text-white p-6">
      <h2 className="text-2xl mb-4">ADD YOURSELF TO THE UPCOMING VALORANT ALBANIAN TRACKER</h2>
      <p>Name#Tag</p>
      <input
        type="text"
        className="border p-2 rounded text-black w-full mb-2"
        placeholder="Enter Name#Tag"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={searchForPlayer}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add"}
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default SearchPlayer;
