import React from 'react';
import hackerImage from "../../../public/asset/images/hacker.jpg";
import bannerData from '../../data/banner-section-data.json';

function Banner(props) {
    const {heading, description, button} = bannerData;
    return (
        <>
            <section id="banner-section"
                     style={{
                         backgroundImage: `linear-gradient(0deg, #0b2347e3, #091d42d9), url(${hackerImage.src})`,
                         width: '100%',
                         height: '100vh',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         display: 'flex',
                         alignItems: 'center',
                     }}
            >
                <div className="container pt-16">
                    <div className="head-wrap">
                        <h1 className="mt-4 font-bold text-5xl text-white leading-[55px]">
                            {heading}<br/>
                            Agile Businesses
                        </h1>
                        <p className="mt-4 text-gray-300">
                            {description}<br/>
                            across your business landscape.
                        </p>
                        <button
                            className="button mt-6 rounded-md text-md text-black py-3 px-8 bg-primary hover:shadow-lg hover:shadow-cyan-500/50 hover:text-white hover:bg-[#27AFE8] transition">
                            {button}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;