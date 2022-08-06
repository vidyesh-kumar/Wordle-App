import React from 'react';
function Row(props) {
    var div=[]
    for(var i=0;i<5;i++)
    {   if(props.Status[i]===-1)
            div.push(<div className="flex border items-center place-content-center text-lg h-8 w-8 lg:text-3xl lg:h-14 lg:w-14 dark:border-white border-slate-700 dark:text-white text-white dark:bg-gray-900 bg-gray-500" key={i}>{props.Word[i]}</div>)
        else if(props.Status[i]===0)
            div.push(<div className="flex border items-center place-content-center text-lg h-8 w-8 lg:text-3xl lg:h-14 lg:w-14 dark:border-white border-slate-700 dark:text-white text-white bg-amber-400" key={i}>{props.Word[i]}</div>)
        else if(props.Status[i]===1)
            div.push(<div className="flex border items-center place-content-center text-lg h-8 w-8 lg:text-3xl lg:h-14 lg:w-14 dark:border-white border-slate-700 dark:text-white text-white bg-green-800" key={i}>{props.Word[i]}</div>)
        else if(props.Status[i]===-2 && props.Word[i]!==" ")
            div.push(<div className="flex border items-center place-content-center text-lg h-8 w-8 lg:text-3xl lg:h-14 lg:w-14 dark:border-white border-slate-700 dark:text-white text-gray-800" key={i}>{props.Word[i]}</div>)
        else
            div.push(<div className="flex border items-center place-content-center text-lg h-8 w-8 lg:text-3xl lg:h-14 lg:w-14 dark:border-white border-slate-700 dark:text-white text-gray-800" key={i}></div>)  
    }
    return (<div>
                <div className="flex flex-row gap-1.5">
                    {div}
                </div>
            </div>);
}

export default Row;
