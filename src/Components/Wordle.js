import React,{useState} from 'react';
import Navbar from './Navbar';
import Gameboard from './Game';
import Keyboard from './Keyboard';
import upper from './Data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(props) {
    var check=document.getElementById("root").classList.contains("dark")
    if(check)
        var theme="dark"
    else
        theme="light"
    const answer = props.Answer
    const [state,setState]=useState({ word:"",
                                      attempts:[]
                                    })
    function handleChange(event)
    {   var newword = event.target.value.toUpperCase()
        setState((prev)=>({...prev,word:newword}))
    }
    function handleEnter(event)
    {   if(event.code==="Enter")
        {   if(state.attempts.length<=6)
            {   if(state.word.length===5)
                {   if(upper.includes(state.word))
                    {   setState((prev)=>({...prev,
                                        word:"",
                                        attempts:[...prev.attempts,prev.word]}))
                    }
                    else
                    {   setState((prev)=>({...prev,
                                        word:"",
                                        }))
                        toast.error('Word Not In Dictionary', {
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme:theme
                        });
                    }
                }
                else
                    toast.warn('Please Use 5 Letter Word', {
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme:theme
                        });
            }
        }
    }
    function handleButton(event)
    { var newword = state.word
      if(event.target.innerText==="Enter")
      {     if(state.attempts.length<=6)
            {   if(newword.length===5)
                {   if(upper.includes(newword))
                    {   setState((prev)=>({...prev,
                                            word:"",
                                            attempts:[...prev.attempts,newword]}))
                    }
                    else
                    {   setState((prev)=>({...prev,
                                            word:"",
                                            }))
                        toast.error('Word Not In Dictionary', {
                        hideProgressBar: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme:theme
                        });
                    }
                }
                else
                    toast.warn('Please Use 5 Letter Word', {
                        hideProgressBar: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme:theme
                        });
            }
      }
      else if(event.target.innerText.trim()==="Clear")
      {   newword = newword.slice(0,-1)
          setState((prev)=>({...prev,word:newword}))
      }
      else
      {   newword += event.target.innerText
          if(newword.length<=5)
          {   setState((prev)=>({...prev,word:newword}))
          }

      }  
    }
    function handleNewGame()
    {   window.location.reload()
    }
    return ( <main className='dark:bg-black bg-slate-50 h-full min-h-screen w-full p-1 sm:p-10 opacity-95'>
              <Navbar/>
              <hr className="absolute left-0 right-0 border-gray-500 dark:border-white"></hr>
              <Gameboard attempts={state.attempts} Answer={answer}/>
              <div className="flex flex-col">
              {(!state.attempts.includes(answer)&&(state.attempts.length<6))&&<input type="text" className="self-center w-[175px] lg:w-1/5 p-2 my-3 text-md lg:text-xl dark:border-white border-black border dark:bg-slate-800 bg-slate-50 dark:text-white text-slate-800" maxLength="5" placeholder="Enter Your Guess Here" value={state.word} onChange={handleChange} onKeyUp={(e) => handleEnter(e)}/>}
              {(state.attempts.includes(answer)||(state.attempts.length>=6))&& <button className="bg-blue-500 self-center h-10 text-white rounded-md sm:w-1/5 w-2/3 my-3" onClick={handleNewGame}>Play Again</button>}
              </div>
              <Keyboard attempts={state.attempts} Answer={answer} handleEvent={handleButton}/>
              <ToastContainer
                autoClose={1000}
                position='bottom-center'
                className="md:hidden lg:hidden"
                toastClassName="mx-auto text-sm w-1/2"
                limit={3}
                closeButton={false}
                closeOnClick={false}
                newestOnTop={true}/>
              <ToastContainer
                autoClose={2000}
                position='bottom-center'
                className="hidden md:block lg:hidden"
                limit={3}
                closeButton={false}
                closeOnClick={false}
                newestOnTop={true}/>
            <ToastContainer
                autoClose={3000}
                position='top-right'
                className="mt-28 hidden md:hidden lg:block"
                limit={5}
                closeButton={true}
                closeOnClick={true}
                newestOnTop={true}/>
           </main>
  );
}

export default App;
