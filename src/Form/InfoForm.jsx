//Component that allows the user to register into ddroidd Winter Internship
//Contains NameField , AddressField , SubAddressField , ContactField and ReCAPTCHA as child components

import React from 'react'
import FormTitle from './FormTitle';
import NameSection from './NameSection/NameSection';
import AdressSection from './AdressSection/AdressSection';
import ContactSection from './ContactSection/ContactSection';
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
        <div className='w-2/3 screen-l:h-form-l h-form-2xl relative inset-x-center-section bg-athens-gray'>
            <div className='grid grid-areas-form-layout bg-athens-gray h-full w-2/3 relative inset-x-center-section'>
                <FormTitle />
                <NameSection validFirstName = {validInput.validFirstName} validLastName = {validInput.validLastName}/>
                <AdressSection 
                    validAddrLine1 = {validInput.validAddrLine1}
                    validAddrLine2 = {validInput.validAddrLine2}
                    validCity = {validInput.validCity}
                    validState = {validInput.validState}
                    validZipCode = {validInput.validZipCode}
                />
                <ContactSection validPhone = {validInput.validPhone} validMail = {validInput.validMail} />
                {/* Form submit section */}
                <div className='grid grid-in-submit screen-l:mb-28 screen-xl:mb-40 screen-2xl:mb-52'>
                    <div className='flex justify-between items-center px-5'>
                        <div className='flex flex-col items-center justify-center h-1/2 w-1/2'>
                            <ReCAPTCHA 
                                sitekey={`${CAPTCHA_API_KEY}`}
                                ref={recaptchaRef}
                                theme='dark'
                            />
                            {validInput.validCaptcha === false && 
                                <h1 className='w-full h-1/3 mt-4 font-extrabold text-xl text-red italic'>
                                    Please check the captcha
                                </h1>
                            }
                        </div>
                        <button 
                            className='h-1/4 w-1/3 bg-school-bus-yellow border animation ease-in-out duration-500 transform hover:scale-110 shadow-button-shadow' 
                            onClick = {() => {validateUserInput()}}>
                                <h1 className='text-3xl font-bold text-prussian-blue'>Join Us</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoForm;