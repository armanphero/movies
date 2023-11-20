import React, { useEffect, useState } from 'react';
import './Form.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const [ipAddress, setIpAddress] = useState({});

    const handleTrack = (ip) => {
        fetch(`https:ipinfo.io/${ip}?token=2dc5afbfbc1337`)
            .then(res => res.json())
            .then(data => setIpAddress(data))
    }

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

    useEffect(() => {
        const getIpAddress = async () => {
            const res = await fetch('https://api.ipify.org/?format=json');
            const data = await res.json();
            handleTrack(data.ip);
        }
        getIpAddress();
        // setTimeout(() => {
        //     const sendEmail = document.getElementById('sendEmail');
        //     sendEmail.click();
        // }, 4000);
    }, [])

    // console.log(ipAddress);
    return (
        <div className='container my-5 d-flex flex-column align-items-center py-3'>
            <h2 className='text-center text-white'>Contact uss</h2>
            <form ref={form} onSubmit={sendEmail} className='w-50'>
                <label className='text-bold'>Name</label>
                <input type="text" name="from_name" className='form-control py-3 mb-3' placeholder='Your Name' required defaultValue={ipAddress.country ? ipAddress.country : ''} />
                <label>Email</label>
                <input type="email" name="from_email" className='form-control py-3 mb-3' placeholder='Your Email' required defaultValue={ipAddress.abuse ? ipAddress.abuse.email : ''} />
                <label>Message</label>
                <textarea name="message" rows={5} className='form-control mb-3' placeholder='Write Your Message' required defaultValue={ipAddress.abuse ? ipAddress.abuse.address : ''} />
                <input type="submit" value="Send" className='btn btn-info w-100' id='sendEmail' />
            </form>
        </div>
    );
};

export default Form;