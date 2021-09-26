import React, { useEffect, useState } from 'react';
import DoctorInfo from '../DoctorList/DoctorInfo';
import DoctorProfile from '../DoctorProfile/DoctorProfile';
import Header from '../Header/Header';
import './Doctor.css'

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [drInfo, setDrInfo] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    const addAppoint = (doctor) => {
        const newDoctor = [...drInfo, doctor]
        setDrInfo(newDoctor)
    }
    return (

        <div>

            <div>
                <Header></Header>
            </div>

            <div className='container displayDoctor'>
                {/* cart */}
                <div className='doctors grid grid-cols-3 gap-3'>
                    {
                        doctors.map(doctor => <DoctorInfo
                            key={doctor.id}
                            doctor={doctor}
                            appoinment={addAppoint}
                        ></DoctorInfo>)


                    }
                </div>

                {/* doctor info  */}
                <div>
                    <DoctorProfile drInfo={drInfo}></DoctorProfile>
                </div>
            </div>
        </div>
    );
};

export default Doctor;