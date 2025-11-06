import { LuCopyright } from "react-icons/lu";

function Footer() {
    return (
        <footer className="col-start-1 col-end-3 mb-4 flex basis-100 items-center justify-center text-center text-xs text-neutral-300 sm:gap-2 sm:text-2xl">
            <LuCopyright className="text-[1rem] sm:text-2xl" /> copyright 2025,
            <span className="caveat mx-2 inline-block text-xl sm:text-4xl">
                Alireza Hamidi
            </span>{" "}
            . All rights reserved{" "}
        </footer>
    );
}

export default Footer;
