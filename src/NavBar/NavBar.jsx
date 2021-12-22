import React from 'react';

const NavBar = (props) =>{
    return(
        <div className='w-screen h-screen-15% bg-prussian-blue flex justify-evenly items-center'>
            <div className='w-2/5 h-2/3 bg-black flex items-center justify-center'>
                <img src = "./images/favicon.png" alt = 'ok'/>
            </div>
            <div className='w-2/5 h-2/3 bg-athens-gray'></div>
            <div className='w-2/5 h-2/3 bg-school-bus-yellow'></div>
        </div>
    );
}

export default NavBar;