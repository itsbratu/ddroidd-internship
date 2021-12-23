//Form component that allows the user to register in the ddroidd Winter Internship
//Contains NavBar , InfoForm and Footer as children components

import React from 'react'

import NavBar from '../NavBar/NavBar'
import InfoForm from './InfoForm'
import Footer from '../Footer/Footer'

const Form = () =>{
    return(
        <div className='bg-white w-screen screen-l:h-form-page-l h-form-page-2xl'>
            <NavBar clickableLogo = {true} displayButton = {false} />
            <InfoForm />
            <Footer />
        </div>
    )
}

export default Form;