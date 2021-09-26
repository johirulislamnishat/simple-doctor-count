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
        <div>
            <h1 className='font-bold text-xl mb-2'>Show Info</h1>
            <h1 className='font-bold text-xl mb-2'>Total Doctor: {props.drInfo.length}</h1>



            {
                drInfo.map(dr => <h1
                    key={dr.id}
                    className='font-bold text-xl mb-2'>Doctor Name: {dr.name}</h1>)
            }

            <h1 className='font-bold text-xl mb-2'>Doctor Salary: {doctorsSalary}</h1>
        </div>
    );
};

export default DoctorProfile;