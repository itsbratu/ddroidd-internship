//File where we store functions that take part in user validation process

import { regexList } from './constants';
import { inputIds } from './constants';

/**
 * Collects user input from registration form
 * @returns {Object}  User data object (key - input field , value - user input)
 */
export const getUserInput = () => {
    var userInputs = {
        firstName : "" , 
        lastName : "" , 
        firstAddress : "" , 
        secondAddress : "" ,
        city : "" ,
        state : "" ,
        zipCode : "" ,
        phoneNumber : "" ,
        mailAddress : "" ,
    };
    inputIds.map((currentInputField , _) => {
        userInputs[currentInputField] = document.getElementById(currentInputField).value;
    });
    return userInputs;
}    

/**
 * Validates the name section of the form
 * @param {String} firstName User input for the First Name field
 * @param {String} lastName  User input for the Last Name field
 * @param {Object} validInput Object in which we store the name validation status based on regex check
 */
export const validateName = (firstName , lastName , validInput) => {
    const onlyLettersRegex = new RegExp(regexList.onlyLetters);
    if(!onlyLettersRegex.test(firstName)){
        validInput.validFirstName = false;
    }
    if(!onlyLettersRegex.test(lastName)){
        validInput.validLastName = false;
    }
}

/**
 * Validates the address section of the form
 * @param {String} addressLine1 User input for the Address Line 1 field
 * @param {String} addressLine2 User input for the Address Line 2 field
 * @param {String} city User input for the City field
 * @param {String | true} state User input for the State field
 * @param {String} zipCode User input for the Zip code field
 * @param {Object} validInput Object in which we store the address validation status based on regex check
 */
export const validateAddress = (addressLine1 , addressLine2 , city , state , zipCode , validInput) => {
    const onlyLettersRegex = new RegExp(regexList.onlyLetters);
    const zipCodeRegex = new RegExp(regexList.zipCode);
    const addressRegex = new RegExp(regexList.address);
    if(!addressRegex.test(addressLine1)){
        validInput.validAddrLine1 = false;
    }
    if(addressLine2.length > 0 && !addressRegex.test(addressLine2)){
        validInput.validAddrLine2 = false;
    }
    if(!onlyLettersRegex.test(city)){
        validInput.validCity = false;
    }
    if(state === 'true'){
        validInput.validState = false;
    }
    if(!zipCodeRegex.test(zipCode)){
        validInput.validZipCode = false;
    }
}

/**
 * Validates the contact section of the form
 * @param {String} phone User input for the Phone number field
 * @param {String} mail User input for the Email address
 * @param {Object} validInput Object in which we store the contact validation status based on regex check
 */
export const validateContact = (phone , mail , validInput) => {
    const phoneRegex = new RegExp(regexList.phoneNumber);
    const mailRegex = new RegExp(regexList.mailAddress);
    if(!phoneRegex.test(phone)){
        validInput.validPhone = false;
    }
    if(!mailRegex.test(mail)){
        validInput.validMail = false;
    }
}