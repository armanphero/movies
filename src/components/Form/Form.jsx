import React from 'react';
import './Form.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vz3s2sn', 'template_qmc9uwq', form.current, '9gSfZZ2Cnw0WAd75X')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='container my-5 d-flex flex-column align-items-center py-3'>
            <h2 className='text-center text-white'>Contact us</h2>
            {/* <form action="#" className='w-50 d-flex flex-column gap-4'>
                <input type="text" name="" id="" className='form-control py-3' placeholder='Your Name' />
                <input type="email" name="" id="" className='form-control py-3' placeholder='Your Email' />
                <textarea name="" id="" cols="30" rows="5" className='form-control' placeholder='Write Your Message'></textarea>
                <button className='btn btn-info'>Submit</button>
            </form> */}
            <form ref={form} onSubmit={sendEmail} className='w-50'>
                <label className='text-bold'>Name</label>
                <input type="text" name="from_name" className='form-control py-3 mb-3' placeholder='Your Name' required />
                <label>Email</label>
                <input type="email" name="from_email" className='form-control py-3 mb-3' placeholder='Your Email' required />
                <label>Message</label>
                <textarea name="message" rows={5} className='form-control mb-3' placeholder='Write Your Message' required />
                <input type="submit" value="Send" className='btn btn-info w-100' />
            </form>
        </div>
    );
};

export default Form;