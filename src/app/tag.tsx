interface TagProps {
    name: string;
    className?: string;
}

export default function Tag({ name, className = '' }: TagProps) {
    return (
        <span className={`px-3 py-1 font-medium rounded-full tracking-wide ${className}`}>
            {name}
        </span>
    );
}
