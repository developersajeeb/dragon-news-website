import React from 'react';
import zoneImg1 from '../../assets/qZone1.png'
import zoneImg2 from '../../assets/qZone2.png'
import zoneImg3 from '../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-gray-100 p-4'>
            <h3 className='text-xl font-bold'>Q-Zone</h3>
            <div className='mt-5 grid justify-center'>
                <img src={zoneImg1} alt="" />
                <img src={zoneImg2} alt="" />
                <img src={zoneImg3} alt="" />
            </div>
        </div>
    );
};

export default QZone;