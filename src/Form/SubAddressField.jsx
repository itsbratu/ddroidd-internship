import React from 'react'

const SubAddressField = (props) => {
    return(
        <div className='flex flex-col justify-center h-full w-1/3 px-5'>
            <h1 className='text-2xl text-black font-bold'>{props.name}:<span className='text-red'>*</span></h1>
            <input className='h-1/2 px-3 text-xl font-bold shadow-input-shadow rounded-sm' placeholder={props.name}></input>
        </div>
    )
}

export default SubAddressField;