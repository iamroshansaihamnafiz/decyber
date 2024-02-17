'use client';
import React, {useState} from 'react';
import Link from "next/link";
import {HiOutlineBars3} from "react-icons/hi2";
import {AiOutlineClose} from "react-icons/ai";
import Image from "next/image";
import navbarData from '../../data/header-section-data.json';

function Header(props) {
    // 👇️ Toggle class on click Show And Hide Menu Bar (Button)
    const [isMenuVisible, setMenuVisible] = useState(false);
    const handleClick = () => {
        const nav = document.getElementById('mobile_menu');
        if (nav) {
            if (isMenuVisible) {
                nav.classList.remove('show_menu');
            } else {
                nav.classList.add('show_menu');
            }
            setMenuVisible(!isMenuVisible);
        }
    };

    const {logo, menu} = navbarData;
    return (
        <>
            <section id="header-section" className="relative">
                <header
                    className="lg:flex py-6 lg:py-4 mt-0 md:mt-[80px] lg:mt-0 lg:bg-transparent w-full fixed lg:relative z-50">
                    <div className="container flex items-center justify-between">
                        <Link href='/' className="logo">
                            <Image src={logo} className="h-[45px] w-full" width={100} height={100} alt="Logo"/>
                        </Link>

                        <nav className="hidden lg:block overflow-hidden lg:overflow-visible">
                            <div className="container flex">
                                <div className="navbar-items flex items-center justify-between flex-grow pl-12">
                                    <div className="flex items-center space-x-10 capitalize">
                                        {menu.map((item, index) => (
                                            <li key={index} className="list-none">
                                                <Link href="/"
                                                      className="active text-white font-[500] hover:text-primary transition">{item}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </nav>

                        {/* Tab / Mobile Icons */}
                        <div className="lg:hidden tab-mobile flex items-center gap-2">
                            <div onClick={handleClick}
                                 className="w-8 text-center text-white hover:text-primary transition cursor-pointer">
                                <div className="text-2xl">
                                    {isMenuVisible ? <AiOutlineClose/> : <HiOutlineBars3/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu */}
                <div id="mobile_menu" className="block lg:hidden bg-white z-50 overflow-hidden w-full">
                    <div className="navbar-wrapper pl-12 pt-8 space-y-5">
                        {menu.map((item, index) => (
                            <li key={index} className="list-none">
                                <Link href="/"
                                      className="active text-black font-[500] hover:text-primary transition">{item}</Link>
                            </li>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;