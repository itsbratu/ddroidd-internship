import React from 'react'

const NameField = (props) => {
    return(
        <div className='flex flex-col justify-center w-1/2 h-full p-5'>
            <label for = {`${props.id}`} className='h-1/3 text-2xl text-prussian-blue font-bold'>{props.name}:<span className='text-red'>*</span></label>
            <input id = {`${props.id}`} className= {`h-1/3 w-full mt-2 py-2 px-3 text-xl font-bold shadow-input-shadow rounded-sm ${props.userValidInput === true && 'rounded-xl border-4 border-green'}`} 
                   placeholder={props.name}>
            </input>
            {props.userValidInput === false && 
                <h1 className='text-xl text-red font-extrabold pt-5 px-5 h-1/3 w-full italic'>
                    Name should contain only letters!
                </h1>
            }
        </div>
    );
}

export default NameField;