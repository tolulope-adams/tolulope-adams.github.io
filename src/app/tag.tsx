interface TagProps {
    name: string;
    className?: string;
}

export default function Tag({ name, className = '' }: TagProps) {
    return (
        <span className={`px-3 py-1 text-sm font-medium rounded-full border border-white/20 bg-white/10 text-white tracking-wide ${className}`}>
            {name}
        </span>
    );
}
