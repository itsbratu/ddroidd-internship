//Component that is displayed in the center of the Landing page
//It contains an images section and a register button

import React from 'react'
import { useHistory } from 'react-router-dom';

const DestructuringImage = process.env.REACT_APP_DESTRUCTURING;
const WebpageLogo = process.env.REACT_APP_WEBPAGE_LOGO;

const InfoLanding = () => {

    let routing = useHistory();

    return(
        <div className='relative inset-x-center-section h-screen-80% w-2/3 bg-athens-gray grid grid-areas-landing-layout-info'>
            <div className='grid grid-in-top-section'/>
            <div className='grid grid-in-middle-section'>
                <div className='flex justify-between items-center ml-10'>
                    <img src={`${DestructuringImage}`}
                        className='w-2/3 h-1/2' /> 
                    <img src={`${WebpageLogo}`}
                        className='w-1/3 h-1/2' />
                </div>
            </div>
            <div className='grid grid-in-bottom-section'>
                <div className='flex justify-center'>
                    <button 
                        className='text-2xl w-1/4 h-1/3 screen-phones:h-1/5 screen-tablets:h-1/4 
                                   font-bold text-center bg-school-bus-yellow -mt-5 border-solid border-2 border-dove-gray 
                                   shadow-button-shadow animation ease-in-out duration-500 transform hover:scale-110' 
                        onClick = {() => {routing.push('./form')}}>
                            <h1 className='text-2xl screen-phones:text-info-section-button screen-tablets:text-xs 
                                           screen-s:text-sm screen-m:text-base screen-3xl:text-3xl screen-2xl:text-4xl 
                                           text-prussian-blue font-bold tracking-wide'>
                                    Join Us
                            </h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfoLanding;