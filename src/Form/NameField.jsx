import React from 'react'

const NameField = (props) => {
    return(
        <div className='flex flex-col justify-center w-1/2 h-full p-5'>
            <h1 className='text-2xl text-prussian-blue font-bold'>{props.name}:<span className='text-red'>*</span></h1>
            <input className='h-1/3 w-full mt-2 py-2 px-3 text-xl font-bold shadow-input-shadow rounded-sm' placeholder={props.name}></input>
        </div>
    );
}

export default NameField;