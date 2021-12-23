//Component that allows the user to input their address

import React from 'react'
import {states} from './constants';
import propTypes from 'prop-types';

/**
 * Displays an error message based on the subaddress input field
 * @param {String} subAddressType Name of the input field ("City / Zip code")
 * @returns h1
 */
const switchErrorMsg = (subAddressType) => {
    if(subAddressType === "City"){
        return (
            <h1 className='w-full h-1/3 text-red text-xl italic font-extrabold pt-5 px-5'>City name should contain only letters!</h1>
        );
    }else{
        return (
            <h1 className='w-full h-1/3 text-red text-xl italic font-extrabold pt-5 px-5'>Please provide valid zip code!</h1>
        );
    }
}

const SubAddressField = (props) => {

    {/* Conditional rendering based on the type of subaddress user input field */}

    {/* State select box */}
    if(props.name === "State"){
        return(
            <div className='flex flex-col justify-center h-full w-1/3 px-5'>
                <label 
                    htmlFor = {`${props.id}`} 
                    className='text-2xl text-black font-bold'>
                        {props.name}:<span className='text-red'>*</span>
                </label>
                <select 
                    id = {`${props.id}`} 
                    className= {`h-1/2 px-3 text-xl font-bold shadow-xl rounded-sm ${props.userValidInput === true && 'border-4 border-green rounded-xl'}`} 
                    placeholder={props.name}>
                        <option disabled selected value>State</option>
                        {states.map((currentState , key) => {
                            return(
                                <option id = {key} value = {currentState}>{currentState}</option>
                            )
                        })}
                </select>
                {/* Custom error message if user did not select a state */}
                {props.userValidInput === false && <h1 className='w-full h-1/3 text-red text-xl italic font-extrabold pt-5 px-5'>Please select a state!</h1>}
            </div>
        );
    }else{
        return(
            <div className='flex flex-col justify-center h-full w-1/3 px-5'>
                <label 
                    htmlFor = {`${props.id}`} 
                    className='text-2xl text-black font-bold'>
                        {props.name}:<span className='text-red'>*</span>
                </label>
                <input 
                    id = {`${props.id}`} 
                    className= {`h-1/2 px-3 text-xl font-bold shadow-input-shadow rounded-sm ${props.userValidInput === true && 'border-4 border-green rounded-xl'}`} 
                    placeholder={props.name}
                />
                {/* Custom error message based on the subaddress input field type */}
                {props.userValidInput === false && switchErrorMsg(props.name)}
            </div>
        );
    }
}

SubAddressField.propTypes = {
    name : propTypes.string.isRequired ,
    id : propTypes.string.isRequired , 
    userValidInput : propTypes.bool.isRequired
}

export default SubAddressField;