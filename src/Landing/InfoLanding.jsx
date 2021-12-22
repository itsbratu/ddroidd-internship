import React from 'react'
import { useHistory } from 'react-router-dom';


const DESTRUCTURING = process.env.REACT_APP_DESTRUCTURING;
const WEBPAGE_LOGO = process.env.REACT_APP_WEBPAGE_LOGO;

const InfoLanding = () => {

    let routing = useHistory();

    return(
        <div className='relative inset-x-center-section h-screen-80% w-2/3 bg-athens-gray grid grid-areas-landing-layout-info'>
            <div className='grid grid-in-top-section'/>
            <div className='grid grid-in-middle-section'>
                <div className='flex justify-between items-center ml-10'>
                    <img src={`${DESTRUCTURING}`}
                        className='w-2/3 h-1/2'
                    ></img>
                    <img src={`${WEBPAGE_LOGO}`}
                        className='w-1/3 h-1/2'
                    ></img>
                </div>
            </div>
            <div className='grid grid-in-bottom-section'>
                <div className='flex justify-center'>
                    <button className='w-1/4 h-1/3 text-2xl font-bold text-center bg-school-bus-yellow -mt-10 border-solid border-2 border-dove-gray shadow-button-shadow animation ease-in-out duration-500 transform hover:scale-110' onClick = {() => {routing.push('./form')}}>Join Us</button>
                </div>
            </div>
        </div>
    )
}

export default InfoLanding;