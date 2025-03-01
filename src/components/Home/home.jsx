import React, { useState } from "react";
import "./home.css";
import axios from "axios";
import { initTE } from "tw-elements";

initTE();

export const Home = ({ setPlayerData, setMatchesData, setPlayerData2, Region }) => {
  const [searchText, setSearchText] = useState("");
  const [select, setSelect] = useState("eu");
  const [lastGames, setLastGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = "HDEV-93cf725b-1ded-4682-b479-40e9bad6faec";
  const baseUrl = "https://api.henrikdev.xyz/valorant/v1";

  const splited = searchText.replace(/#/, "/");
  const region = select;

  const scrollToContent = () => {
    setTimeout(() => {
      window.scrollBy({
        top: 800,
        left: 0,
        behavior: "smooth",
      });
    }, 1000);
  };

  const fetchData = async (puuid) => {
    try {
      const APIRankCall = `${baseUrl}/by-puuid/mmr/${region}/${puuid}?api_key=${apiKey}`;
      const APICallSting = `${baseUrl}/by-puuid/account/${puuid}?api_key=${apiKey}`;
      const APIMatches = `${baseUrl}/by-puuid/lifetime/matches/${region}/${puuid}?mode=competitive&size=15&api_key=${apiKey}`;

      const [rankResponse, stingResponse, matchesResponse] = await axios.all([
        axios.get(APIRankCall),
        axios.get(APICallSting),
        axios.get(APIMatches),
      ]);

      setPlayerData2(rankResponse.data.data);
      setPlayerData(stingResponse.data.data);
      setMatchesData(matchesResponse.data.data);
      setLastGames(matchesResponse.data.data); // Storing last 15 games
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const searchForPlayer = async () => {
    scrollToContent();
    setLoading(true);

    try {
      const APICallSting = `${baseUrl}/account/${splited}?api_key=${apiKey}`;
      const APIRankCall = `${baseUrl}/mmr/${region}/${splited}?api_key=${apiKey}`;
      const APIMatches = `${baseUrl}/lifetime/matches/${region}/${splited}?mode=competitive&size=15&api_key=${apiKey}`;

      const [stingResponse, rankResponse, matchesResponse] = await axios.all([
        axios.get(APICallSting),
        axios.get(APIRankCall),
        axios.get(APIMatches),
      ]);

      setPlayerData(stingResponse.data.data);
      setPlayerData2(rankResponse.data.data);
      setMatchesData(matchesResponse.data.data);
      setLastGames(matchesResponse.data.data); // Storing last 15 games
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="home bg-black text-white h-full p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Venato: Valorant Albanian Tracker</h1>
        <p className="text-lg">Track your Valorant stats, ranks, and matches in one place!</p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="relative mb-6 w-full max-w-md">
          <p>Name#Tag</p>
          <input
            type="text"
            className="peer block w-full rounded-lg border-2 border-gray-300 bg-transparent px-4 py-3 text-lg text-white placeholder-transparent focus:border-blue-500 focus:outline-none"
            id="search-bar"
            placeholder="Search Player by Name#Tag"
            onChange={(e) => setSearchText(e.target.value)}
            required
          />
          <label
            htmlFor="search-bar"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-xl transition-all duration-200 ease-out peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500"
          >
            
          </label>
        </div>

        <div className="flex gap-4 mb-6">
          <select
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            className="bg-transparent border-2 border-gray-300 text-white px-4 py-2 rounded-lg text-lg focus:border-blue-500 focus:outline-none"
          >
            <option value="na">NA</option>
            <option value="eu">EU</option>
            <option value="ap">AP</option>
            <option value="kr">KR</option>
          </select>

          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600 transition-all duration-200"
            onClick={searchForPlayer}
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>
    </div>
  );
};
