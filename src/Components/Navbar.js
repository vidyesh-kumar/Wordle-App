import React,{useState} from 'react';
import Info from './info';
import Statistics from './stats';
import Settings from './settings';


function Navbar(props) {
    const [NavBar,setNavBar]=useState({ sideBar:false,
                                        info:false,
                                        stats:false,
                                        settings:false
                                     })
    function NavBarFunc(event)
    {   var id=event.target.id
        setNavBar((prev)=>
        { if(id==="sidebar")
            return({  sideBar:!prev.sideBar,
                      info:false,
                      stats:false,
                      settings:false
                    })
          else if(id==="info")
            return({  sideBar:false,
                      info:!prev.info,
                      stats:false,
                      settings:false
                  })
          else if(id==="stats")
            return({  sideBar:false,
                      info:false,
                      stats:!prev.stats,
                      settings:false
                  })
          else if(id==="settings")
            return({  sideBar:false,
                      info:false,
                      stats:false,
                      settings:!prev.settings
                  })
          else
            return({  sideBar:false,
                      info:false,
                      stats:false,
                      settings:false
                    })

        })
    }
    return (<div>
                <nav className='flex flex-row place-content-between dark:bg-black bg-slate-50 dark:text-white text-slate-800 w-full h-8 sm:h-16'>
                    <div>
                         <i className="fas fa-bars text-md py-2 sm:text-3xl sm:py-3" onClick={NavBarFunc} id="sidebar"></i>
                    </div>
                    <h1 className="text-lg ml-14 sm:text-4xl font-semibold sm:ml-28">Wordle</h1>
                        <div className="flex sm:gap-6 gap-2 flex-row">
                            <i className="far fa-question-circle text-md py-2 sm:text-3xl sm:py-3" onClick={NavBarFunc} id="info"></i>
                            <i className="fas fa-puzzle-piece text-md py-2 sm:text-3xl sm:py-3" onClick={NavBarFunc} id="stats"></i>
                            <i className="fas fa-cog text-md py-2 sm:text-3xl sm:py-3" onClick={NavBarFunc} id="settings"></i>
                        </div>     
                </nav>
                {NavBar.sideBar && <div className="absolute left-0 top-10 sm:left-2 sm:top-32 w-full h-[450px] md:w-1/2 md:h-4/5 lg:w-[400px] lg:h-[650px] flex flex-col place-content-around items-center dark:text-white text-slate-900 rounded-md dark:bg-neutral-900 bg-gray-300">
                               <h1 className="text-lg mt-1 sm:text-2xl sm:my-5">About The Developer</h1>
                               <div className="flex flex-col items-center">
                                    <img src="https://i.ibb.co/3SCNBwH/Whats-App-Image-2022-07-26-at-5-21-53-PM.jpg" alt="Profile Pic" className="h-32 w-32 m-2 sm:w-64 sm:h-64 sm:p-2"/>
                                    <p className="text-justify px-5 ">Hey There, I am Vidyesh Kumar an Enthusiastic Web Developer from Coastal City of Mangaluru. Hope you loved playing Wordle here. You can look at my further projects / Contact me from links given below</p>
                               </div>
                               <div>
                                    <h2 className=" text-md sm:text-lg py-2">Links To Profile:</h2>
                                    <ul className="text-md sm:text-lg text-center">
                                            <li className="dark:hover:text-slate-300 hover:text-slate-600"><a href="https://www.github.com/vidyesh-kumar">Github  <i className="fab fa-github"></i></a></li>
                                            <li className="dark:hover:text-blue-400 hover:text-blue-500"><a href="https://www.linkedin.com/in/vidyesh-kumar">LinkedIn  <i className="fab fa-linkedin"></i></a></li>
                                            <li className="dark:hover:text-red-400 hover:text-red-500"><a href="mailto:kumarvidyesh@gmail.com">Email  <i className="fas fa-at"></i></a></li>
                                    </ul>
                               </div>
                            </div>
                }
                {(NavBar.info||NavBar.settings||NavBar.stats) &&
                    <div className="flex place-content-center items-center fixed top-0 left-0 w-full h-screen bg-[#00000094] z-[990] dark:text-white text-slate-800">
                        {NavBar.info && <Info handleClick={NavBarFunc}/>}
                        {NavBar.stats && <Statistics GameEnd={false} handleClick={NavBarFunc}/>}
                        {NavBar.settings && <Settings handleClick={NavBarFunc}/>}
                    </div>
                }
            </div>);
}

export default Navbar;