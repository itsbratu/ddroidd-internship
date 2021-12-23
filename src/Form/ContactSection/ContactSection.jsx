//Component for the contact input section inside the form

import React from 'react'
import ContactField from './ContactField';

const ContactSection = (props) => {
    return(
        <div className='grid grid-in-contact mt-20'>
        <div className='flex flex-col'>
            <div className='flex items-center h-1/2 w-full px-5'>
                <h1 className='text-3xl screen-2xl:text-5xl font-extrabold text-prussian-blue mb-5'>Contact information</h1>
            </div>
            <div className='flex h-1/2 w-full'>
                <ContactField 
                    name = {"Phone number"} 
                    id = {"phoneNumber"} 
                    placeholder = {"555-5555"} 
                    userValidInput = {props.validPhone}
                />
                <ContactField 
                    name = {"Email address"} 
                    id = {"mailAddress"} 
                    placeholder = {"john@doe.com"} 
                    userValidInput = {props.validMail}
                />
            </div>
        </div>
    </div>
    );
}

export default ContactSection;