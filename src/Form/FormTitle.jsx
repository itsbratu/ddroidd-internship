import React from 'react'

const FormTitle = () => {
    return(
        <div className='grid grid-in-title screen-l:mt-28 screen-xl:mt-40 screen-2xl:mt-52'>
            <div className='flex justify-center items-start h-full w-full'>
                <h1 className='screen-l:text-form-title-l screen-xl:text-5xl screen-2xl:text-7xl 
                font-extrabold text-prussian-blue select-none'>
                    Application Form
                </h1>
            </div>
        </div>
    )
}

export default FormTitle;