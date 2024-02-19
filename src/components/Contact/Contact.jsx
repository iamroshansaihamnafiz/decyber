import React from 'react';
import contactData from '../../data/contact-section-data.json';

function Contact(props) {
    const {
        heading
    } = contactData;
    return (
        <>
            <section id="contact-section">
                <div className="container pt-16">
                    <div className="head text-center text-white">
                        <h1 className='font-bold text-5xl'>
                            {heading}
                        </h1>
                    </div>
                    <div className="form mt-10 mx-0 md:mx-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <input type="text" className="pl-3 py-3 px-8 outline-0 rounded text-white bg-[#0A3967]"
                                   placeholder="Name"/>

                            <input type="email" className="pl-3 py-3 px-8 outline-0 rounded text-white bg-[#0A3967]"
                                   placeholder="Email"/>

                            <input type="number" className="pl-3 py-3 px-8 outline-0 rounded text-white bg-[#0A3967]"
                                   placeholder="Phone"/>
                        </div>

                        <div className="grid grid-cols-1 mt-4">
                            <textarea name="message" placeholder="Message" cols="30" rows="5"
                                      className="pl-3 py-3 px-8 outline-0 rounded text-white bg-[#0A3967]"></textarea>
                        </div>

                        <button
                            className="mt-4 button rounded-md text-md text-black py-3 px-6 bg-primary hover:shadow-lg hover:shadow-cyan-500/50 hover:text-white hover:bg-[#27AFE8] transition">
                            Send Message
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;