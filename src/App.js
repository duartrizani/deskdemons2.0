import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from "react";
import { Home } from "./components/Home/home";
import { Playerstats } from "./components/PlayerStats/playerstats";
import MaybeShowNavBar from "./components/Maybeshownavbar";
import SearchPlayer from "./components/Home/searchPlayer";

function App() {

  const [playerData, setPlayerData] = useState({});
  const [playerData2, setPlayerData2] = useState({});
  const [matchesData, setMatchesData] = useState({});

  const Region = playerData.region
  const Puuid = playerData.puuid



  return (
    <div className="App">
        <Router>
          <MaybeShowNavBar>
            <SearchPlayer />
            {/* <Home setPlayerData={setPlayerData} setPlayerData2={setPlayerData2} setMatchesData={setMatchesData} Region={Region} Puuid={Puuid}/>
            <Playerstats playerData={playerData} playerData2={playerData2} matchesData={matchesData} />
             */}
          </MaybeShowNavBar>
        </Router>
    </div>
  );
}

export default App;
