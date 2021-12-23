//Component that displays at the top of every page in the application
//Contains the ddroidd logo , text that sugests the main theme of the application and a register button(opt) 

import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const DdroiddLogo = process.env.REACT_APP_DDROIDD_LOGO;

const NavBar = (props) =>{

    let routing = useHistory();

    return(
        <div className='w-screen h-screen-10% bg-prussian-blue flex justify-evenly items-center'>
            <img src = {`${DdroiddLogo}`}
                className={`w-1/3 h-full screen-phones:h-1/3 screen-tablets:h-2/3 pr-48 screen-phones:pr-0 screen-tablets:pr-12 screen-s:pr-24 
                ${props.clickableLogo && 'cursor-pointer'}`}
                onClick = {() => {routing.push('./')}} />
            <div className='w-1/3 h-full bg-athens-black flex items-center justify-center select-none'>
                <h1 className='text-7xl screen-phones:text-nav-title-phones screen-tablets:text-nav-title-tablets 
                               screen-s:text-4xl screen-m:text-5xl screen-l:text-6xl screen-xl:text-7xl screen-2xl:text-9xl 
                             text-white font-semibold tracking-wide'>
                  Winter Internship
                </h1>
            </div>
            <div className='w-1/3 h-full flex justify-center items-center pl-48 screen-phones:pl-0 screen-tablets:pl-12 screen-s:pl-24'>
                {props.displayButton && 
                <button 
                    className='w-1/4 h-1/3 bg-school-bus-yellow text-xl font-bold text-center border-solid border-2 border-dove-gray 
                    shadow-lg animation ease-in-out duration-500 transform hover:scale-110' 
                    onClick={() => {routing.push('./form')}}>
                        <h1 className='text-2xl screen-phones:text-nav-button-phones screen-tablets:text-nav-button-tablets 
                                       screen-s:text-xs screen-m:text-sm screen-l:text-xl screen-xl:text-3xl screen-2xl:text-4xl 
                                       tracking-wide text-prussian-blue'>
                            Join Us
                        </h1>
                </button>}
            </div>
        </div>
    );
}

NavBar.propTypes = {
    clickableLogo : propTypes.bool.isRequired ,
    displayButton : propTypes.bool.isRequired
}

export default NavBar;