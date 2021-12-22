import React from 'react'
import ReCAPTCHA from "react-google-recaptcha"

const InfoForm = () => {
    return(
        <div className='w-2/3 h-screen relative inset-x-center-section bg-athens-gray'>
            <div className='flex flex-col items-center w-2/3 h-full relative inset-x-center-section py-20 select-none'>
                <h1 className='text-5xl font-extrabold text-prussian-blue'>Application Form</h1>
                <div className='grid grid-areas-form-layout mt-16 pt-5 bg-athens-gray h-full w-full'>
                    <div className='grid grid-in-name'>
                        <div className='flex justify-evenly'>
                            <div className='flex flex-col justify-center w-1/2 h-full p-5'>
                                <h1 className='text-2xl text-prussian-blue font-bold'>First Name:<span className='text-red'>*</span></h1>
                                <input className='h-1/3 w-full mt-2 py-2 px-3 text-xl font-bold shadow-input-shadow rounded-sm' placeholder='First Name'></input>
                            </div>
                            <div className='flex flex-col justify-center w-1/2 h-full p-5'>
                                <h1 className='text-2xl text-prussian-blue font-bold'>Last Name:<span className='text-red'>*</span></h1>
                                <input className='h-1/3 w-full mt-2 py-2 px-3 text-xl font-bold shadow-input-shadow rounded-sm' placeholder='Last Name'></input>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-in-address'>
                        <div className='flex flex-col justify-evenly'>
                            <div className='flex items-center h-1/6 w-full'>
                                <h1 className='pl-5 text-3xl font-extrabold text-prussian-blue'>Address</h1>
                            </div>
                            <div className='px-5 flex flex-col w-full h-1/6 mt-10'>
                                <h1 className='h-1/2 w-full text-2xl text-prussian-blue font-bold'>Address Line 1:<span className='text-red'>*</span></h1>
                                <input className='w-full h-1/2 px-3 text-xl font-bold shadow-input-shadow rounded-sm' placeholder='Street name & number'></input>
                            </div>
                            <div className='px-5 flex flex-col w-full h-1/6 mt-10'>
                                <h1 className='h-1/2 w-full text-2xl text-prussian-blue font-bold'>Address Line 2:<span className='text-red'>*</span></h1>
                                <input className='w-full h-1/2 px-3 text-xl font-bold shadow-input-shadow rounded-sm' placeholder='Suite, apartament'></input>
                            </div>
                            <div className='flex w-full h-1/6 mt-10'>
                                <div className='flex flex-col justify-center h-full w-1/3 px-5'>
                                    <h1 className='text-2xl text-black font-bold'>City:<span className='text-red'>*</span></h1>
                                    <input className='h-1/2 px-3 text-xl font-bold shadow-input-shadow rounded-sm' placeholder='City'></input>
                                </div>
                                <div className='flex flex-col justify-center h-full w-1/3 px-5'>
                                    <h1 className='text-2xl text-black font-bold'>State:<span className='text-red'>*</span></h1>
                                    <input className='h-1/2 px-3 text-xl font-bold rounded-sm' placeholder='State'></input>
                                </div>
                                <div className='flex flex-col justify-center h-full w-1/3 px-5'>
                                    <h1 className='text-2xl text-black font-bold'>Zip code:<span className='text-red'>*</span></h1>
                                    <input className='h-1/2 px-3 text-xl font-bold shadow-input-shadow rounded-sm' placeholder='Zip code'></input>
                                </div>
                            </div>
                            <div className='w-full h-1/6 mt-5'></div>
                        </div>
                    </div>
                    <div className='grid grid-in-contact bg-athens-gray'>
                        <div className='flex flex-col justify-center h-1/2 w-full px-5'>
                            <h1 className='text-3xl font-extrabold text-prussian-blue'>Contact information</h1>
                        </div>
                        <div className='flex h-1/2 w-full'>
                            <div className='flex flex-col justify-center w-1/2 h-full px-5'>
                                <h1 className='text-2xl text-prussian-blue font-bold'>Phone number:<span className='text-red'>*</span></h1>
                                <input className='h-2/3 w-full mt-2 py-2 px-3 text-xl font-bold shadow-input-shadow rounded-sm' placeholder='555-5555'></input>
                            </div>
                            <div className='flex flex-col justify-center w-1/2 h-full px-5'>
                                <h1 className='text-2xl text-prussian-blue font-bold'>Email address:<span className='text-red'>*</span></h1>
                                <input className='h-2/3 w-full mt-2 py-2 px-3 text-xl font-bold shadow-input-shadow rounded-sm' placeholder='john@doe.com'></input>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-in-submit'>
                        <div className='flex justify-between items-center px-5'>
                            <div className='h-full w-1/2 bg-white'>
                                <h1 className='text-center'>CAPTCHA</h1>
                            </div>
                            <button className='h-1/2 w-1/3 bg-school-bus-yellow border'>
                                <h1 className='text-3xl font-bold text-prussian-blue'>Join us</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoForm;