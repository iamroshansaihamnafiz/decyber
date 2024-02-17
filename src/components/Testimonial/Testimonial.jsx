'use client';
import React from 'react';
import testimonialData from "@/data/testimonial-section-data.json";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {Pagination} from 'swiper/modules';

function Testimonial(props) {
    const {highlightText, heading, description, testimonials} = testimonialData;
    const pagination = {
        clickable: true,
    };
    return (
        <>
            <section id="testimonial-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <div className="tag">
                            <span className="text-primary text-md">
                                {highlightText}
                            </span>
                        </div>
                        <h1 className="mt-4 font-bold text-5xl text-white leading-[55px]">
                            {heading}
                        </h1>
                        <p className="mt-6 text-gray-300">
                            {description}<br/>
                            ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            loop
                            autoplay={{
                                stopOnLastSlide: false,
                            }}
                            pagination={pagination}
                            modules={[Pagination]}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                400: {
                                    slidesPerView: 1,
                                },
                                500: {
                                    slidesPerView: 1,
                                },
                                639: {
                                    slidesPerView: 1,
                                },
                                865: {
                                    slidesPerView: 2
                                },
                                1000: {
                                    slidesPerView: 3
                                },
                                1500: {
                                    slidesPerView: 3
                                },
                                1700: {
                                    slidesPerView: 3
                                }
                            }}
                            className="mySwiper"
                            style={{
                                paddingBottom: '40px',
                            }}
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index} className="mt-8">
                                    <div
                                        className="col bg-[#0B2347] cursor-pointer text-center text-white border border-gray-600 rounded py-8 px-6">
                                        <p className="text-gray-300 italic text-lg mt-4">
                                            {item.testimonial}
                                        </p>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <div className="icon flex items-center justify-center">
                                        <span>
                                            <Image src={item.timage} className="w-10 h-10 rounded-full" width={100}
                                                   height={100}
                                                   alt="Timg"/>
                                        </span>
                                            </div>
                                            <div className="two text-left">
                                                <h3 className="font-semibold text-primary text-lg mt-4">
                                                    {item.name}
                                                </h3>
                                                <p className="mt-1 text-md">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonial;