interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function Sections({ children, className, id }: SectionProps) {
    return (
        <section className={className} id={id}>
            {children}
        </section>
    )
}