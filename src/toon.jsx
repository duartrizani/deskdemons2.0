import axios, { spread } from "axios";
import React, { useEffect, useState } from 'react';

export const Toon = () => {

    const [playerData, setPlayerData] = useState({});
    const [playerData2, setPlayerData2] = useState({});
  
     const fetchData = () => {
  
        var APIRankCall =
        "https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/ece12227-9613-5dba-9e4e-7e61b0ad0ecc";
      var APICallSting =
        "https://api.henrikdev.xyz/valorant/v1/by-puuid/account/ece12227-9613-5dba-9e4e-7e61b0ad0ecc";
  
  
        const getRank = axios.get(APIRankCall)
        const getSting = axios.get(APICallSting)
        axios.all([getRank, getSting]).then(
          axios.spread((...allData) => {
          const AllDataRank = allData[0]
          const AllDataSting = allData[1]
  
          console.log(AllDataRank.data.data)
          console.log(AllDataSting.data.data)

          setPlayerData2(AllDataRank.data.data);
          setPlayerData(AllDataSting.data.data);
  
        }))
  
    }
  
    useEffect (() => {
      fetchData()
    },[1])
  
     
  
  
    return (
      
      <div className="App1">
  <h4 className="h4">Competetive</h4>
          <div className="cardcontent">
            {JSON.stringify(playerData) != "{}" ? (
              <>
                <div className="textcontent">
                  {" "}
                  <p>
                    Player name:
                    <br></br>
                    {playerData.name}#{playerData.tag}
                  </p>
                  <br></br>
                  <p>Player Level: {playerData.account_level}</p>
                  <p>Last game: </p>
                  <p>Last game kills: </p>
                </div>
              </>
            ) : (
              <> </>
            )}
            {JSON.stringify(playerData2) != "{}" ? (
              <>
                <div className="rankimg">
                  <img src={playerData2.images.small}></img>
                  <p className="h4">{playerData2.currenttierpatched}</p>
                </div>
              </>
            ) : (
              <> </>
            )}
  
            {JSON.stringify(playerData) != "{}" ? (
              <>
                <div>
                  {" "}
                  <img
                    className="imgcontent"
                    src={playerData.card.large}
                  ></img>{" "}
                </div>
              </>
            ) : (
              <> </>
            )}
          </div>
  
      </div>
    );
}
