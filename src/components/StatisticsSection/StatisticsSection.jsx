'use client'
import React, {useState} from 'react';
import staTicData from "@/data/statistics-section-data.json";
import mapImage from '../../../public/asset/images/map-bg.png';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function StatisticsSection(props) {
    const {heading, description, description2, statistics} = staTicData;
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <section id="statistics-sectionh"
                     style={{
                         backgroundImage: `linear-gradient(0deg, #0b2347e3, #091d42d9), url(${mapImage.src})`,
                         width: '100%',
                         height: '100%',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                     }}
            >
                <div className="container mt-16 py-16">
                    <div className="head-wrap text-center">
                        <h1 className="mt-4 font-bold text-5xl text-white leading-[55px]">
                            {heading} <br/>
                            Transformation
                        </h1>
                        <p className="mt-4 text-gray-300">
                            {description}<br/>
                            {description2}
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:grid-cols-3 gap-6 mt-12">
                        {statistics.map((statistic, index) => (
                            <div key={index}
                                 className="col bg-[#0B2347] hover:border-primary hover:shadow-lg hover:shadow-green-500/30 transition text-center text-white border border-gray-600 rounded py-8 px-4">
                                <h3 className="font-bold text-primary text-5xl mt-4">
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        {counterOn && (
                                            <CountUp
                                                start={0}
                                                end={statistic.number}
                                                duration={2}
                                                delay={0}
                                            >
                                                {({ countUpRef, start }) => (
                                                    <>
                                                        <span ref={countUpRef} />
                                                        {index === 1 && '.8%'} {/* Add '%' only for the second div */}
                                                        {index === 2 && '%'} {/* Add 'k' only for the third div */}
                                                    </>
                                                )}
                                            </CountUp>
                                        )}
                                    </ScrollTrigger>
                                </h3>
                                <p className="text-white font-semibold mt-4">
                                    {statistic.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default StatisticsSection;