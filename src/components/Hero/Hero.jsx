'use client';
import React from 'react';
import heroData from '../../data/hero-section-data.json';

function Hero(props) {
    const {
        heroImage, heading, description, button
    } = heroData;
    return (
        <>
            <section id="hero-section" className="mt-0 md:-mt-20 lg:-mt-28">
                <div className="full">
                    <div className="banner flex flex-col justify-center h-[100vh] xl:h-[120vh]"
                         style={{
                             backgroundImage: `linear-gradient(0deg, rgb(0 1 42), rgb(29 56 98 / 55%)),url(${heroImage})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center',
                             backgroundRepeat: 'no-repeat',
                             width: '100%',
                         }}
                    >
                        <div className="container pt-14">
                            <h2 className="mt-3 text-white font-bold text-[25px] lg:leading-[65px] sm:text-[45px] md:text-5xl lg:text-[57px]">
                                {heading}<br/>
                                Business
                            </h2>
                            <p className="mt-4 md:mt-6 text-white sm:text-[15px] md:text-xl font-semibold">
                                {description}<br/>
                                for a competitive edge.
                            </p>
                            <button
                                className="button mt-6 rounded-md text-md text-black py-3 px-8 bg-primary hover:shadow-lg hover:shadow-cyan-500/50 hover:text-white hover:bg-[#27AFE8] transition">
                                {button}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;