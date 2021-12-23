//Component for the address input section inside the form

import React from 'react'
import AddressField from './AddressField';
import SubAddressField from './SubAddressField';

const AdressSection = (props) => {
    return (
        <div className='grid grid-in-address'>
        <div className='flex flex-col'>
            <div className='flex items-center h-1/4 w-full px-5'>
                <h1 className='text-3xl screen-2xl:text-5xl font-extrabold text-prussian-blue'>Address</h1>
            </div>
            <AddressField 
                name = {"Address Line 1"} 
                id = {"firstAddress"} 
                placeholder = {"Street name & number"} 
                mandatory = {true} 
                userValidInput = {props.validAddrLine1}
            />
            <AddressField 
                name = {"Address Line 2"} 
                id = {"secondAddress"} 
                placeholder = {"Suite, apartament"} 
                mandatory = {false} 
                userValidInput = {props.validAddrLine2}
            />
            <div className='flex w-full h-1/4'>
                <SubAddressField name = {"City"} id = {"city"} userValidInput = {props.validCity}/>
                <SubAddressField name = {"State"} id = {"state"} userValidInput = {props.validState}/>
                <SubAddressField name = {"Zip code"} id = {"zipCode"} userValidInput = {props.validZipCode}/>
            </div>
        </div>
    </div>
    );
}

export default AdressSection;