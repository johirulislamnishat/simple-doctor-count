import React from 'react';
import './DoctorInfo.css'

const DoctorInfo = (props) => {
    // console.log(props)
    const { image, name, designation, degree, speciality, salary } = props.doctor;
    return (
        <div>

            <div className="mr-2">
                <div className="max-w-sm rounded shadow-lg">
                    <img className='w-full h-64' src={image} alt="" />
                    <div className="px-2 py-4">
                        <h1 className='font-bold text-xl mb-2'>Name: {name}</h1>

                        <p className='text-black text-lg'>Designation: <span className='text-gray-700 text-base'>{designation}</span></p>

                        <p className='text-black text-lg'>Degree: <span className='text-gray-700 text-base'>{degree}</span></p>

                        <p className='text-black text-lg'>Specialist: <span className='text-gray-700 text-base'>{speciality}</span></p>

                        <p className='text-black text-lg'>Salary: <span className='text-gray-700 text-base'>{salary} BDT</span> </p>

                        <div className='flex justify-center gap-5 text-2xl mt-5 text-purple-600'>
                            <p><i className="fab fa-facebook"></i> </p>
                            <p><i className="fab fa-instagram-square"></i></p>
                            <p><i className="fab fa-twitter-square"></i></p>
                            <p><i className="fab fa-linkedin"></i></p>
                        </div>

                        <div className='mt-5 flex justify-center'>
                            <button onClick={() => props.appoinment(props.doctor)} className='py-2 px-5 rounded bg-purple-800 text-white'><i className="fas fa-bookmark mr-2"></i> Get Appointment</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default DoctorInfo;