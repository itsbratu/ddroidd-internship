//Component that allows the user to input their address

import React from 'react'
import propTypes from 'prop-types';

const AddressField = (props) => {
    return(
        <div className='px-5 flex flex-col w-full h-1/4 mt-10'>
            <label 
                htmlFor = {`${props.id}`} 
                className='h-1/2 w-full text-xl text-prussian-blue font-bold'>
                    {props.name}:{props.mandatory && <span className='text-red'>*</span>}
            </label>
            <input 
                id = {`${props.id}`} 
                className={`w-full h-1/2 px-3 text-xl font-bold shadow-input-shadow rounded-sm ${props.userValidInput && 'rounded-xl border-4 border-green'}`} 
                placeholder={props.placeholder} 
            />
            {props.userValidInput === false && 
                <h1 className='w-full h-1/3 text-red text-xl italic font-extrabold pt-5 px-5'>
                    Address line should contain only letters and at least one digit!
                </h1>
            }
        </div>
    );
}

AddressField.propTypes = {
    id : propTypes.string.isRequired , 
    name : propTypes.string.isRequired ,
    placeholder : propTypes.string.isRequired ,
    mandatory : propTypes.bool.isRequired ,
    userValidInput : propTypes.bool.isRequired
}

export default AddressField;