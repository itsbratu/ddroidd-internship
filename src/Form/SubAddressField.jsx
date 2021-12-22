import React from 'react'
import states from './constants';

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
    if(props.name === "State"){
        return(
            <div className='flex flex-col justify-center h-full w-1/3 px-5'>
                <label for = {`${props.id}`} className='text-2xl text-black font-bold'>{props.name}:<span className='text-red'>*</span></label>
                <select id = {`${props.id}`} className= {`h-1/2 px-3 text-xl font-bold shadow-xl rounded-sm ${props.userValidInput === true && 'border-4 border-green rounded-xl'}`} placeholder={props.name}>
                    <option disabled selected value>Select state</option>
                    {states.map((currentState , _) => {
                        return(
                            <option value = {currentState}>{currentState}</option>
                        )
                    })}
                </select>
                {props.userValidInput === false && <h1 className='w-full h-1/3 text-red text-xl italic font-extrabold pt-5 px-5'>Please select a state!</h1>}
            </div>
        );
    }else{
        return(
            <div className='flex flex-col justify-center h-full w-1/3 px-5'>
                <label for = {`${props.id}`} className='text-2xl text-black font-bold'>{props.name}:<span className='text-red'>*</span></label>
                <input id = {`${props.id}`} className= {`h-1/2 px-3 text-xl font-bold shadow-input-shadow rounded-sm ${props.userValidInput === true && 'border-4 border-green rounded-xl'}`} placeholder={props.name}></input>
                {props.userValidInput === false && switchErrorMsg(props.name)}
            </div>
        );
    }
}

export default SubAddressField;