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
            <div className='w-2/5 h-2/3 flex items-center justify-center select-none'>
                <img src = {`${DdroiddLogo}`}
                    className={`pr-16 ${props.clickableLogo && 'cursor-pointer'}`}
                    onClick = {() => {routing.push('./')}} />
            </div>
            <div className='w-2/5 h-2/3 bg-athens-black flex items-center justify-center select-none'>
                <h1 className='text-7xl text-white font-bold tracking-wide'>Winter Internship</h1>
            </div>
            <div className='w-2/5 h-2/3 flex justify-center items-center pl-28'>
                {props.displayButton && 
                <button 
                    className='w-1/4 h-1/2 bg-school-bus-yellow text-xl font-bold text-center border-solid border-2 border-dove-gray shadow-lg animation ease-in-out duration-500 transform hover:scale-110' 
                    onClick={() => {routing.push('./form')}}>
                        Join Us
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