import React from 'react';
import './Header.css'

const Header = () => {
    // console.log(props.length)
    return (
        <div className='header'>
            <div className='bg-purple-800 py-4'>
                <h1 className='font-bold text-2xl mb-2 text-white text-center'>Set Your Appointment</h1>
                <h2 className='font-bold text-xl mb-2 text-white text-center'>Salary of Doctors: 1000000 BDT</h2>

            </div>
        </div>
    );
};

export default Header;