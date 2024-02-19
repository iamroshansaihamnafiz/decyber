import React from 'react';
import codeImage from "../../../public/asset/images/bg-code.jpg";
import whyUsData from '../../data/why-us-section-data.json';
import Image from "next/image";

function WhyUs(props) {
    const {highlightText, heading, description, button, reasons} = whyUsData;
    return (
        <>
            <section id="why-us-section" className="mt-0 lg:mt-10"
                     style={{
                         backgroundImage: `linear-gradient(0deg, #0b2347e3, #091d42d9), url(${codeImage.src})`,
                         width: '100%',
                         height: '100%',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         display: 'flex',
                         alignItems: 'center',
                     }}
            >
                <div className="container pt-8">
                    <div className="pt-10 head-wrap grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        <div className="col">
                              <span className="text-primary text-md">
                            {highlightText}
                        </span>
                            <h1 className="mt-4 font-bold text-5xl text-white leading-[55px]">
                                {heading}
                            </h1>
                        </div>
                        <div className="col">
                            <p className="mt-4 text-gray-300">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div
                        className="block lg:grid grid-cols-1 md:grid-cols-1 items-center justify-center lg:grid-cols-2 gap-6 mt-12">
                        {reasons.map((reason, index) => (
                            <div key={index}
                                 className="col bg-[#0d264a] text-white rounded py-8 px-4 my-4 lg:my-0">
                                <div className="block lg:flex justify-center gap-4">
                                    <div className="icon flex justify-center lg:block">
                                        <Image src={reason.icon} width={100} height={100} alt="IconImg"/>
                                    </div>
                                    <div className="text text-center lg:text-left mt-4 lg:mt-0">
                                        <h1 className="font-semibold text-xl">{reason.title}</h1>
                                        <p className="mt-4 text-gray-300">{reason.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhyUs;