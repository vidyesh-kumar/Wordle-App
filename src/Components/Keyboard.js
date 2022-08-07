import React from 'react';

function Keyboard(props) {
    const yellowkey="bg-amber-500"
    const greenkey="bg-green-700"
    const greykeydark="dark:bg-gray-800"
    const greykey="bg-gray-500"
    for(var i=0;i<=5;i++)
    {   var word=props.attempts[i]
        if(word)
        {   for(var j=0;j<5;j++)
            {   if(props.Answer.includes(word[j]))
                {   document.getElementById(word[j]).classList.remove("dark:bg-gray-600")
                    document.getElementById(word[j]).classList.remove("bg-gray-300")
                    if(props.Answer[j]===word[j])
                        document.getElementById(word[j]).classList.add(greenkey)
                    else
                        document.getElementById(word[j]).classList.add(yellowkey)

                }
                else
                {   document.getElementById(word[j]).classList.remove("dark:bg-gray-600")
                    document.getElementById(word[j]).classList.remove("bg-gray-300")
                    document.getElementById(word[j]).classList.add(greykeydark)
                    document.getElementById(word[j]).classList.add(greykey)
                }
                    
            }
        }
    }
    return (<div className="flex flex-col gap-1.5 mt-2">
                <div className="flex flex-row gap-1.5 place-content-center">
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="Q">Q</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="W">W</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="E">E</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="R">R</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="T">T</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="Y">Y</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="U">U</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="I">I</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="O">O</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="P">P</button>
                </div>
                <div className="flex flex-row gap-1.5 place-content-center">
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="A">A</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="S">S</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="D">D</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="F">F</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="G">G</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="H">H</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="J">J</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="K">K</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="L">L</button>
                </div>
                <div className="flex flex-row gap-1.5 place-content-center">
                    <button className=" lg:w-10 min-w-fit px-3 h-8 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 text-sm rounded" onClick={props.handleEvent}>Enter</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="Z">Z</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="X">X</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="C">C</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="V">V</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="B">B</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="N">N</button>
                    <button className=" w-6 h-8 md:w-8 md:h-12  lg:w-10 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent} id="M">M</button>
                    <button className=" lg:w-10 min-w-fit lg:px-3 px-1 h-8 lg:h-14 font-bold text-slate-800 dark:text-white bg-gray-300 dark:bg-gray-600 rounded" onClick={props.handleEvent}>Clear  <i className="fas fa-backspace hidden lg:inline"></i></button>
                </div>
            </div>);
}

export default Keyboard;