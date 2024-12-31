"use client";

import { useState } from "react";

import "./page.css";

import ContactForm from "./contact-form";
import Carousel from "./carousel";
import "../toggle-button";
import Tag from "../tag";

import MyPicture from '../../../public/images/my-picture.jpeg';
import Image from 'next/image';

import ReactPlayer from 'react-player';

export default function HomePage() {

    const hobbies = [
        {
            icon: require("../../../public/images/github.svg"),
            description: "A good loaf of bread",
        },
        {
            icon: require("../../../public/images/github.svg"),
            description: "Cats",
        },
        {
            icon: require("../../../public/images/github.svg"),
            description: "Team-driven environment",
        },
        {
            icon: require("../../../public/images/github.svg"),
            description: "Bird watching",
        },
        {
            icon: require("../../../public/images/github.svg"),
            description: "Launch day",
        },
        {
            icon: require("../../../public/images/github.svg"),
            description: "Horse riding",
        },
        {
            icon: require("../../../public/images/github.svg"),
            description: "Swimming",
        },
        {
            icon: require("../../../public/images/github.svg"),
            description: "Archery",
        }
    ];

    const featured_projects = [
        {
            image: require("../../../public/images/winter.jpg"),
            name: 'TMDB',
            description: "A mobile app that provides information about celebrities, movies and TV shows as well as their cast and crew.",
            tags: ['Java', 'Kotlin', 'Jetpack Compose', 'Firebase']
        },
        {
            image: require("../../../public/images/warttt.jpg"),
            name: 'Hablo',
            description: "A mobile, online communication app that enables you and other people using the application to make video and voice calls, send text messages, and more - in real-time",
            tags: ['Java', 'Kotlin', 'Jetpack Compose', 'Firebase']
        },
        {
            image: require("../../../public/images/prodforecast.jpg"),
            name: 'Production Forecasting of Hudrocarbon Reserveroirs',
            description: "A mobile, online communication app that enables you and other people using the application to make video and voice calls, send text messages, and more - in real-time",
            tags: ['Python', 'Numpy', 'Pandas', 'Google Colab']
        }
    ];

    const [openNavDrawer, setOpenNavDrawer] = useState(false);

    return (
        <div >

            <header className={`fixed top-0 left-0 w-full ${openNavDrawer ? 'h-full' : 'h-fit'} justify-between z-50 flex flex-col lg:flex-row`}>

                <div className="flex flex-row items-center justify-between px-6 py-4 lg:px-10 bg-main">

                    <a href="#" about="Logo">
                        <div className="w-10 h-10 lg:w-10 lg:h-10">
                            <svg viewBox="0 0 48 48" className='fill-current'>
                                <path d="M0 47.7268C4.50012 47.7268 9.64055 41.7 14.0871 34.264C14.8109 17.2003 20.9469 -8.52111 25.1882 2.7768C27.8603 9.89454 23.0904 25.3918 16.141 36.2503C16.244 39.5766 16.5844 42.2043 16.9574 43.5078C18.235 47.9723 19.9825 43.0177 28.4559 27.0399C28.3382 33.6035 30.4845 44.3579 33.7045 45.2773C34.0265 45.3693 34.8653 45.7419 36.1506 45.2C33.3389 43.9227 33.1381 37.1457 37.7573 30.2C44.2748 20.4 47.3975 31.8 45.1883 37C45.3891 39 44.9874 42 48 47.6C46.5941 47.4 44.3849 43 43.5816 40.6C40.1674 47.4 36.7531 47.7268 33.7045 47.7268C28.6204 47.7268 26.0468 40.7203 26.7137 35.2444C24.9484 39.5201 20.6961 49.801 16.4055 47.7268C14.9133 47.0054 14.195 43.7665 14.0462 39.2886C9.58548 45.2732 4.5073 49.0659 0 47.7268Z" fill="white" />
                            </svg>
                        </div>

                    </a>

                    <button onClick={() => setOpenNavDrawer(!openNavDrawer)} className="w-10 h-10 lg:hidden">
                        <svg viewBox="0 0 42 32" className="fill-current text-white">
                            <path d="M12 10H32" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M12 18H32" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M12 26H32" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                        </svg>

                    </button>

                </div>

                <nav className={
                    `grow px-6 py-4 flex flex-col place-items-start gap-y-6 bg-[#00051c] lg:px-10 lg:flex-row lg:place-content-end lg:gap-x-16
                    transition-transform duration-1000 ease-in-out  ${openNavDrawer ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`
                }>

                    <a href='#' target="_blank" about='Home' className="py-3 text-white">
                        <p className="font-normal tracking-wider">Home</p>
                    </a>

                    <a href='#' target="_blank" about='About me' className="py-3 text-white ">
                        <p className="font-normal tracking-wider">Projects</p>
                    </a>

                    <a href='#' target="_blank" about='Github' className="py-3 text-white">
                        <p className="font-normal tracking-wider">Blog</p>
                    </a>

                    <a href='#' target="_blank" about='Contact' className="py-3 text-white ">
                        <p className="font-normal">Contact</p>
                    </a>

                </nav>

            </header>

            <main className={`bg-main z-40 ${openNavDrawer ? '' : ''}`}>

                <section className="relative w-full h-svh flex flex-col mt-6 pb-16 z-0 justify-end lg:justify-center bg-lll">

                    <div className="flex flex-col gap-y-6 mx-6 z-10 text-white lg:w-2/5 lg:mx-16 transparent">

                        <div className="flex flex-col gap-y-4">

                            <h2 className="text-2xl lg:text-2xl font-medium">Hola, I&apos;m</h2>

                            <h1 className="text-4xl lg:text-6xl text-black font-semibold tracking-tight glowing-text">Tolulope Adams.</h1>

                            <p className="lg:text-lg">I build digital solutions and  also uncovering key insights from data, helping businesses make informed decisions and drive innovation</p>

                        </div>

                        <div className="flex flex-row gap-x-6">

                            <button className="bg-blue-600 px-6 py-3 rounded">About me</button>

                            <button className="border-2 px-6 py-3 rounded">Get in touch</button>

                        </div>

                    </div>

                </section>

                <section className="w-full mt-16 px-6 flex flex-col gap-x-10 overflow-x-hidden lg:px-10">

                    <div className="flex flex-col gap-y-4">

                        <h2 className="text-xl font-normal tracking-wide">ABOUT ME</h2>

                        <h1 className="text-4xl font-bold tracking-wide">Who am I?</h1>

                    </div>

                    <div className="w-full mt-8 flex flex-row gap-x-8 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">

                        <Image alt="Description" src={MyPicture} className="shrink-0 w-full h-96 object-cover rounded snap-center lg:w-1/2" placeholder='blur' unoptimized />

                        <div className="shrink-0 w-full flex flex-col gap-y-4 snap-center">

                            <p className="">
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas eget venenatis sagittis litora dictumst. Sollicitudin commodo eleifend habitasse commodo ullamcorper cubilia faucibus cras? Magnis quam magna sed, etiam congue parturient. Malesuada rutrum sagittis fringilla sapien rutrum mi egestas. Pharetra commodo varius amet interdum; fusce ut.
                            </p>

                            <div className="w-full mt-8 flex flex-row justify-between">

                                <div className="w-24 flex flex-col items-center">

                                    <p className="text-3xl text-center font-semibold">2+</p>
                                    
                                    <p className="text-sm text-center">YEARS OF EXPERIENCE</p>

                                </div>

                                <div className="w-24 flex flex-col items-center">

                                    <p className="text-3xl text-center font-semibold">100+</p>

                                    <p className="text-sm text-center">PERSONAL PROJECTS</p>

                                </div>

                                <div className="w-24 flex flex-col items-center">

                                    <p className="text-3xl text-center font-semibold">2+</p>

                                    <p className="text-sm text-center">YEARS OF EXPERIENCE</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="mt-16 w-full flex flex-col">

                    {/* <div className="flex flex-row justify-between">

                        <hr className="w-5/12 h-px bg-zinc-200 "></hr>

                        <hr className="w-5/12 h-px bg-zinc-200"></hr>

                    </div> */}

                    <div className="flex flex-row overflow-x-hidden">

                        <div className="shrink-0 flex flex-row first_train">

                            {hobbies.map((hobby, index) => (

                                <Tag key={index} name={hobby.description} className="max-w-fit max-h-fit mr-8 px-6 py-1 rounded" />

                            ))}

                        </div>

                        <div className="shrink-0 flex flex-row second_train">

                            {hobbies.map((hobby, index) => (

                                <Tag key={index} name={hobby.description} className="max-w-fit max-h-fit mr-8 px-6 py-1 rounded" />

                            ))}

                        </div>

                    </div>

                    {/* <hr className="w-full h-px mt-8 bg-zinc-200"></hr> */}

                </section>

                <section className="mt-16 flex flex-col px-6 pt-16 lg:px-16 lg:pt-16">

                    <h6 className="text-lg font-normal tracking-wide ">EXPERTISE</h6>

                    <h3 className="mt-4 text-3xl font-bold tracking-tight font-montserrat">What Can I do?</h3>

                    <Carousel className="w-full mt-8" />

                </section>

                <section className="pt-8 px-6 lg:px-16 lg:pt-16">

                    <h6 className="mt-16 text-base font-normal tracking-wide">FEATURED PROJECTS</h6>

                    <h3 className="mt-4 text-4xl font-bold tracking-wide">What Can I do?</h3>

                    <div className="flex flex-row gap-x-4 justify-between overflow-x-auto snap-x snap-mandatory scroll-smooth lg:flex-col lg:gap-y-8">

                        {featured_projects.map((project, index) => (

                            <div key={index} className={`w-full mt-4 flex flex-col shrink-0 gap-x-6 snap-center lg:w-3/4 lg:flex-row ${(index % 2 == 0) ? "lg:self-start lg:justify-start" : "lg:self-end lg:justify-end"}`}>

                                <Image alt="Description" src={project.image} className="w-full h-64 object-cover rounded-2xl lg:w-1/3" placeholder='blur' unoptimized />

                                <div className={`w-full h-fit flex flex-col gap-y-4 mt-4 ${(index % 2 == 0) ? "lg:order-last justify-start" : "lg:order-first justify-end"}`}>

                                    <h3 className="text-2xl font-bold tracking-wide">{project.name}</h3>

                                    <p className="hidden text-xl font-normal lg:block">{project.description}</p>

                                    <div className="flex flex-row flex-wrap gap-4">

                                        {project.tags.map((tag, index) => (

                                            <Tag key={index} name={tag} className="px-6 py-1 rounded-full " />

                                        ))}

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </section>

                <section className="mt-16 flex flex-col px-6 pt-16 lg:px-16 lg:pt-16">

                    <h6 className="text-xl font-normal tracking-wide ">LATEST ARTICLES</h6>

                    <h3 className="mt-4 text-4xl font-bold tracking-wide ">From The Blog</h3>

                    <div className="mt-16 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-x-16">

                        <div className="w-full lg:row-span-2 flex flex-col gap-y-4 justify-between">

                            <Image alt="Description" src={MyPicture} className="w-full h-48 lg:h-96 object-cover rounded-2xl" placeholder='blur' unoptimized />

                            <a href="" target="_blank" className="text-2xl font-medium font-normal">

                                <h3 className="">End-to-End Testing an AI Application with Playwright and GitHub Actions</h3>

                            </a>

                            <p>Oct 31, 2024</p>
                        </div>

                        <div className="w-full flex flex-col lg:flex-row lg:row-span-1 gap-4 justify-between">

                            <Image alt="Description" src={MyPicture} className="w-full h-48 object-cover rounded-2xl" placeholder='blur' unoptimized />

                            <div className="flex flex-col gap-y-4">

                                <a href="" target="_blank" className="text-2xl font-medium font-normal">

                                    <h3 className="">End-to-End Testing an AI Application with Playwright and GitHub Actions</h3>

                                </a>

                                <p>Oct 31, 2024</p>

                            </div>

                        </div>

                        <div className="w-full flex flex-col lg:flex-row lg:row-span-1 gap-4 justify-between">

                            <Image alt="Description" src={MyPicture} className="w-full h-48 object-cover rounded-2xl" placeholder='blur' unoptimized />

                            <div className="flex flex-col">

                                <a href="" target="_blank" className="text-2xl font-medium font-normal">
                                    <h3 className="">End-to-End Testing an AI Application with Playwright and GitHub Actions</h3>
                                </a>

                                <p>Oct 31, 2024</p>

                            </div>

                        </div>

                    </div>

                </section>

                <footer className="mt-16 flex flex-col px-6 pt-16 lg:px-16 lg:pt-16">

                    <h6 className="text-xl font-normal tracking-wide ">CONTACT ME</h6>

                    <h3 className="mt-4 text-4xl font-bold tracking-wide ">Get in touch</h3>

                    <div className="flex flex-row mt-8">

                        <ContactForm className='w-full flex flex-col gap-6 py-6 text-white lg:w-1/2 ' />

                        <div className='hidden flex-col gap-16 lg:flex'>

                            <div className='hidden md:flex md:flex-col gap-16'>

                                <div className='flex flex-row gap-16'>
                                    <a href='https://github.com/tolulope-adams' target="_blank" about='Github'>
                                        <svg viewBox="0 0 28 28" className='w-10 h-10 fill-current text-white'>
                                            <path d="M14.0001 0C6.26903 0 0 6.42658 0 14.3544C0 20.6967 4.01144 26.0773 9.57413 27.9753C10.2738 28.1082 10.5307 27.6639 10.5307 27.2848C10.5307 26.9425 10.5176 25.8117 10.5117 24.6123C6.61677 25.4806 5.79492 22.9186 5.79492 22.9186C5.15808 21.2594 4.24048 20.8184 4.24048 20.8184C2.97031 19.9274 4.33622 19.9456 4.33622 19.9456C5.7421 20.047 6.48238 21.4249 6.48238 21.4249C7.73102 23.6194 9.75749 22.9849 10.5564 22.6183C10.682 21.6904 11.0449 21.0572 11.4452 20.6988C8.33569 20.3357 5.06672 19.1049 5.06672 13.6047C5.06672 12.0376 5.61364 10.757 6.50928 9.75183C6.3639 9.39022 5.88473 7.9303 6.64488 5.95307C6.64488 5.95307 7.82051 5.56726 10.4959 7.42448C11.6126 7.10633 12.8103 6.94692 14.0001 6.94152C15.1898 6.94692 16.3884 7.10633 17.5073 7.42448C20.1795 5.56726 21.3535 5.95307 21.3535 5.95307C22.1155 7.9303 21.6361 9.39022 21.4907 9.75183C22.3883 10.757 22.9315 12.0375 22.9315 13.6047C22.9315 19.118 19.6564 20.332 16.539 20.6873C17.0411 21.1328 17.4885 22.0064 17.4885 23.3455C17.4885 25.2661 17.4723 26.812 17.4723 27.2848C17.4723 27.6668 17.7243 28.1144 18.434 27.9734C23.9936 26.0732 28 20.6945 28 14.3544C28 6.42658 21.7318 0 14.0001 0Z" />
                                        </svg>
                                    </a>
                                    <a href='https://www.linkedin.com/in/tolulope-adams/' target="_blank" about='Linkedin'>
                                        <svg viewBox="0 0 20 20" className='w-10 h-10 fill-current text-white'>
                                            <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z" />
                                        </svg>
                                    </a>
                                    <a href='https://www.instagram.com/__mah.moud/' target="_blank" about='Instagram'>
                                        <svg viewBox="0 0 58 58" className='w-10 h-10 fill-current text-white'>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.939697 16.3769C0.939697 7.79374 7.92271 0.81073 16.5059 0.81073H41.7523C50.3355 0.81073 57.3182 7.79374 57.3182 16.3769V41.6233C57.3182 50.2065 50.3355 57.1893 41.7523 57.1893H16.5059C7.92271 57.1893 0.939697 50.2065 0.939697 41.6233V16.3769ZM17.9354 29C17.9354 35.1721 22.9569 40.1936 29.129 40.1936C35.3011 40.1936 40.3225 35.1721 40.3225 29C40.3225 22.8279 35.3011 17.8065 29.129 17.8065C22.9569 17.8065 17.9354 22.8279 17.9354 29ZM14.3074 29C14.3074 20.8272 20.9562 14.1784 29.129 14.1784C37.3018 14.1784 43.9506 20.8272 43.9506 29C43.9506 37.1728 37.3018 43.8216 29.129 43.8216C20.9562 43.8216 14.3074 37.1728 14.3074 29ZM47.1837 6.78949C49.3323 6.78949 51.0739 8.53123 51.0739 10.6798C51.0739 12.8284 49.3323 14.5701 47.1837 14.5701C45.0351 14.5701 43.2933 12.8284 43.2933 10.6798C43.2933 8.53123 45.0351 6.78949 47.1837 6.78949Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <p className='text-center my-8'>© 2024 Tolulope Adams</p>

                </footer>

            </main>

        </div>
    )
}