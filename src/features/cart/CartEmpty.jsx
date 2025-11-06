import { IoIosWarning } from "react-icons/io";

function CartEmpty() {
    return (
        <p className="flex flex-col justify-center gap-4 pt-8 text-2xl text-amber-700">
            <IoIosWarning className="text-7xl text-amber-400" />
            There is nothing in cart yet !
            <br /> Please go back to the menu and select at least one item .{" "}
            <br />
            Thanks.
        </p>
    );
}

export default CartEmpty;
