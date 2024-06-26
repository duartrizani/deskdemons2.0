import React from 'react';
import './playerstats.css';

export const Playerstats = ({ playerData, playerData2, matchesData }) => {
  return (
    <div className="text-red-600 bg-black flex flex-col" id='PlayerStats'>
      <h4 className="title flex justify-center font-bold pb-10">Player Info</h4>
      <div className="info flex flex-col pt-10"></div>

      {matchesData && matchesData.length > 0 && playerData && playerData2 ? (
        <div className='flex flex-row'>
          <div className='w-full'>
            <div className="nft">
              <div className='main'>
                <img className='tokenImage' src={playerData.card?.large || ''} alt="NFT" />
                <h2 className='pt-3'>{playerData.name}#{playerData.tag}</h2>
                <div className="description pt-3">
                  <p>Kills: {playerData.stats?.kills || 'N/A'}</p>
                  <p>Deaths: {playerData.stats?.deaths || 'N/A'}</p>
                  <p>Assists: {playerData.stats?.assists || 'N/A'}</p>
                </div>
                <div className='tokenInfo'>
                  <div className="price pb-2">
                    <ins>◘</ins>
                    <p>{playerData.account_level}</p>
                  </div>
                  <div className="duration">
                  </div>
                </div>
                <hr />
                <div className='creator'>
                  <div className='wrapper'>
                    <img alt="" src={playerData2.images?.small || ''} />
                  </div>
                  <p>{playerData2.currenttierpatched}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='Matches w-full'>
            <div className='w-full mt-[5rem]'>

              {matchesData.map((postDetail, i) => {
                const imageUrl = `./../../images/Maps/${postDetail.meta.map.name}.jpg`;

                // Determine match outcome for player's team
                const isBlueTeam = postDetail.stats.team.toLowerCase() === 'blue';
                const playerTeamScore = isBlueTeam ? postDetail.teams.blue : postDetail.teams.red;
                const opponentTeamScore = isBlueTeam ? postDetail.teams.red : postDetail.teams.blue;

                let matchResult = '';
                if (playerTeamScore > opponentTeamScore) {
                  matchResult = 'win';
                } else if (playerTeamScore < opponentTeamScore) {
                  matchResult = 'loss';
                } else {
                  matchResult = 'draw';
                }

                // Set background gradient based on match result
                let bgColorClass = '';
                if (matchResult === 'win') {
                  bgColorClass = 'gradient-win';
                } else if (matchResult === 'loss') {
                  bgColorClass = 'gradient-loss';
                } else if (matchResult === 'draw') {
                  bgColorClass = 'gradient-draw';
                }

                return (
                  <div className="flex flex-col items-center py-1 px-3 text-white relative" key={i}>
                    <div className={`flex rounded items-center bg-blue-950 h-[70px] w-full flex-row justify-between overflow-hidden relative`}>
                      <img src={imageUrl} alt="Map" className="absolute inset-0 w-full h-full object-cover rounded" />
                      <div className={`absolute inset-0 ${bgColorClass} opacity-50`}></div>
                      <div className='flex flex-row justify-around w-full items-center z-10'>
                        <div className=''><img src={`./../../images/AgentIcon/${postDetail.stats.character.name}_icon.webp`} className="w-auto h-auto" /></div>
                        <div className='w-[100px]'>{postDetail.stats.character.name}</div>
                        <div className='w-[100px]'>
                          <div>{postDetail.meta.mode}</div>
                          <div>{postDetail.meta.map.name}</div>
                        </div>

                        <div className='w-[60px]'>
                          <div className='flex justify-end text-xs'>K/D/A</div>
                          <div>{postDetail.stats.kills}/{postDetail.stats.deaths}/{postDetail.stats.assists}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
}
