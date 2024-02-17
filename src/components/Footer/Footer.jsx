import React from 'react';
import {CiMail} from "react-icons/ci";
import {GoArrowUpRight} from "react-icons/go";
import Link from "next/link";
import footerData from '../../data/footer-data.json';
import Image from "next/image";

function Footer(props) {
    const {
        heading, subHeading, Services, Support, Company, footerLogo, copyright
    } = footerData;
    return (
        <>
            <section id="footer-section" className="bg-[#0A2246] mt-20">
                <div className="container pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-2 xl:grid-cols-12 gap-4 text-white">
                        <div className="col md:col-span-12 lg:col-span-12 xl:col-span-5 mr-0 xl:mr-4">
                            <h2 className="font-bold text-3xl">{heading}</h2>
                            <h4 className="font-semibold text-gray-300 text-lg mt-4">
                                {subHeading}
                            </h4>
                            <div className="flex items-center gap-4 mt-4">
                                <input type="email" className="pl-3 py-3 px-8 outline-0 rounded bg-[#0A3967]"
                                       placeholder="Email"/>
                                <button
                                    className="flex items-center gap-2 button rounded-md text-md text-black py-3 px-6 bg-primary hover:shadow-lg hover:shadow-cyan-500/50 hover:text-white hover:bg-[#27AFE8] transition">
                                    Sign Up
                                    <CiMail size={22}/>
                                </button>
                            </div>
                        </div>
                        <div className="col md:col-span-4 lg:col-span-2 xl:col-span-3">
                            <div className="head">
                                <h2 className="font-semibold text-lg">Services</h2>
                                <ul className="mt-4 space-y-3">
                                    {Services.map((item, index) => (
                                        <li key={index}
                                            className="flex items-center gap-2 text-gray-300 hover:text-primary">
                                            <GoArrowUpRight size={20} className="text-primary"/>
                                            <Link href='/' className="text-[15px]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col md:col-span-4 lg:col-span-5 xl:col-span-2 mt-6 xl:mt-0">
                            <div className="head">
                                <h2 className="font-semibold text-lg">Support</h2>
                                <ul className="mt-4 space-y-3">
                                    {Support.map((item, index) => (
                                        <li key={index}
                                            className="flex items-center gap-2 text-gray-300 hover:text-primary">
                                            <GoArrowUpRight size={20} className="text-primary"/>
                                            <Link href='/' className="text-[15px]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col md:col-span-4 lg:col-span-5 xl:col-span-2 mt-6 xl:mt-0">
                            <div className="head">
                                <h2 className="font-semibold text-lg">Company</h2>
                                <ul className="mt-4 space-y-3">
                                    {Company.map((item, index) => (
                                        <li key={index}
                                            className="flex items-center gap-2 text-gray-300 hover:text-primary">
                                            <GoArrowUpRight size={20} className="text-primary"/>
                                            <Link href='/' className="text-[15px]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright py-8 mt-8 border-t border-gray-600 mx-10">
                    <div className="block sm:flex items-center justify-between">
                        <div className="logo">
                            <Image src={footerLogo} className="w-32" width={100} height={100} alt="footerLogo"/>
                        </div>
                        <div className="mt-4 sm:mt-0 text-gray-300 text-sm">
                            {copyright}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;