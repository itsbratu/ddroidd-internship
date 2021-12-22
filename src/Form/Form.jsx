import React from 'react'
import { useHistory } from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import InfoForm from './InfoForm'
import Footer from '../Footer/Footer'

const Form = () =>{
    return(
        <div>
            <NavBar clickableLogo = {true} displayButton = {false} />
            <InfoForm />
            <Footer />
        </div>
    )
}

export default Form;