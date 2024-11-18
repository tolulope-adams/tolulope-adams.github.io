'use client'

import { useState } from 'react';

import ToggleButton from "../toggle-button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm(
    props: {
        className: string;
    }
){
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
        <form className={props.className} method='POST' onSubmit={handleSubmit}>
            
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
                <label className='font-base txt-gradient tracking-wider'>Subject<span className="text-red-600">*</span></label>
                <div className='w-full flex flex-row flex-wrap gap-2 whitespace-nowrap'>
                    {interests.map((interest, index) => (
                        <ToggleButton key={index} text={interest} unSelectedClass='px-4 py-2 bg-transparent text-white md:text-black border rounded' selectedClass='px-4 py-2 bg-primary text-white border-none rounded'/>
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
    )
};