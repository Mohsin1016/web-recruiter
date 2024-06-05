import React from 'react'

const Congratulations = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center">
            <svg width="200" height="200">
                <circle fill="none" stroke="#0074D9" strokeWidth="10" cx="100" cy="100" r="90" className="circle" strokeLinecap="round" transform="rotate(-90 100 100)" />
                <polyline fill="none" stroke="#0074D9" strokeWidth="12" points="70,110 90,140 140,90" strokeLinecap="round" strokeLinejoin="round" className="tick" />
            </svg>
            <p className='text-gray-800'>Congratulations! Your details have been submitted. Please use the mobile app for more jobs.</p>
        </div>
    )
}

export default Congratulations;