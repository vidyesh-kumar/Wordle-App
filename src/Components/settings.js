import React, { useState } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Settings(props) {
    var check = document.getElementById("root").classList.contains("dark")
    if(check)
        var theme="dark"
    else
        theme="light"
    const [darkMode,setDarkmode]=useState(check)
    function handleDarkMode()
    {   document.getElementById("root").classList.toggle("dark")
        toast.success('Theme Changed', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme:theme
            });
        setDarkmode((prev)=>!prev)
        
    }
    function ResetStats()
    {   localStorage.setItem('Wins',0)
        localStorage.setItem('Loses',0)
        localStorage.setItem('Six',0)
        localStorage.setItem('Five',0)
        localStorage.setItem('Four',0)
        localStorage.setItem('Three',0)
        localStorage.setItem('Two',0)
        localStorage.setItem('One',0)
        localStorage.setItem('Streak',0)
        localStorage.setItem('MaxStreak',0)
        toast.success('Statistics Reset', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme:theme
            });
    }
    return ( <div className="relative w-1/3 min-h-3/5 dark:bg-zinc-800 bg-gray-300 flex place-content-start flex-col p-5 rounded">
    <h1 className="text-center text-xl font-bold mb-3">Settings</h1>
    <i className="absolute top-5 right-5 fas fa-times" onClick={props.handleClick}></i>
    <div className="flex flex-row place-content-between items-center w-full my-2">
    <h1 className="text-center text-lg font-bold">Switch Theme :</h1>  
    {darkMode && <button onClick={handleDarkMode} type="button" className="text-slate-800 bg-slate-50 w-1/5 self-end h-10 rounded-md">
       Light  <i className="fas fa-sun text-slate-800 px-1"></i>
    </button>}
    {!darkMode && <button onClick={handleDarkMode} type="button" className="text-white bg-black w-1/5 self-end h-10 rounded-md">
        Dark  <i class="fas fa-moon text-white px-1"></i>
    </button>}
    </div>
    <div className="flex flex-row place-content-between items-center w-full my-2">
    <h1 className="text-center text-lg font-bold">Reset Stats :</h1> 
    <button onClick={ResetStats} type="button" className="text-white dark:text-slate-800 dark:bg-slate-50  bg-black w-1/5 self-end h-10 rounded-md">
        Reset  <i class="fas fa-wrench text-white dark:text-slate-800 px-1"></i>
    </button>
    </div>
 </div>);
}

export default Settings;