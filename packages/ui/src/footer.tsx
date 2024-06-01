
interface FooterProps {
    className?: string;
}

export const  Footer = ({className}: FooterProps) => {
    return (
        <footer className={className} >
                This is a footer
        </footer>
    );
}