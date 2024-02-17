'use client';
import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";
import BannerImg from '../../../public/asset/images/banner.jpg';
import heroData from '../../data/hero-section-data.json';
import iconSliderData from "@/data/icon-slider-section-data.json";


function Hero(props) {
    const {
        tag, heading, description, button
    } = heroData;
    const {iconSlider} = iconSliderData;
    return (
        <>
            <section id="hero-section" className="mt-0 md:-mt-20 lg:-mt-28">
                <div className="full">
                    <div className="banner relative text-center">
                        {/* Overlay Color */}
                        <div className="overlay-color"></div>
                        <Image src={BannerImg} className="w-full h-[500px] sm:h-full" alt="BannerImg"/>
                        <div
                            className="flex flex-col items-center justify-center left-0 right-0 lg:block absolute lg:left-10  top-[35%] text-left">
                            <span className="text-primary">
                                {tag}
                            </span>
                            <h2 className="mt-3 text-white text-center md:text-start lg:w-1/2 font-bold text-[18px] lg:leading-[65px] sm:text-[26px] md:text-3xl lg:text-[57px]">
                                {heading}
                            </h2>
                            <p className="mt-4 md:mt-6 text-white text-center md:text-start sm:text-[15px] md:text-xl font-semibold">
                                {description}
                            </p>
                            <button
                                className="button mt-6 rounded-md text-md text-black py-3 px-8 bg-primary hover:shadow-lg hover:shadow-cyan-500/50 hover:text-white hover:bg-[#27AFE8] transition">
                                {button}
                            </button>

                        </div>
                    </div>
                    <div className="container icon-slider -mt-24 text-red-600">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={6}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            loop
                            autoplay={{
                                stopOnLastSlide: false,
                            }}
                            className="border-t border-t-gray-400 mx-auto"
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                400: {
                                    slidesPerView: 2,
                                },
                                500: {
                                    slidesPerView: 3,
                                },
                                639: {
                                    slidesPerView: 3,
                                },
                                865: {
                                    slidesPerView: 4
                                },
                                1000: {
                                    slidesPerView: 6
                                },
                                1500: {
                                    slidesPerView: 6
                                },
                                1700: {
                                    slidesPerView: 6
                                }
                            }}
                        >
                            {iconSlider.map((item, index) => (
                                <SwiperSlide key={index} className="mt-8">
                                    <Image src={item} className="w-full h-8" width={100} height={100} alt="Slider Img"/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;