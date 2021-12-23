//Component that allows the user to input their name

import React from 'react'
import propTypes from 'prop-types';

const NameField = (props) => {
    return(
        <div className='flex flex-col justify-center w-1/2 h-full p-5'>
            <label htmlFor = {`${props.id}`} className='h-1/3 text-2xl text-prussian-blue font-bold'>
                {props.name}:<span className='text-red'>*</span>
            </label>
            <input 
                id = {`${props.id}`} 
                className= {`h-1/3 w-full py-2 px-3 text-xl font-bold shadow-input-shadow rounded-sm ${props.userValidInput === true && 'rounded-xl border-4 border-green'}`} 
                placeholder={props.name} 
            />
            {props.userValidInput === false && 
                <h1 className='text-xl text-red font-extrabold pt-5 px-5 h-1/3 w-full italic'>
                    Name should contain only letters!
                </h1>
            }
        </div>
    );
}

NameField.propTypes = {
    name : propTypes.string.isRequired ,
    id : propTypes.string.isRequired , 
    userValidInput : propTypes.bool.isRequired
}

export default NameField;