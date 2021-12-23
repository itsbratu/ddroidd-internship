//List of all the states in Romania , ordered alphabetically
export const states = ['Alba' , 'Arad' , 'Argeș' , 'Bacău' , 'Bihor' , 'Bistrița-Năsăud' , 'Botoșani' , 'Brăila' , 'Brașov' , 'București' ,  'Buzău' , 'Călărași' ,
                 'Caraș-Severin' , 'Cluj' , 'Constanța' , 'Covasna' , 'Dâmbovița' , 'Dolj' , 'Galați' , 'Giurgiu' , 'Gorj' , 'Harghita' , 'Hunedoara' ,
                 'Ialomița' , 'Iași' , 'Ilfov' , 'Maramureș' , 'Mehedinți' , 'Mureș' , 'Neamț' , 'Olt' , 'Prahova' , 'Sălaj' , 'Satu Mare' , 'Sibiu' ,
                 'Suceava' , 'Teleorman' , 'Timiș' , 'Tulcea' , 'Vâlcea' , 'Vaslui' , 'Vrancea'];

//List of all regexes used for user input validation
export const regexList = {
    //regex that matches letters , diacritics and whitespaces
    onlyLetters : "^[a-zA-ZÀ-ž- ]+$" ,
    //regex that matches letters , digits and whitespaces (min 1 of each)
    address : "^(?:[0-9 ]+[a-zA-ZÀ-ž ]|[a-zA-ZÀ-ž ]+[0-9 ])[a-zA-ZÀ-ž0-9 ]*$" ,
    //regex that matches a sequence of exact 6 digits
    zipCode : "^[0-9]{6}$" ,
    //regex that matches a valid phone number
    phoneNumber : "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" ,
    //regex that matches a valid mail address (only (A-Za-z0-9_!#$%&'*+/=?`{|}~^.-) before the @ and only (A-Za-z.-) after that)
    mailAddress : "^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z.-]+$"
}

//List of all ids for the input fields
export const inputIds = ["firstName" , "lastName" , "firstAddress" , "secondAddress" , "city" , "state" , "zipCode" , "phoneNumber" , "mailAddress"];

/**
 * Returns a validation state object based on a state 
 * @param {Boolean | null} initialState The value for every key in the object
 * @returns {Object}                    Initialized state object
 */
export const getStateObject = (initialState) => {
    return {
        validFirstName : initialState ,
        validLastName : initialState ,
        validAddrLine1 : initialState ,
        validAddrLine2 : initialState ,
        validCity : initialState ,
        validState : initialState ,
        validZipCode : initialState ,
        validPhone : initialState ,
        validMail : initialState ,
        validCaptcha : initialState ,
    }
}


