import React  from 'react';
import { CChart } from '@coreui/react-chartjs';

var wins=parseInt(localStorage.getItem('Wins') ||0)
var loses=parseInt(localStorage.getItem('Loses') ||0)
var six = parseInt(localStorage.getItem('Six')||0)
var five = parseInt(localStorage.getItem('Five')||0)
var four = parseInt(localStorage.getItem('Four')||0)
var three = parseInt(localStorage.getItem('Three')||0)
var two = parseInt(localStorage.getItem('Two')||0)
var one = parseInt(localStorage.getItem('One')||0)
var streak = parseInt(localStorage.getItem('Streak')||0)
var MaxStreak = parseInt(localStorage.getItem('MaxStreak')||0)

function Statistics(props) {
    var isDark = document.getElementById("root").classList.contains("dark")
    if(isDark)
    {   var bgcolor="#FFFFFF"
    }
    else 
    {    bgcolor="#000000"
    }
    if((props.GameEnd && props.Attempts.includes(props.Answer)))
    {   localStorage.setItem('Wins',++wins)
        switch(props.Attempts.length)
        {   case 1: localStorage.setItem('One',++one)
                    break
            case 2: localStorage.setItem('Two',++two)
                    break
            case 3: localStorage.setItem('Three',++three)
                    break
            case 4: localStorage.setItem('Four',++four)
                    break
            case 5: localStorage.setItem('Five',++five)
                    break
            case 6: localStorage.setItem('Six',++six)
                    break
            default:break
        
        }
        localStorage.setItem('Streak',++streak)
        if(streak>MaxStreak)
            localStorage.setItem('MaxStreak',++MaxStreak) 
    }
    else if((props.GameEnd && !props.Attempts.includes(props.Answer)))
    {   localStorage.setItem('Loses',++loses)
        localStorage.setItem('Streak',0)
    }
    wins=parseInt(localStorage.getItem('Wins') ||0)
    loses=parseInt(localStorage.getItem('Loses') ||0)
    six = parseInt(localStorage.getItem('Six') ||0)
    five = parseInt(localStorage.getItem('Five') ||0)
    four = parseInt(localStorage.getItem('Four') ||0)
    three = parseInt(localStorage.getItem('Three') ||0)
    two = parseInt(localStorage.getItem('Two') ||0)
    one = parseInt(localStorage.getItem('One') ||0)
    streak = parseInt(localStorage.getItem('Streak') ||0)
    MaxStreak = parseInt(localStorage.getItem('MaxStreak') ||0)
    var winPerc =parseInt((wins/(wins+loses))*100)
    if(isNaN(winPerc))
        winPerc=0
    return ( <div className="relative w-5/6 md:w-1/2 lg:w-1/3 min-h-4/5 dark:bg-zinc-800 bg-gray-300 flex place-content-start flex-col p-5 rounded">
                <h1 className="text-center text-md lg:text-xl font-bold mb-3">Statistics</h1>
                <i className="absolute top-5 right-5 fas fa-times" onClick={props.handleClick}></i>
                <div className="flex flex-row w-full gap-4 lg:gap-7 place-content-center mb-4 mt-2">
                    <div className="flex flex-col items-center w-12">
                        <h2 className="text-lg lg:text-3xl">{wins+loses}</h2>
                        <h4 className="text-center text-sm lg:text-xl">Played</h4>
                    </div>  
                    <div className="flex flex-col items-center w-12">
                        <h2 className="text-lg lg:text-3xl">{winPerc}</h2>
                        <h4 className="text-center text-sm lg:text-xl">Win %</h4>
                    </div> 
                    <div className="flex flex-col items-center w-12">
                        <h2 className="text-lg lg:text-3xl">{streak}</h2>
                        <h4 className="text-center text-sm lg:text-xl">Current Streak</h4>
                    </div>
                    <div className="flex flex-col items-center w-12">
                        <h2 className="text-lg lg:text-3xl">{MaxStreak}</h2>
                        <h4 className="text-center text-sm lg:text-xl  ">Max Streak</h4>
                    </div>
                </div>
                <CChart
                    type="bar"
                    axis="x"
                    data={{
                    labels: ['1','2','3','4','5','6'],
                    datasets: [
                        {   backgroundColor: bgcolor,
                            data: [one,two,three,four,five,six],
                            minBarLength:20
                        },
                        ]}}
                    options={{
                        indexAxis:"y",
                        events: [],
                        scales:{
                                x: {
                                   ticks: {
                                        display: true,
                                        stepSize:1
                                   },
                                   grid: {
                                      display: false
                                   }
                                },
                                y: {
                                   ticks:{
                                    stepSize:1
                                   },
                                   grid: {
                                      display: false
                                   }
                                }
                           },
                        plugins: {
                            legend:{
                                display:false
                            },
                            datalabels: {
                                display:true,
                                anchor:'center',
                                align:'top',
                                color:'#000000'
                            },
                            title: {
                                display: true,
                                text: 'Guess Distribution',
                                color:bgcolor,
                                font: {
                                    size: 16
                                }
                            }
                        }
                    }} 
                    />
                {(props.GameEnd && props.Attempts.includes(props.Answer)) && <h2 className="text-center text-lg font-bold mb-3">Answer To The Wordle:<span className="bg-green-600 text-white ml-5 rounded-sm p-1">{props.Answer}</span></h2>}
                {(props.GameEnd && !props.Attempts.includes(props.Answer)) && <h2 className="text-center text-lg font-bold mb-3">Answer To The Wordle:<span className="bg-red-600 text-white ml-5 rounded-sm p-1">{props.Answer}</span></h2>}
                {props.GameEnd && <h2 className="text-center text-lg font-bold mb-3">Guesses Made :<span className="ml-5 rounded-sm p-1 w-2">{props.Attempts.length}</span></h2>}
                {props.GameEnd && <button className="bg-blue-500 h-10 text-white self-center rounded-md w-1/2 " onClick={props.handleButton}>Play Again</button>}
            </div>);
}

export default Statistics;