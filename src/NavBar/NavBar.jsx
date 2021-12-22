import React from 'react';

const DDROIDD_LOGO = process.env.REACT_APP_DDROIDD_LOGO;

const NavBar = (props) =>{

    return(
        <div className='w-screen h-screen-11% bg-prussian-blue flex justify-evenly items-center'>
            <div className='w-2/5 h-2/3 flex items-center justify-center select-none'>
                <img src = {`${DDROIDD_LOGO}`}
                    className='pr-16'
                ></img>
            </div>
            <div className='w-2/5 h-2/3 bg-athens-black flex items-center justify-center select-none'>
                <h1 className='text-5xl text-white font-bold tracking-wide'>Winter Internship</h1>
            </div>
            {props.displayButton && 
                <div className='w-2/5 h-2/3 flex justify-center items-center pl-28'>
                    <button className='w-1/4 h-1/2 bg-school-bus-yellow text-xl font-bold text-center border-solid border-2 border-dove-gray shadow-lg'>Join Us</button>
                </div>
            }

        </div>
    );
}

export default NavBar;