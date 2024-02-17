import React from 'react';
import weOfferData from "@/data/we-offer-section-data.json";
import Image from "next/image";

function WeOffer(props) {
    const {HighlightText, heading, description, offers} = weOfferData;
    return (
        <>
            <section id="we-offer-section">
                <div className="container pt-28">
                    <div className="head-wrap text-center">
                        <div className="tag">
                            <span className="text-primary text-md">
                                {HighlightText}
                            </span>
                        </div>
                        <h1 className="mt-4 font-bold text-5xl text-white leading-[55px]">
                            {heading} <br/>
                            Solutions
                        </h1>
                        <p className="mt-4 text-gray-300">
                            {description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {offers.map((offer, index) => (
                            <div key={index}
                                 className="col bg-[#0B2347] hover:border-primary hover:shadow-lg hover:shadow-green-500/30 transition text-center text-white border border-gray-600 rounded py-8 px-4">
                                <div className="icon flex items-center justify-center">
                                    <span>
                                        <Image src={offer.icon} className="w-full" width={100} height={100} alt="Icon"/>
                                    </span>
                                </div>
                                <h3 className="font-semibold text-xl mt-4">
                                    {offer.name}
                                </h3>
                                <p className="text-gray-300 mt-4">
                                    {offer.description}
                                </p>
                                <button
                                    className="button mt-6 rounded-md text-sm text-black py-2 px-6 bg-primary hover:shadow-lg hover:shadow-cyan-500/50 hover:text-white hover:bg-[#27AFE8] transition">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default WeOffer;