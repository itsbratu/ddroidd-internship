//Component that is displayed in the center of Submit component
//Contains confirmation text about registration

import React from 'react'

const InfoSubmit = () =>{
    return(
        <div className='flex flex-col justify-center items-center relative inset-x-center-section h-screen-80% w-2/3 bg-athens-gray select-none text-6xl text-prussian-blue font-bold'>
            <h1>Excellent!</h1>
            <h1>See you in Feburary 2022!</h1>
        </div>
    )
}

export default InfoSubmit;