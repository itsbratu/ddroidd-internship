import React from 'react'
import NameField from './NameField';
import AddressField from './AddressField';
import ContactField from './ContactField';
import SubAddressField from './SubAddressField';
import ReCAPTCHA from "react-google-recaptcha"
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const CAPTCHA_API_KEY = process.env.REACT_APP_CAPTCHA_API_KEY;

const InfoForm = () => {

    let routing = useHistory();

    const [validInput , setValidInput] = useState({
        validFirstName : null , 
        validLastName : null , 
        validAddrLine1 : null,
        validAddrLine2 : null,
        validCity : null,
        validState : null,
        validZipCode : null,
        validPhone : null,
        validMail : null});

    const validateUserInput = () => {
        var validUserInput = {
            validFirstName : true ,
            validLastName : true ,
            validAddrLine1 : true ,
            validAddrLine2 : true ,
            validCity : true ,
            validState : true ,
            validZipCode : true ,
            validPhone : true ,
            validMail : true ,
        }
    }

    return(
        <div className='w-2/3 h-screen relative inset-x-center-section bg-athens-gray'>
            <div className='flex flex-col items-center w-2/3 h-full relative inset-x-center-section py-20 select-none'>
                <h1 className='text-5xl font-extrabold text-prussian-blue'>Application Form</h1>
                <div className='grid grid-areas-form-layout mt-16 pt-5 bg-athens-gray h-full w-full'>
                    <div className='grid grid-in-name'>
                        <div className='flex justify-evenly'>
                            <NameField name = {"First name"} id = {"first_name"} userValidInput = {validInput.validFirstName}/>
                            <NameField name = {"Last name"} id = {"last_name"} userValidInput = {validInput.validLastName}/>
                        </div>
                    </div>
                    <div className='grid grid-in-address'>
                        <div className='flex flex-col justify-evenly'>
                            <div className='flex items-center h-1/4 w-full px-5'>
                                <h1 className='text-3xl font-extrabold text-prussian-blue'>Address</h1>
                            </div>
                            <AddressField name = {"Address Line 1"} id = {"address_1"} placeholder = {"Street name & number"} mandatory = {true} userValidInput = {validInput.validAddrLine1}/>
                            <AddressField name = {"Address Line 2"} id = {"address_2"} placeholder = {"Suite, apartament"} mandatory = {false} userValidInput = {validInput.validAddrLine2}/>
                            <div className='flex w-full h-1/4 mt-10'>
                                <SubAddressField name = {"City"} id = {"city"} userValidInput = {validInput.validCity}/>
                                <SubAddressField name = {"State"} id = {"state"} userValidInput = {validInput.validState}/>
                                <SubAddressField name = {"Zip code"} id = {"zip_code"} userValidInput = {validInput.validZipCode}/>
                            </div>
                            <div className='w-full h-1/6 mt-5'></div>
                        </div>
                    </div>
                    <div className='grid grid-in-contact bg-athens-gray'>
                        <div className='flex flex-col justify-center h-1/2 w-full px-5'>
                            <h1 className='text-3xl font-extrabold text-prussian-blue'>Contact information</h1>
                        </div>
                        <div className='flex h-1/2 w-full'>
                            <ContactField name = {"Phone number"} id = {"phone_number"} placeholder = {"555-5555"} userValidInput = {validInput.validPhone}/>
                            <ContactField name = {"Email address"} id = {"email_address"} placeholder = {"john@doe.com"} userValidInput = {validInput.validMail}/>
                        </div>
                    </div>
                    <div className='grid grid-in-submit'>
                        <div className='flex justify-between items-center px-5'>
                            <div className='flex justify-center h-full w-1/2'>
                                <ReCAPTCHA 
                                    sitekey={`${CAPTCHA_API_KEY}`}
                                    className = 'relative top-1/4'
                                    theme='dark'
                                />
                            </div>
                            <button className='h-1/2 w-1/3 bg-school-bus-yellow border animation ease-in-out duration-500 transform hover:scale-110' onClick = {() => {validateUserInput()}}>
                                <h1 className='text-3xl font-bold text-prussian-blue'>Join Us</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoForm;