import React from 'react'

const ContactField = (props) => {
    return (
        <div className='flex flex-col justify-center w-1/2 h-full px-5'>
            <h1 className='text-2xl text-prussian-blue font-bold'>{props.name}<span className='text-red'>*</span></h1>
            <input className='h-2/3 w-full mt-2 py-2 px-3 text-xl font-bold shadow-input-shadow rounded-sm' placeholder={props.placeholder}></input>
        </div>
    );
}

export default ContactField;