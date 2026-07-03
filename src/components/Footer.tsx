"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Copy, Check, Github, Linkedin, Twitter } from "lucide-react";

interface FormState {
    name: string;
    email: string;
    message: string;
}

const EMAIL = "tolulopeadams700@gmail.com";

export default function Footer() {
    const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [copied, setCopied] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, subject: `Portfolio contact from ${form.name}` }),
            });
            setStatus(res.ok ? "sent" : "error");
            if (res.ok) setForm({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    const copyEmail = async () => {
        await navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const inputClass =
        "w-full px-4 py-3.5 bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-xl font-jost text-base placeholder-black/30 dark:placeholder-white/40 backdrop-blur-md transition-all duration-300 focus:outline-none focus:border-aura-cyan/50 focus:bg-black/[0.07] dark:focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(56,189,248,0.12)]";

    return (
        <footer id="contact" className="mt-16 lg:mt-24 px-6 lg:px-2 pb-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
            <div className="pt-16 lg:pt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Left — heading + email copy */}
                <div className="flex flex-col justify-between gap-10">
                    <div>
                        <p className="text-xl tracking-wide text-aura-pink font-normal mb-4">CONTACT ME</p>
                        <h2 className="text-5xl lg:text-6xl font-instrument font-bold leading-tight mb-6 hover:text-aura-cyan transition-colors duration-500 cursor-default">
                            Let&apos;s Build<br />Something Great.
                        </h2>
                        <p className="font-jost opacity-60 text-base leading-relaxed max-w-sm">
                            Have a project in mind, a role to fill, or just want to say hello? Drop a message — I read every one.
                        </p>
                    </div>

                    {/* Copy email fallback */}
                    <div className="flex flex-col gap-3">
                        <p className="text-sm uppercase tracking-widest opacity-40 font-jost">Or reach me directly</p>
                        <button
                            onClick={copyEmail}
                            className="flex items-center gap-3 group w-fit"
                        >
                            <span className="font-jost text-base opacity-70 group-hover:opacity-100 group-hover:text-aura-cyan transition-all">
                                {EMAIL}
                            </span>
                            {copied ? (
                                <Check className="w-4 h-4 text-green-400 shrink-0" />
                            ) : (
                                <Copy className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-aura-cyan transition-all shrink-0" />
                            )}
                        </button>

                        {/* Socials */}
                        <div className="flex gap-5 mt-4">
                            {[
                                { Icon: Github,   href: "https://github.com/tolulope-adams",          label: "GitHub" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/tolulope-adams/", label: "LinkedIn" },
                                { Icon: Twitter,  href: "#",                                           label: "Twitter" },
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="opacity-50 hover:opacity-100 hover:text-aura-cyan transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right — contact form */}
                <div className="relative rounded-2xl border border-white/10 bg-white/85 dark:bg-black/75 backdrop-blur-xl p-6 lg:p-8">
                    {status === "sent" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center gap-4 text-center p-8 rounded-2xl border border-green-400/30 bg-green-400/5"
                        >
                            <Check className="w-12 h-12 text-green-400" />
                            <h3 className="text-2xl font-instrument font-bold">Message sent!</h3>
                            <p className="font-jost text-base opacity-60">I&apos;ll get back to you soon.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-2 text-base font-jost underline opacity-50 hover:opacity-100 transition-opacity"
                            >
                                Send another
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project or idea..."
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                required
                                className={`${inputClass} resize-none`}
                            />

                            {status === "error" && (
                                <p className="text-red-400 text-base font-jost">
                                    Something went wrong. Try emailing me directly.
                                </p>
                            )}

                            <motion.button
                                type="submit"
                                disabled={status === "sending"}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-aura-cyan text-black font-jost font-semibold text-base hover:opacity-90 transition-all disabled:opacity-50"
                            >
                                {status === "sending" ? (
                                    "Sending…"
                                ) : (
                                    <>
                                        Send Message <Send className="w-4 h-4" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    )}
                </div>
            </div>

            <p className="text-center mt-20 opacity-30 font-mono text-sm">
                © {new Date().getFullYear()} Tolulope Adams · Built with Next.js
            </p>
            </div>
        </footer>
    );
}
