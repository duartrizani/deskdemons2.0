import React from 'react'
import "./playerstats.css"




export const Playerstats = ({ playerData, playerData2, matchesData }) => {


  return (
    <div className="text-red-600 bg-black flex flex-col" id='PlayerStats'>
      <h4 className="title flex justify-center font-bold pb-10">Player Info</h4>
      <div className="info flex flex-col pt-10">

      </div>

      {JSON.stringify(matchesData, playerData, playerData) !== "{}" ? (

        <>
          <div className='flex flex-row'>
            <div className='w-full'>
              <div className="nft">
                <div className='main'>
                  <img className='tokenImage' src={playerData.card.large} alt="NFT" />
                  <h2>{playerData.name}#{playerData.tag}</h2>
                  <div className="description pt-3">
                    <p>Kills: {playerData.name}</p>
                    <p>Deaths: </p>
                    <p>Assists: </p>
                  </div>
                  <div className='tokenInfo'>
                    <div className="price pb-2">
                      <ins>◘</ins>
                      <p>{playerData.account_level}</p>
                    </div>
                    <div className="duration">
                      {/* <ins>◷</ins>
              <p>11 days left</p> */}
                    </div>
                  </div>
                  <hr />
                  <div className='creator'>
                    <div className='wrapper'>
                      <img alt="" src={playerData2.images.small} />
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

                  return (
                    <div className="flex flex-col items-center py-1 px-3">
                      <div className="flex rounded items-center bg-slate-400 h-[70px] w-full flex-row justify-between">
                        <div className='flex flex-row justify-around w-full items-center'>
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


        </>
      ) : (
        <> </>
      )}
    </div>
  );
}
