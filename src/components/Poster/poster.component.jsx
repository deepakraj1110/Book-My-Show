import React from 'react';


const Poster = (props) => {
    return (
        <>
        <div className="gap-3 px-1 md:px-3 flex flex-col items-start">
        <div className="h-60 md:h-80">
            <img src={props.src} alt={props.title} className="w-full h-full rounded-xl" />
        </div>
        <h3 className={`text-lg font-bold ${props.isDark?"text-white":"text-grey-700"}`}>{props.title}</h3>
        <p className={`text-sm  ${props.isDark?"text-white":"text-grey-700"}`}>{props.subtitle}</p>
        </div>
        </>
    )
}

export default Poster;
