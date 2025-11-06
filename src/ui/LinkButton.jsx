import { Link } from "react-router-dom";

function LinkButton({ children, to, onClick }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="flex items-center justify-self-start gap-2 border-b border-blue-400 px-4 py-2 text-2xl text-blue-400 transition-all duration-200 hover:bg-blue-400 hover:text-blue-100"
        >
            {children}
        </Link>
    );
}

export default LinkButton;
