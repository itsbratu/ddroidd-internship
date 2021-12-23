import React from 'react'
import NavBar from '../NavBar/NavBar';
import InfoSubmit from './InfoSubmit';
import Footer from '../Footer/Footer';

const Submit = (props) =>{

    console.log(props.location.state);

    return(
        <div className='h-screen w-screen bg-white'>
            <NavBar displayButton = {false} clickableLogo = {true}/>
            <InfoSubmit />
            <Footer />
        </div>
    )
}

export default Submit;