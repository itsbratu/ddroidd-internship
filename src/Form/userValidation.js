import { regexList } from './constants';
import { inputIds } from './constants';

//function that gets the user data from the form inputs
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

//function that validates the names section of the form
export const validateName = (firstName , lastName , validInput) => {
    const onlyLettersRegex = new RegExp(regexList.onlyLetters);
    if(!onlyLettersRegex.test(firstName)){
        validInput.validFirstName = false;
    }
    if(!onlyLettersRegex.test(lastName)){
        validInput.validLastName = false;
    }
}

//function that validates the address section of the form
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

//function that validates the contact section of the form
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