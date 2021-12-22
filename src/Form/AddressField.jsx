import React from 'react'

const AddressField = (props) => {
    return(
        <div className='px-5 flex flex-col w-full h-1/6 mt-10'>
            <h1 className='h-1/2 w-full text-2xl text-prussian-blue font-bold'>{props.name}{props.mandatory && <span className='text-red'>*</span>}</h1>
            <input className='w-full h-1/2 px-3 text-xl font-bold shadow-input-shadow rounded-sm' placeholder={props.placeholder}></input>
        </div>
    );
}

export default AddressField;