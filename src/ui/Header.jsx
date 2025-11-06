import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
import Logo from "./Logo";

function Header() {
    return (
        <header className="flex h-[9vh] items-center justify-around border-b-2 border-stone-300 bg-neutral-950 px-4 py-4 text-emerald-50 uppercase sm:h-auto sm:justify-between sm:px-6 md:px-8">
            <Link to="/">
                <Logo />
            </Link>
            <SearchOrder />
            <UserName />
        </header>
    );
}

export default Header;
