//Component that allows the user to register into ddroidd Winter Internship
//Contains NameField , AddressField , SubAddressField , ContactField and ReCAPTCHA as child components

import React from 'react'
import NameField from './NameField';
import AddressField from './AddressField';
import ContactField from './ContactField';
import SubAddressField from './SubAddressField';
import ReCAPTCHA from "react-google-recaptcha"
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { getUserInput , validateName , validateAddress , validateContact } from './userValidation';
import { getStateObject } from './constants';

const CAPTCHA_API_KEY = process.env.REACT_APP_CAPTCHA_API_KEY;
const recaptchaRef = React.createRef();

const InfoForm = () => {

    let routing = useHistory();

    //state object for the form validation
    const [validInput , setValidInput] = useState(getStateObject(null));

    /**
     * Validates user input and redirects him if the data is valid or displays error messages else
     */
    const validateUserInput = () => {
        const {firstName , lastName , firstAddress , secondAddress , city , state , zipCode , phoneNumber , mailAddress} = getUserInput();
        var validInput = getStateObject(true);

        //validating each field in the form
        validateName(firstName , lastName , validInput);
        validateAddress(firstAddress , secondAddress , city , state , zipCode , validInput);
        validateContact(phoneNumber , mailAddress , validInput);

        //validating the captcha check
        const recaptchaValue = recaptchaRef.current.getValue();
        if(!(recaptchaValue.length > 0)){
            validInput.validCaptcha = false;
        }

        //check if the user data is valid 
        var validUser = true;
        for(const [_ , value] of Object.entries(validInput)){
            if(value !== true){
                validUser = false;
            }
        }
        if(validUser){
            //redirecting user to Submit page
            routing.push({
                pathname : '/submit',
                //saving user data input for further processing
                state : {
                    firstName : firstName ,
                    lastName : lastName ,
                    firstAddress : firstAddress ,
                    secondAddress : secondAddress , 
                    city : city , 
                    state : state ,
                    zipCode : zipCode ,
                    phoneNumber : phoneNumber , 
                    mailAddress : mailAddress
                 }
            });
        }
        setValidInput(validInput);
    }

    return(
        <div className='w-2/3 h-screen relative inset-x-center-section bg-athens-gray'>
            <div className='flex flex-col items-center w-2/3 h-full relative inset-x-center-section py-20 select-none'>
                <h1 className='text-5xl font-extrabold text-prussian-blue'>Application Form</h1>
                <div className='grid grid-areas-form-layout mt-16 pt-5 bg-athens-gray h-full w-full'>

                    {/* Form name input section */}

                    <div className='grid grid-in-name'>
                        <div className='flex justify-evenly'>
                            <NameField name = {"First Name"} id = {"firstName"} userValidInput = {validInput.validFirstName}/>
                            <NameField name = {"Last Name"} id = {"lastName"} userValidInput = {validInput.validLastName}/>
                        </div>
                    </div>

                    {/* Form address input section */}

                    <div className='grid grid-in-address'>
                        <div className='flex flex-col justify-evenly'>
                            <div className='flex items-center h-1/4 w-full px-5'>
                                <h1 className='text-3xl font-extrabold text-prussian-blue'>Address</h1>
                            </div>
                            <AddressField 
                                name = {"Address Line 1"} 
                                id = {"firstAddress"} 
                                placeholder = {"Street name & number"} 
                                mandatory = {true} 
                                userValidInput = {validInput.validAddrLine1}
                            />
                            <AddressField 
                                name = {"Address Line 2"} 
                                id = {"secondAddress"} 
                                placeholder = {"Suite, apartament"} 
                                mandatory = {false} 
                                userValidInput = {validInput.validAddrLine2}
                            />
                            <div className='flex w-full h-1/4 mt-10'>
                                <SubAddressField name = {"City"} id = {"city"} userValidInput = {validInput.validCity}/>
                                <SubAddressField name = {"State"} id = {"state"} userValidInput = {validInput.validState}/>
                                <SubAddressField name = {"Zip code"} id = {"zipCode"} userValidInput = {validInput.validZipCode}/>
                            </div>
                            <div className='w-full h-1/6 mt-5'></div>
                        </div>
                    </div>

                    {/* Form contact input section */}
                    
                    <div className='grid grid-in-contact bg-athens-gray'>
                        <div className='flex flex-col justify-center h-1/2 w-full px-5'>
                            <h1 className='text-3xl font-extrabold text-prussian-blue'>Contact information</h1>
                        </div>
                        <div className='flex h-1/2 w-full'>
                            <ContactField 
                                name = {"Phone number"} 
                                id = {"phoneNumber"} 
                                placeholder = {"555-5555"} 
                                userValidInput = {validInput.validPhone}
                            />
                            <ContactField 
                                name = {"Email address"} 
                                id = {"mailAddress"} 
                                placeholder = {"john@doe.com"} 
                                userValidInput = {validInput.validMail}
                            />
                        </div>
                    </div>

                    {/* Form submit section */}
                    
                    <div className='grid grid-in-submit'>
                        <div className='flex justify-between items-center px-5'>
                            <div className='flex flex-col justify-center h-full w-1/2'>
                                <ReCAPTCHA 
                                    sitekey={`${CAPTCHA_API_KEY}`}
                                    ref={recaptchaRef}
                                    theme='dark'
                                />
                                {validInput.validCaptcha === false && <h1 className='w-full h-1/3 mt-4 font-extrabold text-xl text-red italic'>Please check the captcha</h1>}
                            </div>
                            <button 
                                className='h-1/3 w-1/3 bg-school-bus-yellow border animation ease-in-out duration-500 transform hover:scale-110' 
                                onClick = {() => {validateUserInput()}}
                            >
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