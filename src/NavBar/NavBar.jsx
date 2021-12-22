import React from 'react';
import { useHistory } from 'react-router-dom';

const DDROIDD_LOGO = process.env.REACT_APP_DDROIDD_LOGO;

const NavBar = (props) =>{

    let routing = useHistory();

    return(
        <div className='w-screen h-screen-10% bg-prussian-blue flex justify-evenly items-center'>
            <div className='w-2/5 h-2/3 flex items-center justify-center select-none'>
                <img src = {`${DDROIDD_LOGO}`}
                    className={`pr-16 ${props.clickableLogo && 'cursor-pointer'}`}
                    onClick = {() => {routing.push('./')}}
                ></img>
            </div>
            <div className='w-2/5 h-2/3 bg-athens-black flex items-center justify-center select-none'>
                <h1 className='text-5xl text-white font-bold tracking-wide'>Winter Internship</h1>
            </div>
            <div className='w-2/5 h-2/3 flex justify-center items-center pl-28'>
                {props.displayButton && <button className='w-1/4 h-1/2 bg-school-bus-yellow text-xl font-bold text-center border-solid border-2 border-dove-gray shadow-lg animation ease-in-out duration-500 transform hover:scale-110'>Join Us</button>}
            </div>
        </div>
    );
}

export default NavBar;