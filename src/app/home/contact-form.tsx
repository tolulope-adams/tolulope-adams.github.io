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
    }){

    const [isSelected, setIsSelected] = useState(false);

    return(
        <div
            onClick={ () => {
                setIsSelected(!isSelected);
            }} 
            className={`display:block px-6 py-2 border rounded-full ${isSelected ? 'bg-primary text-white' : 'text-black'}`}>
            <p>{props.text}</p>
        </div>
    )
};



export default function ContactForm(){
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
        <footer className="bg-black text-white py-6">
            <section className="w-full md:w-4/5 mx-auto mb-24 p-4 md:grid md:grid-flow-col md:grid-rows-3 md:grid-cols-6 md:gap-4 md:text-lg">
                <div className='md:row-span-1 md:col-span-3'>
                    <h1 className="md:w-4/6 text-3xl md:text-4xl md:leading-relaxed font-semibold">Let's create <br></br>something <span className=''>amazing</span><br></br> together</h1>
                </div>
                <div className='md:row-span-2 md:col-span-3 hidden md:flex md:flex-col md:place-content-end gap-16'>
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
                    <div className='md:flex md:flex-row md:gap-16'>
                        <a href='https://github.com/tolulope-adams' target="_blank" about='Github'>
                            <svg viewBox="0 0 28 28" className='w-10 h-10 fill-current md:text-white'>
                                <path d="M14.0001 0C6.26903 0 0 6.42658 0 14.3544C0 20.6967 4.01144 26.0773 9.57413 27.9753C10.2738 28.1082 10.5307 27.6639 10.5307 27.2848C10.5307 26.9425 10.5176 25.8117 10.5117 24.6123C6.61677 25.4806 5.79492 22.9186 5.79492 22.9186C5.15808 21.2594 4.24048 20.8184 4.24048 20.8184C2.97031 19.9274 4.33622 19.9456 4.33622 19.9456C5.7421 20.047 6.48238 21.4249 6.48238 21.4249C7.73102 23.6194 9.75749 22.9849 10.5564 22.6183C10.682 21.6904 11.0449 21.0572 11.4452 20.6988C8.33569 20.3357 5.06672 19.1049 5.06672 13.6047C5.06672 12.0376 5.61364 10.757 6.50928 9.75183C6.3639 9.39022 5.88473 7.9303 6.64488 5.95307C6.64488 5.95307 7.82051 5.56726 10.4959 7.42448C11.6126 7.10633 12.8103 6.94692 14.0001 6.94152C15.1898 6.94692 16.3884 7.10633 17.5073 7.42448C20.1795 5.56726 21.3535 5.95307 21.3535 5.95307C22.1155 7.9303 21.6361 9.39022 21.4907 9.75183C22.3883 10.757 22.9315 12.0375 22.9315 13.6047C22.9315 19.118 19.6564 20.332 16.539 20.6873C17.0411 21.1328 17.4885 22.0064 17.4885 23.3455C17.4885 25.2661 17.4723 26.812 17.4723 27.2848C17.4723 27.6668 17.7243 28.1144 18.434 27.9734C23.9936 26.0732 28 20.6945 28 14.3544C28 6.42658 21.7318 0 14.0001 0Z"/>
                            </svg>
                        </a>
                        <a href='https://www.linkedin.com/in/tolulope-adams/' target="_blank" about='Linkedin'>
                            <svg viewBox="0 0 20 20" className='w-10 h-10 fill-current md:text-white'>
                                <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"/>
                            </svg>
                        </a>
                        <a href='https://www.instagram.com/__mah.moud/' target="_blank" about='Instagram'>
                            <svg viewBox="0 0 58 58" className='w-10 h-10 fill-current md:text-white'>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.939697 16.3769C0.939697 7.79374 7.92271 0.81073 16.5059 0.81073H41.7523C50.3355 0.81073 57.3182 7.79374 57.3182 16.3769V41.6233C57.3182 50.2065 50.3355 57.1893 41.7523 57.1893H16.5059C7.92271 57.1893 0.939697 50.2065 0.939697 41.6233V16.3769ZM17.9354 29C17.9354 35.1721 22.9569 40.1936 29.129 40.1936C35.3011 40.1936 40.3225 35.1721 40.3225 29C40.3225 22.8279 35.3011 17.8065 29.129 17.8065C22.9569 17.8065 17.9354 22.8279 17.9354 29ZM14.3074 29C14.3074 20.8272 20.9562 14.1784 29.129 14.1784C37.3018 14.1784 43.9506 20.8272 43.9506 29C43.9506 37.1728 37.3018 43.8216 29.129 43.8216C20.9562 43.8216 14.3074 37.1728 14.3074 29ZM47.1837 6.78949C49.3323 6.78949 51.0739 8.53123 51.0739 10.6798C51.0739 12.8284 49.3323 14.5701 47.1837 14.5701C45.0351 14.5701 43.2933 12.8284 43.2933 10.6798C43.2933 8.53123 45.0351 6.78949 47.1837 6.78949Z"/>
                            </svg>
                        </a>
                  </div>
                </div>
                <form className='md:row-span-3 md:col-span-3 flex flex-col gap-6 md:p-6 md:rounded-lg md:bg-white' method='POST' onSubmit={handleSubmit}>
                    <label className='md:text-black font-base txt-gradient tracking-wider'>I'm interested in:</label>
                    <div className='w-full flex flex-row flex-wrap gap-4'>
                        {interests.map((interest, index) => (
                            <ToggleButton key={index} text={interest}/>
                        ))}
                    </div>
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
            <p className='text-center'>Copyright © 2024 Tolulope Adams • Software Engineer</p>
        </footer>
    )
}

// shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500