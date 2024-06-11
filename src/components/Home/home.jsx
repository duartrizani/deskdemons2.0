import React, { useState } from "react";
import "./home.css";
import killjoyimg from "../../images/Agents/KilljoyCard.jpg";
import axios from "axios";
import { Input, initTE } from "tw-elements";

initTE({ Input });

export const Home = ({ setPlayerData, setMatchesData, setPlayerData2, Region }) => {
  const [searchText, setSearchText] = useState("");
  const [select, setSelect] = useState("eu");

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
      const APIMatches = `${baseUrl}/by-puuid/lifetime/matches/${region}/${puuid}?mode=competitive&size=7&api_key=${apiKey}`;

      const [rankResponse, stingResponse, matchesResponse] = await axios.all([
        axios.get(APIRankCall),
        axios.get(APICallSting),
        axios.get(APIMatches),
      ]);

      setPlayerData2(rankResponse.data.data);
      setPlayerData(stingResponse.data.data);
      setMatchesData(matchesResponse.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const Blackjack = () => {
    scrollToContent();
    fetchData("0f19239f-b3e2-52b9-ac41-5a8e0842c50a");
  };

  const Geni = () => {
    scrollToContent();
    fetchData("f22b1ac0-9e7d-558c-86e8-66b71844dfdc");
  };

  const Res = () => {
    scrollToContent();
    fetchData("eff3031a-c6e9-598f-8f54-748c7fd3c41e");
  };

  const Meritoni = () => {
    scrollToContent();
    fetchData("9e1b02f2-73e2-5803-979d-1e98073cd453");
  };

  const Ylli = () => {
    scrollToContent();
    fetchData("9829e8fd-88fd-588b-9f05-7deb47ecab8a");
  };

  const searchForPlayer = async () => {
    scrollToContent();

    try {
      const APICallSting = `${baseUrl}/account/${splited}?api_key=${apiKey}`;
      const APIRankCall = `${baseUrl}/mmr/${region}/${splited}?api_key=${apiKey}`;
      const APIMatches = `${baseUrl}/lifetime/matches/${region}/${splited}?mode=competitive&size=3&api_key=${apiKey}`;

      const [stingResponse, rankResponse, matchesResponse] = await axios.all([
        axios.get(APICallSting),
        axios.get(APIRankCall),
        axios.get(APIMatches),
      ]);

      setPlayerData(stingResponse.data.data);
      setPlayerData2(rankResponse.data.data);
      setMatchesData(matchesResponse.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="home bg-black h-[800px]">
      <div className="flex flex-col justify-end">
        <div className="players flex text-red-600 justify-between px-10 items-center gap-10 h-[620px]">
          <div className="1 flex-col h-full justify-center text-center">
            <p className="py-5">Blackjack</p>
            <img
              alt=""
              src={killjoyimg}
              className="contain hover:-translate-y-[10px] duration-500"
              onClick={Blackjack}
            ></img>
          </div>

          <div className="2 flex-col h-full justify-center text-center">
            <p className="py-5">GenZi</p>
            <img
              alt=""
              src={killjoyimg}
              className="contain hover:-translate-y-[10px] duration-500"
              onClick={Geni}
            ></img>
          </div>

          <div className="3 flex-col h-full justify-center text-center">
            <p className="py-5">Res</p>
            <img
              alt=""
              src={killjoyimg}
              className="contain hover:-translate-y-[10px] duration-500"
              onClick={Res}
            ></img>
          </div>

          <div className="4 flex-col h-full justify-center text-center">
            <p className="py-5">Aquaman</p>
            <img
              alt=""
              src={killjoyimg}
              className="contain hover:-translate-y-[10px] duration-500"
              onClick={Meritoni}
            ></img>
          </div>

          <div className="5 flex-col h-full justify-center text-center">
            <p className="py-5">Annabelle</p>
            <img
              alt=""
              src={killjoyimg}
              className="contain hover:-translate-y-[10px] duration-500"
              onClick={Ylli}
            ></img>
          </div>
        </div>

        <div className="container text-red-600 flex flex-col items-center gap-2">
          <h5>VALORANT PLAYER SEARCHER</h5>

          <div className="relative mb-3" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput1"
              placeholder="Name"
              onChange={(e) => setSearchText(e.target.value)}
              required
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Name#Tag
            </label>
          </div>

          <div>
            <select
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              className="select-option"
            >
              <option value="na">NA</option>
              <option value="eu">EU</option>
              <option value="ap">AP</option>
              <option value="kr">KR</option>
            </select>
          </div>

          <button
            type="button"
            className="bg-red-700 text-white py-2 px-5"
            onClick={searchForPlayer}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
