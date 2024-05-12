import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from "react";
import { Desserte } from "./pages/desserte";
import { Home } from "./components/Home/home";
import { Crysos } from "./pages/crysos";
import { Res } from "./pages/res";
import { Toon } from "./pages/toon";
import { Thjerrza } from "./pages/thjerrza";
import { Playerstats } from "./components/PlayerStats/playerstats";
import MaybeShowNavBar from "./components/Maybeshownavbar";

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
            <Home setPlayerData={setPlayerData} setPlayerData2={setPlayerData2} setMatchesData={setMatchesData} Region={Region} Puuid={Puuid}/>
            <Playerstats playerData={playerData} playerData2={playerData2} matchesData={matchesData} />
            
          </MaybeShowNavBar>

          <Routes>
            <Route path="/crysos" element={<Crysos />} />
            <Route path="/desserte" element={<Desserte />} />
            <Route path="/res" element={<Res />} />
            <Route path="/toon" element={<Toon />} />
            <Route path="/thjerrza" element={<Thjerrza />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
