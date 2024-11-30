
import Image from 'next/image';

import ToggleButton from "../toggle-button";
import Tag from "../tag";

import MyPicture from '../../../public/images/landing.jpg';

export default function ProjectPage() {

    const categories: string[] = ['Mobile', 'Web', 'Data Analysis']

    const projects = [
        {
            image: require("../../../public/images/winter.jpg"),
            name: 'TMDB',
            description: "A mobile app that provides information about celebrities, movies and TV shows as well as their cast and crew.",
            tags: ['Java', 'Kotlin', 'Jetpack Compose', 'Firebase']
        },
        {
            image: require("../../../public/images/winter.jpg"),
            name: 'TMDB',
            description: "A mobile app that provides information about celebrities, movies and TV shows as well as their cast and crew.",
            tags: ['Java', 'Kotlin', 'Jetpack Compose', 'Firebase']
        },
        {
            image: require("../../../public/images/winter.jpg"),
            name: 'TMDB',
            description: "A mobile app that provides information about celebrities, movies and TV shows as well as their cast and crew.",
            tags: ['Java', 'Kotlin', 'Jetpack Compose', 'Firebase']
        }
    ]

    return(
        <div className="h-screen relative bg-black text-white px-16">

            <Image alt="Description" src={MyPicture} className="absolute inset-0 object-contain" placeholder='blur' unoptimized/>

            <div className="absolute inset-0 z-10">

                <a href='#' about='Logo'>
                    <svg viewBox="0 0 48 48" className='w-12 lg:h-12 fill-current text-white'>
                        <path d="M0 47.7268C4.50012 47.7268 9.64055 41.7 14.0871 34.264C14.8109 17.2003 20.9469 -8.52111 25.1882 2.7768C27.8603 9.89454 23.0904 25.3918 16.141 36.2503C16.244 39.5766 16.5844 42.2043 16.9574 43.5078C18.235 47.9723 19.9825 43.0177 28.4559 27.0399C28.3382 33.6035 30.4845 44.3579 33.7045 45.2773C34.0265 45.3693 34.8653 45.7419 36.1506 45.2C33.3389 43.9227 33.1381 37.1457 37.7573 30.2C44.2748 20.4 47.3975 31.8 45.1883 37C45.3891 39 44.9874 42 48 47.6C46.5941 47.4 44.3849 43 43.5816 40.6C40.1674 47.4 36.7531 47.7268 33.7045 47.7268C28.6204 47.7268 26.0468 40.7203 26.7137 35.2444C24.9484 39.5201 20.6961 49.801 16.4055 47.7268C14.9133 47.0054 14.195 43.7665 14.0462 39.2886C9.58548 45.2732 4.5073 49.0659 0 47.7268Z" fill="white"/>
                    </svg>
                </a>

                <h3 className=''>My Projects</h3>

                <div className='w-full flex flex-row flex-wrap gap-2 whitespace-nowrap'>
                    {categories.map((category, index) => (
                        <ToggleButton key={index} text={category} className="px-6 py-1 rounded-full cursor-pointer" unSelectedClass='bg-transparent text-white border' selectedClass='bg-primary text-white border-none' />
                    ))}
                </div>

                <div className="flex flex-row relative">

                    {projects.map((project, index) => (
                        
                        <div key={index} className={`w-full flex flex-row gap-x-6 mt-4 ${(index % 2 == 0) ? "justify-start" : "justify-end"}`}>

                            {/* <Image alt="Description" src={project.image} className="w-1/3 h-64 object-cover rounded-2xl" placeholder='blur' unoptimized/>

                            <div className={`w-1/2 h-fit flex flex-col gap-y-6 ${(index % 2 == 0) ? "order-last justify-start" : "order-first justify-end"}`}>

                                <h3 className="text-4xl font-bold tracking-wide ">{project.name}</h3>

                                <p className="text-xl font-normal ">{project.description}</p>

                                <div className="flex flex-row gap-x-3">

                                    {project.tags.map((tag, index) => (
                                        <Tag key={index} name={tag} className="px-6 py-1 rounded-full bg-white text-black"/>
                                    ))}

                                </div>

                            </div> */}

                        </div>
                    ))}

                </div>

            </div>
            
        </div>
    )
}