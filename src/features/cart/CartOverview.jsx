import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { ImPriceTag } from "react-icons/im";
import { useSelector } from "react-redux";
import Footer from "../../ui/Footer";
import { getTotalPrice, getTotalQuantity } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";
import { GrOverview } from "react-icons/gr";

function CartOverview() {
    const cart = useSelector((state) => state.cart.cart);
    const username = useSelector((state) => state.user.username);
    const totalCartPrice = useSelector(getTotalPrice);
    const totalCartQuantity = useSelector(getTotalQuantity);

    return (
        <div className="grid grid-cols-[1fr_1fr] items-center justify-center gap-3 bg-neutral-800 px-6 py-4 text-emerald-50 sm:p-3 md:p-4">
            <p
                className={`flex items-center space-x-4 text-xs tracking-widest sm:text-xl ${cart.length === 0 && "invisible"}`}
            >
                <GrOverview />
                <span className="flex items-center gap-2">
                    Overview : {totalCartQuantity} items
                </span>
                <span className="flex items-center gap-4">
                    {formatCurrency(totalCartPrice)}
                </span>
            </p>
            {username && (
                <Link
                    to="/cart"
                    className="flex items-center gap-2 justify-self-end border border-neutral-500 px-4 py-2 text-center text-xs text-neutral-300 sm:text-xl md:text-2xl"
                >
                    <FaCartShopping />
                    Open cart &rarr;
                </Link>
            )}

            <Footer />
        </div>
    );
}

export default CartOverview;
