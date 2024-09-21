"use client";

import ContactForm from "./contact-form";
import Carousel from "./carousel";
import ConsoleText from "./console-text";

import "./page.css";



import "./contact-form";

import MyPictury from '../asset/icons/my-picture.jpeg';
import MyPicture from '../../../public/images/landing.jpg';
import Image from 'next/image';

import Tag from "./tag";

import ReactPlayer from 'react-player';


 export default function HomePage() {
    const hobbies = [
        {
            icon: require("../../../public/images/github.svg"),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        },
        {
            icon: require("../../../public/images/github.svg"),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        },
        {
            icon: require("../../../public/images/github.svg"),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        }
    ];


    return (
        <div className="bg-white">

            <section className="relative w-full h-svh">

                <Image alt="Description" src={MyPicture} className="absolute top-0 left-0 w-full h-full object-cover" placeholder='blur' unoptimized/>

                <div className="absolute top-0 left-0 w-full h-full flex flex-col space-y-80 px-16 py-10 bg-black/40">

                    <header className="flex flex-row gap-x-16 justify-between">

                        <a href='#' about='Logo'>
                            <svg viewBox="0 0 48 48" className='w-12 lg:h-12 fill-current text-white'>
                                <path d="M0 47.7268C4.50012 47.7268 9.64055 41.7 14.0871 34.264C14.8109 17.2003 20.9469 -8.52111 25.1882 2.7768C27.8603 9.89454 23.0904 25.3918 16.141 36.2503C16.244 39.5766 16.5844 42.2043 16.9574 43.5078C18.235 47.9723 19.9825 43.0177 28.4559 27.0399C28.3382 33.6035 30.4845 44.3579 33.7045 45.2773C34.0265 45.3693 34.8653 45.7419 36.1506 45.2C33.3389 43.9227 33.1381 37.1457 37.7573 30.2C44.2748 20.4 47.3975 31.8 45.1883 37C45.3891 39 44.9874 42 48 47.6C46.5941 47.4 44.3849 43 43.5816 40.6C40.1674 47.4 36.7531 47.7268 33.7045 47.7268C28.6204 47.7268 26.0468 40.7203 26.7137 35.2444C24.9484 39.5201 20.6961 49.801 16.4055 47.7268C14.9133 47.0054 14.195 43.7665 14.0462 39.2886C9.58548 45.2732 4.5073 49.0659 0 47.7268Z" fill="white"/>
                            </svg>
                        </a>

                        <nav className="flex flex-row gap-10 text-white">

                            <a href='#' target="_blank" about='Github' className="hidden lg:flex">
                                <p className="text-lg font-normal tracking-wider">Home</p>
                            </a>

                            <a href='#' target="_blank" about='Github' className="hidden lg:flex">
                                <p className="text-lg font-normal tracking-wider">About</p>
                            </a>

                            <a href='#' target="_blank" about='Github' className="hidden lg:flex">
                                <p className="text-lg font-normal tracking-wider">Portfolio</p>
                            </a>

                            <a href='#' target="_blank" about='Github' className="hidden lg:flex">
                                <p className="text-xl font-normal tracking-wider">Blog</p>
                            </a>

                            <a href='#' target="_blank" about='Github' className="hidden lg:flex">
                                <p className="text-xl font-normal tracking-wider">Contact</p>
                            </a>

                        </nav>

                        <svg viewBox="0 0 40 40" className='lg:hidden w-12 h-12 fill-current text-white'>
                            <path d="M8 20H32" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M18.5 8H32" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M18.5 32H32" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg>

                    </header>

                    <div className="lg:w-1/2 flex flex-col place-content-center gap-y-3 lg:gap-y-6 text-white">

                        <h1 className="text-xl lg:text-2xl font-bold tracking-wider">Hola!</h1>

                        <ConsoleText words={["a Software Engineer", "a Business Analyst", "a Muslim"]}/>

                        <h1 className="text-2xl lg:text-5xl font-bold tracking-wider"></h1>

                        <p className="text-xl lg:text-xl font-extralight tracking-wider">I architect and build cutting-edge digital solutions while also uncovering key insights from data, helping businesses make informed decisions and drive innovation</p>

                        <div className='flex flex-row gap-16'>
                            <a href='https://github.com/tolulope-adams' target="_blank" about='Github'>
                                <svg viewBox="0 0 28 28" className='w-10 h-10 fill-current text-white'>
                                    <path d="M14.0001 0C6.26903 0 0 6.42658 0 14.3544C0 20.6967 4.01144 26.0773 9.57413 27.9753C10.2738 28.1082 10.5307 27.6639 10.5307 27.2848C10.5307 26.9425 10.5176 25.8117 10.5117 24.6123C6.61677 25.4806 5.79492 22.9186 5.79492 22.9186C5.15808 21.2594 4.24048 20.8184 4.24048 20.8184C2.97031 19.9274 4.33622 19.9456 4.33622 19.9456C5.7421 20.047 6.48238 21.4249 6.48238 21.4249C7.73102 23.6194 9.75749 22.9849 10.5564 22.6183C10.682 21.6904 11.0449 21.0572 11.4452 20.6988C8.33569 20.3357 5.06672 19.1049 5.06672 13.6047C5.06672 12.0376 5.61364 10.757 6.50928 9.75183C6.3639 9.39022 5.88473 7.9303 6.64488 5.95307C6.64488 5.95307 7.82051 5.56726 10.4959 7.42448C11.6126 7.10633 12.8103 6.94692 14.0001 6.94152C15.1898 6.94692 16.3884 7.10633 17.5073 7.42448C20.1795 5.56726 21.3535 5.95307 21.3535 5.95307C22.1155 7.9303 21.6361 9.39022 21.4907 9.75183C22.3883 10.757 22.9315 12.0375 22.9315 13.6047C22.9315 19.118 19.6564 20.332 16.539 20.6873C17.0411 21.1328 17.4885 22.0064 17.4885 23.3455C17.4885 25.2661 17.4723 26.812 17.4723 27.2848C17.4723 27.6668 17.7243 28.1144 18.434 27.9734C23.9936 26.0732 28 20.6945 28 14.3544C28 6.42658 21.7318 0 14.0001 0Z"/>
                                </svg>
                            </a>
                            <a href='https://www.linkedin.com/in/tolulope-adams/' target="_blank" about='Linkedin'>
                                <svg viewBox="0 0 20 20" className='w-10 h-10 fill-current text-white'>
                                    <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"/>
                                </svg>
                            </a>
                            <a href='https://www.instagram.com/__mah.moud/' target="_blank" about='Instagram'>
                                <svg viewBox="0 0 58 58" className='w-10 h-10 fill-current text-white'>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.939697 16.3769C0.939697 7.79374 7.92271 0.81073 16.5059 0.81073H41.7523C50.3355 0.81073 57.3182 7.79374 57.3182 16.3769V41.6233C57.3182 50.2065 50.3355 57.1893 41.7523 57.1893H16.5059C7.92271 57.1893 0.939697 50.2065 0.939697 41.6233V16.3769ZM17.9354 29C17.9354 35.1721 22.9569 40.1936 29.129 40.1936C35.3011 40.1936 40.3225 35.1721 40.3225 29C40.3225 22.8279 35.3011 17.8065 29.129 17.8065C22.9569 17.8065 17.9354 22.8279 17.9354 29ZM14.3074 29C14.3074 20.8272 20.9562 14.1784 29.129 14.1784C37.3018 14.1784 43.9506 20.8272 43.9506 29C43.9506 37.1728 37.3018 43.8216 29.129 43.8216C20.9562 43.8216 14.3074 37.1728 14.3074 29ZM47.1837 6.78949C49.3323 6.78949 51.0739 8.53123 51.0739 10.6798C51.0739 12.8284 49.3323 14.5701 47.1837 14.5701C45.0351 14.5701 43.2933 12.8284 43.2933 10.6798C43.2933 8.53123 45.0351 6.78949 47.1837 6.78949Z"/>
                                </svg>
                            </a>
                        </div>

                    </div>
                
                </div>

            </section>
            
            <section className="flex flex-col py-6 text-black px-16 py-10">

                <h6 className="text-xl font-normal tracking-wide ">ABOUT ME</h6>

                <h3 className="mt-4 text-4xl font-bold tracking-wide ">Who am I?</h3>

                <div className="flex flex-row justify-between mt-16">

                    <Image alt="Description" src={MyPictury} className="w-3/12 h-96 object-cover rounded-2xl" placeholder='blur' unoptimized/>

                    <p className="w-8/12 text-xl lg:text-xl font-normal tracking-wider">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.
                        <br/><br/>
                        My career is a tale of two passions: developing cutting-edge software solutions as a Software Engineer, and uncovering key insights from data to drive business intelligence as a Data Analyst.
                        <br/><br/>
                        My career is a tale of two passions: developing cutting-edge software solutions as a Software Engineer, and uncovering key insights from data to drive business intelligence as a Data Analyst.
                    </p>

                </div>

                <div className="flex flex-row justify-between my-6">

                    <hr className="w-5/12 h-px mt-10 bg-red-600 "></hr>

                    <hr className="w-5/12 h-px mt-10 bg-red-600"></hr>

                </div>

                <div className="flex flex-row justify-between">

                    {hobbies.map((hobby, index) => (
                        <Image alt="My Logo" src={hobby.icon} width={28} height={28} priority />
                    ))}

                </div>

            </section>

            <section className="winter-bg-image">

                <div className="flex flex-col px-16 bg-blue-950/50 text-white">

                    <h6 className="mt-16 text-xl font-normal tracking-wide ">EXPERTISE</h6>

                    <h3 className="mt-4 text-4xl font-bold tracking-wide">What Can I do?</h3>

                    <Carousel className="mt-8 bg-transparent"/>

                </div>

            </section>

            <section className="">

                <h6 className="mt-16 text-xl font-normal tracking-wide ">FEATURED PROJECTS</h6>

                <h3 className="mt-4 text-4xl font-bold tracking-wide">What Can I do?</h3>

                <div className="flex flex-col justify-between">

                    {hobbies.map((hobby, index) => (
                        <div className={`flex flex-col w-1/2  ${(index % 2 == 0) ? "self-start" : "self-end"}`}>

                            <Image alt="Description" src={MyPictury} className="w-full h-64 object-cover rounded-2xl" placeholder='blur' unoptimized/>

                            <h3 className="mt-4 text-4xl font-bold tracking-wide">Hablo</h3>

                            <p className="text-xl font-normal">End-to-End Testing an AI Application with Playwright and GitHub Actions</p>

                            <div className="flex flex-row">

                                {hobbies.map((hobby, index) => (
                                    <Tag key={index} name="Tolu" className="px-6 py-3 rounded-full bg-black text-white"/>
                                ))}

                            </div>
                            
                        </div>
                    ))}

                </div>

            </section>

            <section className="flex flex-col p-16 text-black ">

                <h6 className="text-xl font-normal tracking-wide ">LATEST ARTICLES</h6>

                <h3 className="mt-4 text-4xl font-bold tracking-wide ">From The Blog</h3>

                <div className="grid grid-cols-2 grid-rows-3 gap-16 mt-16">

                    <div className="row-start-1 row-end-4 flex flex-col gap-y-4">
                        <Image alt="Description" src={MyPictury} className="h-96 object-cover rounded-2xl" placeholder='blur' unoptimized/>
                        <h3 className="text-3xl font-normal">End-to-End Testing an AI Application with Playwright and GitHub Actions</h3>
                    </div>

                    <div className="row-span-1 flex flex-row gap-4 justify-between">
                        <Image alt="Description" src={MyPictury} className="w-full h-40 object-cover rounded-2xl" placeholder='blur' unoptimized/>
                        <h3 className="text-xl font-normal">End-to-End Testing an AI Application with Playwright and GitHub Actions</h3>
                    </div>

                    <div className="row-span-1 flex flex-row gap-4 justify-between">
                        <Image alt="Description" src={MyPictury} className="w-full h-40 object-cover rounded-2xl" placeholder='blur' unoptimized/>
                        <h3 className="text-xl font-normal">End-to-End Testing an AI Application with Playwright and GitHub Actions</h3>
                    </div>

                    <div className="row-span-1 flex flex-row gap-4 justify-between">
                        <Image alt="Description" src={MyPictury} className="w-full h-40 object-cover rounded-2xl" placeholder='blur' unoptimized/>
                        <h3 className="text-xl font-normal">End-to-End Testing an AI Application with Playwright and GitHub Actions</h3>
                    </div>
                    
                </div>

            </section>

            <ContactForm className="bg-black text-white p-16"/>

        </div>
    )
}