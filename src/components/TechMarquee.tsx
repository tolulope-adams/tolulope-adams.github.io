"use client";

const TECHS = [
    "Kotlin", "Java", "Spring Boot", "Android", "Jetpack Compose",
    "Firebase", "Next.js", "TypeScript", "React", "Python",
    "Scikit-Learn", "PostgreSQL", "Docker", "REST API", "WebRTC",
    "Retrofit", "Node.js", "Hilt", "MVVM", "Coroutines",
];

export default function TechMarquee() {
    const doubled = [...TECHS, ...TECHS];

    return (
        <div className="my-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-2 mb-3 flex items-center gap-3">
                <span className="text-xs font-jost font-semibold tracking-[0.3em] uppercase opacity-50 shrink-0">
                    Technologies
                </span>
                <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="overflow-hidden py-4 border-y border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-500">
                <div className="marquee flex gap-10 w-max">
                    {doubled.map((tech, i) => (
                        <span
                            key={i}
                            className="text-sm font-jost font-semibold tracking-[0.25em] uppercase whitespace-nowrap text-aura-cyan"
                        >
                            {tech}
                            {i < doubled.length - 1 && (
                                <span className="text-aura-purple/60 ml-10">◆</span>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
