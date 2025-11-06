import { useSelector } from "react-redux";
import LinkButton from "../../ui/LinkButton";
import { PiHandWaving } from "react-icons/pi";

function UserRedirect() {
    const username = useSelector((state) => state.user.username);
    return (
        <>
            <p className="mb-4 flex items-center gap-4 text-lg text-stone-500 md:text-2xl">
                <PiHandWaving className="text-[3rem]" /> Back to the menu,{" "}
                {username}
            </p>
            <LinkButton to="menu">Menu &rarr;</LinkButton>
        </>
    );
}

export default UserRedirect;
