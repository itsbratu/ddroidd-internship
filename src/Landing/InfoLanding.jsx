import React from 'react'

const InfoLanding = () => {
    return(
        <div className='relative inset-x-center-section h-screen-78% w-2/3 bg-athens-gray grid grid-areas-landing-layout-info'>
            <div className='grid grid-in-top-section'/>
            <div className='grid grid-in-middle-section'>
                <div className='flex justify-between items-center ml-10'>
                    <img src="https://raw.githubusercontent.com/Ddroidd-Limited/WinterInternship2022-Frontend/05b710e4cf5968fdb751e14f59554ec04250ac0e/src/assets/img/destructuring.svg"
                        className='w-2/3 h-1/2'
                    ></img>
                    <img src="https://raw.githubusercontent.com/Ddroidd-Limited/WinterInternship2022-Frontend/05b710e4cf5968fdb751e14f59554ec04250ac0e/src/assets/img/WebPage_logo.svg"
                        className='w-1/3 h-1/2'
                    ></img>
                </div>
            </div>
            <div className='grid grid-in-bottom-section'>
                <div className='flex justify-center'>
                    <button className='w-1/4 h-1/3 text-2xl font-bold text-center bg-school-bus-yellow -mt-10 border-solid border-2 border-dove-gray shadow-general-shadow'>Join Us</button>
                </div>
            </div>
        </div>
    )
}

export default InfoLanding;