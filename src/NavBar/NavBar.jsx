import React from 'react';

const NavBar = (props) =>{
    return(
        <div className='w-screen h-screen-11% bg-prussian-blue flex justify-evenly items-center'>
            <div className='w-2/5 h-2/3 flex items-center justify-center select-none'>
                <img src = "https://raw.githubusercontent.com/Ddroidd-Limited/WinterInternship2022-Frontend/05b710e4cf5968fdb751e14f59554ec04250ac0e/src/assets/img/ddroidd_logo.svg"
                    className='cursor-pointer'
                ></img>
            </div>
            <div className='w-2/5 h-2/3 bg-athens-black flex items-center justify-center select-none'>
                <h1 className='text-5xl text-white font-bold tracking-wide'>Winter Internship</h1>
            </div>
            {props.displayButton && 
                <div className='w-2/5 h-2/3 flex justify-center items-center'>
                    <button className='w-1/4 h-1/2 bg-school-bus-yellow text-lg font-bold text-center border-solid border-2 border-dove-gray'>Join Us</button>
                </div>
            }

        </div>
    );
}

export default NavBar;