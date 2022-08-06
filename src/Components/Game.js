import React, { useState,useEffect } from 'react'
import Row from './row'
import Statistics from './stats'

function Gameboard(props) {
    const Rows = []  
    var length=props.attempts.length
    var status = [
    [-2,-2,-2,-2,-2],
    [-2,-2,-2,-2,-2],
    [-2,-2,-2,-2,-2],
    [-2,-2,-2,-2,-2],
    [-2,-2,-2,-2,-2],
    [-2,-2,-2,-2,-2],
    ]
    const [gameend,setGameEnd]=useState(false)
    for(var i=0;i<=5;i++)
    {   var word=props.attempts[i]
        if(word)
        {   var letter=[...word]
            for(var j=0;j<5;j++)
            {   if(props.Answer.includes(letter[j]))
                {   status[i][j]=0
                    if(props.Answer[j]===letter[j])
                    {   status[i][j]=1
                    }
                }
                else
                    status[i][j]=-1
            }
            Rows.push(<Row Word={word} Status={status[i]} key={i}/>)
        }
        else
        {   for(j=0;j<5;j++)
                status[i][j]=-2
            Rows.push(<Row Word="     " Status={status[i]} key={i}/>)
        }  
    }
    useEffect(()=>{
        if(length===6)
            handleGameEnd()
        else
        {   for(var i=0;i<6;i++)
            {   var sum=0
                for(var j=0;j<5;j++)
                    sum+=status[i][j]
                if(sum===5)
                    handleGameEnd() 
            }
        }// eslint-disable-next-line
    },[length])

    function handleGameEnd()
    {   setGameEnd((prev)=>!prev)
    }
    function handleNewGame()
    {   window.location.reload()
    }
    return (<div>
                <div className="flex flex-col gap-1.5 w-full items-center pt-8">
                    {Rows}
                </div>
                {gameend && <div className="flex place-content-center items-center absolute top-0 left-0 w-full h-full bg-[#00000094] z-[990] dark:text-white text-slate-800">
                        <Statistics GameEnd={gameend} Answer={props.Answer} Attempts={props.attempts} handleButton={handleNewGame} handleClick={handleGameEnd}/>
                </div>}
            </div>
            );
}

export default Gameboard;