import React, { useState } from "react";
import "./home.css";
import killjoyimg from "../../images/Agents/KilljoyCard.jpg"

import axios, { spread } from "axios";
import {
  Input,
  initTE,
} from "tw-elements";

initTE({ Input });



export const Home = ({ setPlayerData, setMatchesData, setPlayerData2, Region }) => {

  const [searchText, setSearchText] = useState("");
  const [select, setSelect] = useState("eu");
  var splited = searchText.replace(/#/, "/");
  const region = select


  const Blackjack = () => {

    setTimeout(() => {

      window.scrollBy({
        top: 800, // could be negative value
        left: 0,
        behavior: 'smooth'
      });

    }, 1000);

    var APIRankCall =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/0f19239f-b3e2-52b9-ac41-5a8e0842c50a";
    var APICallSting =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/account/0f19239f-b3e2-52b9-ac41-5a8e0842c50a";
    var APIMatches =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/eu/0f19239f-b3e2-52b9-ac41-5a8e0842c50a?mode=competitive&size=6";

    // var puuid = "398c58e5-db7a-50cd-a7e8-bd454a44367d";

    const getRank = axios.get(APIRankCall);
    const getSting = axios.get(APICallSting);
    const getMatches = axios.get(APIMatches);

    axios.all([getRank, getSting, getMatches]).then(
      axios.spread((...allData) => {
        const AllDataRank = allData[0];
        const AllDataSting = allData[1];
        const AllDataMatches = allData[2];

        console.log(AllDataRank.data.data);
        console.log(AllDataSting.data.data);
        console.log(AllDataMatches.data);

        setPlayerData2(AllDataRank.data.data);
        setPlayerData(AllDataSting.data.data);
        setMatchesData(AllDataMatches.data.data);
      })
    );
  };

  const Geni = () => {

    setTimeout(() => {

      window.scrollBy({
        top: 800, // could be negative value
        left: 0,
        behavior: 'smooth'
      });

    }, 1000);

    var APIRankCall =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/f22b1ac0-9e7d-558c-86e8-66b71844dfdc";
    var APICallSting =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/account/f22b1ac0-9e7d-558c-86e8-66b71844dfdc";
    var APIMatches =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/eu/f22b1ac0-9e7d-558c-86e8-66b71844dfdc?mode=competitive&size=3";

    // var puuid = "28279579-95c7-5f6e-a488-8b6a62e1d6f5";

    const getRank = axios.get(APIRankCall);
    const getSting = axios.get(APICallSting);
    const getMatches = axios.get(APIMatches);

    axios.all([getRank, getSting, getMatches]).then(
      axios.spread((...allData) => {
        const AllDataRank = allData[0];
        const AllDataSting = allData[1];
        const AllDataMatches = allData[2];

        console.log(AllDataRank.data.data);
        console.log(AllDataSting.data.data);
        console.log(AllDataMatches.data);

        setPlayerData2(AllDataRank.data.data);
        setPlayerData(AllDataSting.data.data);
        setMatchesData(AllDataMatches.data.data);
      })
    );
  };

  const Res = () => {

    setTimeout(() => {

      window.scrollBy({
        top: 800, // could be negative value
        left: 0,
        behavior: 'smooth'
      });

    }, 1000);

    var APIRankCall =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/eff3031a-c6e9-598f-8f54-748c7fd3c41e";
    var APICallSting =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/account/eff3031a-c6e9-598f-8f54-748c7fd3c41e";
    var APIMatches =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/eu/eff3031a-c6e9-598f-8f54-748c7fd3c41e?mode=competitive&size=3"

    // var puuid = "eff3031a-c6e9-598f-8f54-748c7fd3c41e";

    const getRank = axios.get(APIRankCall);
    const getSting = axios.get(APICallSting);
    const getMatches = axios.get(APIMatches);

    axios.all([getRank, getSting, getMatches]).then(
      axios.spread((...allData) => {
        const AllDataRank = allData[0];
        const AllDataSting = allData[1];
        const AllDataMatches = allData[2];

        console.log(AllDataRank.data.data);
        console.log(AllDataSting.data.data);
        console.log(AllDataMatches.data);

        setPlayerData2(AllDataRank.data.data);
        setPlayerData(AllDataSting.data.data);
        setMatchesData(AllDataMatches.data.data);
      })
    );
  };

  const Meritoni = () => {

    setTimeout(() => {

      window.scrollBy({
        top: 800, // could be negative value
        left: 0,
        behavior: 'smooth'
      });

    }, 1000);

    var APIRankCall =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/9e1b02f2-73e2-5803-979d-1e98073cd453";
    var APICallSting =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/account/9e1b02f2-73e2-5803-979d-1e98073cd453";
    var APIMatches =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/eu/9e1b02f2-73e2-5803-979d-1e98073cd453?mode=competitive&size=3";

    // var puuid = "7a9ee60a-f186-5ad9-8177-dfe9d79d2ac5";

    const getRank = axios.get(APIRankCall);
    const getSting = axios.get(APICallSting);
    const getMatches = axios.get(APIMatches);

    axios.all([getRank, getSting, getMatches]).then(
      axios.spread((...allData) => {
        const AllDataRank = allData[0];
        const AllDataSting = allData[1];
        const AllDataMatches = allData[2];

        console.log(AllDataRank.data.data);
        console.log(AllDataSting.data.data);
        console.log(AllDataMatches.data);

        setPlayerData2(AllDataRank.data.data);
        setPlayerData(AllDataSting.data.data);
        setMatchesData(AllDataMatches.data.data);
      })
    );
  };

  const Ylli = () => {

    setTimeout(() => {

      window.scrollBy({
        top: 800, // could be negative value
        left: 0,
        behavior: 'smooth'
      });

    }, 1000);

    var APIRankCall =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/9829e8fd-88fd-588b-9f05-7deb47ecab8a";
    var APICallSting =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/account/9829e8fd-88fd-588b-9f05-7deb47ecab8a";
    var APIMatches =
      "https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/eu/9829e8fd-88fd-588b-9f05-7deb47ecab8a?mode=competitive&size=3";

    // var puuid = "ece12227-9613-5dba-9e4e-7e61b0ad0ecc";

    const getRank = axios.get(APIRankCall);
    const getSting = axios.get(APICallSting);
    const getMatches = axios.get(APIMatches);

    axios.all([getRank, getSting, getMatches]).then(
      axios.spread((...allData) => {
        const AllDataRank = allData[0];
        const AllDataSting = allData[1];
        const AllDataMatches = allData[2];

        console.log(AllDataRank.data.data);
        console.log(AllDataSting.data.data);
        console.log(AllDataMatches.data);

        setPlayerData2(AllDataRank.data.data);
        setPlayerData(AllDataSting.data.data);
        setMatchesData(AllDataMatches.data.data);
      })
    );
  };

  function searchForPlayer(event) {
    //set up the correct api call 

    var APICallSting =
      "https://api.henrikdev.xyz/valorant/v1/account/" + splited;

    var APIRankCall =
      "https://api.henrikdev.xyz/valorant/v1/mmr/" + region + "/" + splited;
    var APIMatches =
      "https://api.henrikdev.xyz/valorant/v1/lifetime/matches/" + region + "/" + splited + "?mode=competitive&size=3";




    const getSting = axios.get(APICallSting);
    const getRank = axios.get(APIRankCall);
    const getMatches = axios.get(APIMatches);

    axios.all([getSting, getRank, getMatches]).then(
      axios.spread((...allData) => {
        const AllDataSting = allData[0];
        const AllDataRank = allData[1];
        const AllDataMatches = allData[2];

        console.log(AllDataSting.data.data);
        console.log(AllDataRank.data.data);
        console.log(AllDataMatches.data);

        setPlayerData(AllDataSting.data.data);
        setPlayerData2(AllDataRank.data.data);
        setMatchesData(AllDataMatches.data.data);
      })
    );

    setTimeout(() => {

      window.scrollBy({
        top: 800, // could be negative value
        left: 0,
        behavior: 'smooth'
      });

    }, 1000);


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

          <div className="relative mb-3"
            data-te-input-wrapper-init
          >
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput1"
              placeholder="Name"
              onChange={e => setSearchText(e.target.value)}
              required />
            <label
              htmlFor="exampleFormControlInput1"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Name
            </label>
          </div>

          <div className="">
            <select className="" onChange={(e) => {
              const selectedRegion = e.target.value;
              setSelect(selectedRegion)
            }}>
              <option value="eu">Eu</option>
              <option value="na">Na</option>
            </select>
          </div>


          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={e => searchForPlayer(e)}
          >Search for player</button>
        </div>


      </div>

      <div className="stats"></div>



      <script
        type="text/javascript"
        src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
    </div>


  );
};
