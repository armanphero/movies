import React from 'react';
import { useState } from 'react';

const Cart = ({ watchTimes, handleBreakTime }) => {
    const [breakTime, setBreakTime] = useState(0);
    const manageBreaktime = (time) => {
        if((watchTimes - time) < 0) {
            alert('Boo')
            return;
        }
        handleBreakTime(time);
        setBreakTime(time);
    }

    return (
        <div className='card position-sticky top-0'>
            <h1 className='text-center'>My Cart</h1>
            <h6 className='text-center mt-4'>Total watch time</h6>
            <div className='d-flex justify-content-center'>
                <input className='w-75 form-control' type="text" disabled value={watchTimes} />
            </div>

            <h6 className='text-center mt-5'>Add break time</h6>
            <div className='d-flex justify-content-evenly my-2'>
                <button className='btn btn-info px-4' onClick={() => manageBreaktime(15)}>15</button>
                <button className='btn btn-warning px-4' onClick={() => manageBreaktime(20)}>20</button>
                <button className='btn btn-danger px-4' onClick={() => manageBreaktime(25)}>25</button>
            </div>
            <div className='d-flex justify-content-center'>
                <input className='w-75 form-control' type="text" disabled value={breakTime} />
            </div>
            <div className='text-center mt-5 mb-4'>
                {
                    breakTime ?
                    <button className='btn btn-info w-75'>Complete</button> :
                    <button className='btn btn-info w-75' disabled>Complete</button> 
                }
            </div>
        </div>
    );
};

export default Cart;