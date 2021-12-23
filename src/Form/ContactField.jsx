//Component that allows the user to input their contact information (phone number and mail address)

import React from 'react'
import propTypes from 'prop-types';

/**
 * Displays an error message based on the contact input field
 * @param {String} contactType Name of the input field ("Phone number / Email address")
 * @returns h1
 */
const switchErrorMsg = (contactType) => {
    if(contactType === "Phone number"){
        return (
            <h1 className='w-full h-1/3 text-red text-xl italic font-extrabold pt-5 px-5'>Invalid phone number!</h1>
        );
    }else{
        return (
            <h1 className='w-full h-1/3 text-red text-xl italic font-extrabold pt-5 px-5'>Invalid mail address!</h1>
        );
    }
}

const ContactField = (props) => {
    return (
        <div className='flex flex-col justify-center w-1/2 h-full px-5'>
            <label 
                htmlFor = {props.id} 
                className='text-2xl text-prussian-blue font-bold'>
                    {props.name}:<span className='text-red'>*</span>
            </label>
            <input 
                id = {props.id} 
                className = {`h-2/3 w-full mt-2 py-2 px-3 text-xl font-bold shadow-input-shadow rounded-sm ${props.userValidInput === true && 'border-4 border-green rounded-xl'}`} 
                placeholder={props.placeholder}
            />
            {/* Custom error message based on the contact input field type */}
            {props.userValidInput === false && switchErrorMsg(props.name)}
        </div>
    );
}

ContactField.propTypes = {
    name : propTypes.string.isRequired ,
    id : propTypes.string.isRequired ,
    placeholder : propTypes.string.isRequired ,
    userValidInput : propTypes.bool.isRequired
}

export default ContactField;