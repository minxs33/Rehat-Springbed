
interface SocialButtonProps {
    onClick: (e: React.MouseEvent) => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    icon: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}

const SocialButton = ({ onClick, onMouseEnter, onMouseLeave, icon, children, className } : SocialButtonProps) => (
    <button onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`flex items-center gap-2 font-semibold drop-shadow-lg ${className}`}>
        {icon}
        {children}
    </button>
);

export default SocialButton