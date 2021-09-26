import React from 'react';
import './DoctorProfile.css'

const DoctorProfile = (props) => {
    // console.log(props.drInfo)
    const { drInfo } = props;

    let doctorsSalary = 0;
    for (const infos of drInfo) {
        doctorsSalary += infos.salary
    }

    return (
        <div className='p-5'>
            <h1 className='font-bold text-xl mb-2 text-center mb-4'>SHOW INFO</h1>
            <h2 className='font-bold text-xl mb-2'>Total Doctor: {props.drInfo.length}</h2>



            {
                drInfo.map(dr => <h2
                    key={dr.key}
                    className='font-bold text-xl mb-2'>Doctor Name: <p>{dr.name}</p></h2>)
            }

            <h2 className='font-bold text-xl mb-2'>Doctor Salary: {doctorsSalary}</h2>

            <div className='mt-5 flex justify-center'>
                <button onClick={() => props.appoinment(props.doctor)}
                    className='rounded py-2 px-5 bg-purple-800 text-white'>
                    <i className='fas fa-bookmark mr-2'></i>
                    Submit</button>
            </div>
        </div>
    );
};

export default DoctorProfile;