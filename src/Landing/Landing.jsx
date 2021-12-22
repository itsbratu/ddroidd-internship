import React from 'react'
import NavBar from '../NavBar/NavBar'
import InfoLanding from './InfoLanding'
import Footer from '../Footer/Footer'

const Landing = () =>{
    return(
        <div className='w-screen h-screen bg-white'>
            <NavBar displayButton = {true} clickableLogo = {false}/>
            <InfoLanding />
            <Footer />
        </div>
    );
}

export default Landing;