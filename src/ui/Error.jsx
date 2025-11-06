import { useNavigate, useRouteError } from "react-router-dom";
import { MdError } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import LinkButton from "./LinkButton";

function NotFound() {
    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden pt-24 text-2xl text-neutral-500 sm:gap-6 sm:text-4xl">
            <MdError className="text-[6rem] text-red-500" />
            <h1>Something went wrong</h1>
            <p>{error.data || error.message}</p>
            <LinkButton onClick={() => navigate(-1)}>
                <FaArrowLeftLong /> Go back
            </LinkButton>
        </div>
    );
}

export default NotFound;
