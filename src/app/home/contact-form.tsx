'use client'

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}


function ToggleButton (
    props: {
        text: string
        unSelectedClass: string,
        selectedClass: string,
        className?: string
    }){

    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };
     
    return(
        <button 
            className={`px-6 py-2 rounded-full cursor-pointer ${props.className ? props.className : ''} ${isSelected ? props.selectedClass : props.unSelectedClass}`}
            onClick={handleClick} type='button'>
            <p>{props.text}</p>
        </button>
    )   
};


export default function ContactForm(
    props: {
        className: string;
    }) {
 const interests: string[] = ['Android', 'Frontend', 'Backend', 'Full Stack', 'Data Analysis', 'UI/UX Design', 'Blockchain', 'Other']

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            setError('Failed to send message. Please try again.');
        }
        } catch (error) {
            setError('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <footer className={props.className}>

            <section className="flex flex-row gap-x-24">

                <div className='flex flex-col gap-16'>
                    <h1 className="text-4xl leading-normal md:leading-relaxed font-semibold">Let&apos;s create something <span className=''>amazing</span> together</h1>
                    <div className='hidden md:flex md:flex-col gap-16'>
                        <div className='md:flex md:flex-row md:gap-4 md:items-center'>
                            <svg viewBox="0 -960 960 960" className='w-8 h-8 fill-current md:text-white'><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <p>tolulopeadams7000@gmail.com</p>
                        </div>
                        <div className='md:flex md:flex-row md:gap-4 md:items-center'>
                            <svg viewBox="0 -960 960 960" className='w-8 h-8 fill-current md:text-white'><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"/></svg>
                            <p>+234 809 849 4860</p>
                        </div>
                        <div className='md:flex md:flex-row md:gap-4 md:items-center'>
                            <svg viewBox="0 -960 960 960" className='w-8 h-8 fill-current md:text-white'>
                                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/>
                            </svg>
                            <p>Lagos, Nigeria</p>
                        </div>
                    </div>
                </div>
                
                <form className='flex flex-col gap-6 py-6 md:p-6 md:rounded-lg md:bg-white text-white md:text-black' method='POST' onSubmit={handleSubmit}>
            
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className='md:text-black font-base txt-gradient tracking-wider'>Name<span className="text-red-400">*</span></label>
                        <div className='flex flex-row gap-2 p-3 border rounded-md border-gray-300'>
                            <svg viewBox="0 -960 960 960" className='w-6 h-6 fill-current md:text-black'><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>
                            <input 
                                required
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className='md:text-black bg-transparent'
                                placeholder='Jack Robinson'/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className='md:text-black font-base txt-gradient tracking-wider'>Email<span className="text-red-400">*</span></label>
                        <div className='flex flex-row gap-2 p-3 border rounded-md border-gray-300'>
                            <svg viewBox="0 -960 960 960" className='w-6 h-6 fill-current md:text-black'>
                                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
                            </svg>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='md:text-black bg-transparent'
                                placeholder='example@gmail.com'/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className='font-base txt-gradient tracking-wider'>I&apos;m interested in:</label>
                        <div className='w-full flex flex-row flex-wrap gap-2 whitespace-nowrap'>
                            {interests.map((interest, index) => (
                                <ToggleButton key={index} text={interest} unSelectedClass='bg-transparent text-white md:text-black border' selectedClass='bg-primary text-white border-none' />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className='md:text-black font-base txt-gradient tracking-wider'>Message<span className="text-red-400">*</span></label>
                        <textarea
                            required
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className='h-24 p-3 border rounded-md border-gray-300 md:text-black bg-transparent'
                            placeholder='Hi Tolu, How are you doing today?'/>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-min bg-primary text-white my-2 p-4 rounded">
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>

            </section>

            <p className='text-center'>© 2024 Tolulope Adams</p>

        </footer>
    )
}