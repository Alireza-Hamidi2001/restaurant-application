import { formatCurrency } from "../../utils/helpers";
import { FaChevronRight } from "react-icons/fa";
import DeleteItem from "./DeleteItem";
import UpdateQuantity from "./UpdateQuantity";
import { useState } from "react";
import PopUp from "../../ui/PopUp";

function CartItem({ item }) {
    const [showPopUp, setIsShowPopUp] = useState(false);
    const { id, name, quantity, totalPrice } = item;

    return (
        <li className="py-3 text-xl sm:flex sm:items-center sm:justify-between">
            {showPopUp && <PopUp id={id} setIsShowPopUp={setIsShowPopUp} />}
            <p className="mb-1 flex items-center gap-1 text-neutral-700 sm:mb-0 sm:gap-4">
                <FaChevronRight className="text-sm text-red-500 sm:text-base" />
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-lg font-bold tracking-widest sm:text-lg sm:tracking-widest">
                    {formatCurrency(totalPrice)}
                </p>
                <UpdateQuantity quantity={quantity} id={id} />
                <DeleteItem setIsShowPopUp={setIsShowPopUp} id={id} />
            </div>
        </li>
    );
}

export default CartItem;
