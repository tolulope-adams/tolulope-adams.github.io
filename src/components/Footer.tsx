"use client";

import { useState } from "react";

interface FormData {
    name: string;
    email: string;
}

export default function Footer() {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setSuccess(true);
                setFormData({ name: '', email: '' });
            } else {
                setError('Failed to send message. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="mt-16 flex flex-col px-6 pt-16 lg:px-16 lg:pt-32 pb-16 border-t border-aura-darker/50">
            <div className="flex flex-col gap-y-4 text-center items-center">
                <h2 className="text-xl font-normal tracking-wide text-aura-pink">CONTACT ME</h2>
                <h1 className="text-5xl lg:text-7xl font-instrument font-bold tracking-wide hover:text-aura-cyan transition-colors duration-500 cursor-default">Let&apos;s Build.</h1>
            </div>

            <div className="flex flex-col items-center mt-12 w-full">
                <form className="flex flex-col gap-6 text-black dark:text-white w-full lg:w-1/3" method="POST" onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center gap-6">
                        <input
                            className="block w-full px-4 py-4 bg-transparent border-b-2 border-slate-700 placeholder-slate-500 hover:border-aura-cyan focus:outline-none focus:border-aura-cyan transition-colors text-center text-lg rounded-none"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Drop your email..."
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-aura-cyan/10 border border-aura-cyan text-aura-cyan hover:bg-aura-cyan hover:text-black font-bold mt-4 px-8 py-4 rounded-full transition-all duration-300"
                        >
                            {isSubmitting ? "Sending..." : "Ping Me"}
                        </button>
                        {success && <p className="text-green-400">Sent successfully!</p>}
                        {error && <p className="text-red-400">{error}</p>}
                    </div>
                </form>
            </div>
            <p className="text-center mt-24 opacity-50 font-mono text-sm">© 2024 Tolulope Adams</p>
        </footer>
    );
}
