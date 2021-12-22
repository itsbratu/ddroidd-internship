import React from 'react'
import NameField from './NameField';
import AddressField from './AddressField';
import ContactField from './ContactField';
import SubAddressField from './SubAddressField';
import ReCAPTCHA from "react-google-recaptcha"
import { useHistory } from 'react-router-dom';

const CAPTCHA_API_KEY = process.env.REACT_APP_CAPTCHA_API_KEY;

const printStatus = (value) =>{
    console.log("Captcha value:" , value);
}

const InfoForm = () => {

    console.log(`${CAPTCHA_API_KEY}`);

    let routing = useHistory();

    return(
        <div className='w-2/3 h-screen relative inset-x-center-section bg-athens-gray'>
            <div className='flex flex-col items-center w-2/3 h-full relative inset-x-center-section py-20 select-none'>
                <h1 className='text-5xl font-extrabold text-prussian-blue'>Application Form</h1>
                <div className='grid grid-areas-form-layout mt-16 pt-5 bg-athens-gray h-full w-full'>
                    <div className='grid grid-in-name'>
                        <div className='flex justify-evenly'>
                            <NameField name = {"First name"}/>
                            <NameField name = {"Last name"}/>
                        </div>
                    </div>
                    <div className='grid grid-in-address'>
                        <div className='flex flex-col justify-evenly'>
                            <div className='flex items-center h-1/6 w-full px-5'>
                                <h1 className='text-3xl font-extrabold text-prussian-blue'>Address</h1>
                            </div>
                            <AddressField name = {"Address Line 1:"} placeholder = {"Street name & number"} mandatory = {true}/>
                            <AddressField name = {"Address Line 2:"} placeholder = {"Suite, apartament"} mandatory = {false}/>
                            <div className='flex w-full h-1/6 mt-10'>
                                <SubAddressField name = {"City"} />
                                <SubAddressField name = {"State"} />
                                <SubAddressField name = {"Zip code"} />
                            </div>
                            <div className='w-full h-1/6 mt-5'></div>
                        </div>
                    </div>
                    <div className='grid grid-in-contact bg-athens-gray'>
                        <div className='flex flex-col justify-center h-1/2 w-full px-5'>
                            <h1 className='text-3xl font-extrabold text-prussian-blue'>Contact information</h1>
                        </div>
                        <div className='flex h-1/2 w-full'>
                            <ContactField name = {"Phone number:"} placeholder = {"555-5555"} />
                            <ContactField name = {"Email address:"} placeholder = {"john@doe.com"} />
                        </div>
                    </div>
                    <div className='grid grid-in-submit'>
                        <div className='flex justify-between items-center px-5'>
                            <ReCAPTCHA 
                                sitekey= {`${CAPTCHA_API_KEY}`}                             
                            />
                            <button className='h-1/3 w-1/3 bg-school-bus-yellow border animation ease-in-out duration-500 transform hover:scale-110'>
                                <h1 className='text-3xl font-bold text-prussian-blue' onClick = {() => {routing.push('./submit')}}>Join Us</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoForm;