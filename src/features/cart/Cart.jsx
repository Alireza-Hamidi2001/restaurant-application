import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./CartSlice";
import CartEmpty from "./CartEmpty";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import PopUp from "../../ui/PopUp";
import { useState } from "react";

function Cart() {
    const username = useSelector((state) => state.user.username);
    const cart = useSelector((state) => state.cart.cart);
    // const [showPopUp, setIsShowPopUp] = useState(false);

    const dispatch = useDispatch();

    function handleClearCart() {
        dispatch(clearCart());
    }

    return (
        <div className="px-8 py-12">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>
            <ul className="mt-3 h-96 divide-y divide-stone-200 overflow-auto px-2">
                {cart.length !== 0 && (
                    <h2 className="mt-7 flex items-center gap-4 pb-5 text-2xl font-semibold">
                        <FaCartShopping className="text-3xl" />
                        Your cart, {username}
                    </h2>
                )}
                {cart.length === 0 ? (
                    <CartEmpty />
                ) : (
                    cart.map((item) => (
                        <CartItem
                            // setIsShowPopUp={setIsShowPopUp}
                            item={item}
                            key={item.id}
                        />
                    ))
                )}
            </ul>

            <div className="mt-6 flex items-center gap-4">
                {cart.length !== 0 && (
                    <>
                        <Link
                            to="/order/new"
                            className="group sm:py-4transition-colors hover:bg-green-500hover:text-green-100 flex max-w-fit cursor-pointer items-center gap-2 rounded-xs bg-green-200 px-4 py-2 text-green-900 duration-200 hover:bg-green-600 hover:text-green-100 focus:ring-2 focus:ring-green-300 focus:ring-offset-1 focus:outline-0 sm:px-6 sm:py-2 sm:text-xl"
                        >
                            <IoShieldCheckmark className="text-xl text-green-900 group-hover:text-green-100 sm:text-2xl" />
                            Order
                        </Link>
                        <button
                            onClick={handleClearCart}
                            className="flex max-w-fit cursor-pointer items-center gap-2 rounded-xs bg-red-200 px-4 py-2 text-stone-700 transition-colors duration-200 hover:bg-red-500 hover:text-red-50 focus:ring-2 focus:ring-stone-300 focus:ring-offset-1 focus:outline-0 sm:px-6 sm:py-2 sm:text-xl"
                        >
                            <FaTrash className="text-xl sm:text-2xl" />
                            Clear cart
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;

// const fakeCart = [
//     {
//         pizzaId: 12,
//         name: "Mediterranean",
//         quantity: 2,
//         unitPrice: 16,
//         totalPrice: 32,
//     },
//     {
//         pizzaId: 6,
//         name: "Vegetale",
//         quantity: 1,
//         unitPrice: 13,
//         totalPrice: 13,
//     },
//     {
//         pizzaId: 11,
//         name: "Spinach and Mushroom",
//         quantity: 1,
//         unitPrice: 15,
//         totalPrice: 15,
//     },
// ];
