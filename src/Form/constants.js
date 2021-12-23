//List of all the states in Romania , in alphabetical order
export const states = ['Alba' , 'Arad' , 'Argeș' , 'Bacău' , 'Bihor' , 'Bistrița-Năsăud' , 'Botoșani' , 'Brăila' , 'Brașov' , 'Bucurști' ,  'Buzău' , 'Călărași' ,
                 'Caraș-Severin' , 'Cluj' , 'Constanța' , 'Covasna' , 'Dâmbovița' , 'Dolj' , 'Galați' , 'Giurgiu' , 'Gorj' , 'Harghita' , 'Hunedoara' ,
                 'Ialomița' , 'Iași' , 'Ilfov' , 'Maramureș' , 'Mehedinți' , 'Mureș' , 'Neamț' , 'Olt' , 'Prahova' , 'Sălaj' , 'Satu Mare' , 'Sibiu' ,
                 'Suceava' , 'Teleorman' , 'Timiș' , 'Tulcea' , 'Vâlcea' , 'Vaslui' , 'Vrancea'];

//List of all regexes used for user input validation
export const regexList = {
    onlyLetters : "^[a-zA-ZÀ-ž- ]+$" ,
    address : "^(?:[0-9 ]+[a-zA-ZÀ-ž ]|[a-zA-ZÀ-ž ]+[0-9 ])[a-zA-ZÀ-ž0-9 ]*$" ,
    zipCode : "^[0-9]{6}$" ,
    phoneNumber : "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" ,
    mailAddress : "^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z.-]+$"
}

//List of all ids for the input fields
export const inputIds = ["firstName","lastName","firstAddress","secondAddress","city","state","zipCode","phoneNumber","mailAddress"];

//Function that generates state objects based on initial state
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


