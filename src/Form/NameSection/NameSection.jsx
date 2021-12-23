//Component for the name input section inside the form

import React from 'react'
import NameField from './NameField'

const NameSection = (props) =>{
    return(
        <div className='grid grid-in-name '>
            <div className='flex justify-evenly'>
                <NameField name = {"First Name"} id = {"firstName"} userValidInput = {props.validFirstName}/>
                <NameField name = {"Last Name"} id = {"lastName"} userValidInput = {props.validLastName}/>
            </div>
        </div>
    )
}

export default NameSection;