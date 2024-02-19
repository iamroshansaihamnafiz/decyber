import React from 'react';
import hackerImage from "../../../public/asset/images/hacker.jpg";
import bannerData from '../../data/banner-section-data.json';

function Banner(props) {
    const {heading, description} = bannerData;
    return (
        <>
            <section id="banner-section" className="py-[120px]"
                     style={{
                         backgroundImage: `linear-gradient(0deg, #0b2347e3, #091d42d9), url(${hackerImage.src})`,
                         width: '100%',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         display: 'flex',
                         alignItems: 'center',
                     }}
            >
                <div className="container">
                    <div className="head-wrap">
                        <h1 className="mt-4 font-bold text-5xl text-white leading-[55px]">
                            {heading}<br/>
                            Agile Businesses
                        </h1>
                        <p className="mt-4 text-gray-300">
                            {description}<br/>
                            across your business landscape.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;