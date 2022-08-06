import React from 'react';
import Row from './row';

function Info(props) {
    return ( <div className="relative w-5/6 md:w-1/2 lg:w-1/3 min-h-3/5 dark:bg-zinc-800 bg-gray-300 flex place-content-start flex-col p-5 rounded">
                <h1 className="text-center text-md lg:text-xl font-bold mb-3">How To Play</h1>
                <i className="absolute top-5 right-5 fas fa-times" onClick={props.handleClick}></i>
                <p className="my-1 lg:py-2 font-serif">Guess the WORDLE in 6 tries.</p>
                <p className="my-1 lg:py-2 font-serif">Each guess must be a valid 5-letter word. Hit the enter button to submit</p>
                <p className="my-1 lg:py-2 font-serif">After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
                <hr className='dark:border-white border-slate-800'/>
                <div className="py-2 font-serif">
                    <h1 className="mb-2 lg:mb-3">Examples</h1>
                    <Row Word="WEARY" Status={[1,-2,-2,-2,-2]}/>
                    <p className="my-1 lg:py-3 font-serif">The letter W is in the word and in the correct spot.</p>
                    <Row Word="PILLS" Status={[-2,0,-2,-2,-2]}/>
                    <p className="my-1 lg:py-3 font-serif">The letter I is in the word but in the wrong spot.</p>
                    <Row Word="VAGUE" Status={[-2,-2,-2,-1,-2]}/>
                    <p className="my-1 lg:py-3 font-serif">The letter U is not in the word in any spot.</p>
                </div>
             </div>);
}

export default Info;