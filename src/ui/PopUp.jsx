import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../features/cart/CartSlice";
import { IoIosWarning } from "react-icons/io";

function PopUp({ setIsShowPopUp, id }) {
    const dispatch = useDispatch();
    function handleConfirm() {
        setIsShowPopUp(false);
        dispatch(deleteItem(id));
    }
    function handleDiscard() {
        setIsShowPopUp(false);
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center gap-3 bg-black/70 backdrop-blur-lg">
            <IoIosWarning className="text-6xl text-amber-400" />
            <p className=" text-amber-100 sm:text-3xl">
                Are you sure to Delete this item
            </p>
            <Button onClick={handleConfirm} type="confirm">
                Confirm
            </Button>
            <Button onClick={handleDiscard} type="discard">
                Discard
            </Button>
        </div>
    );
}

export default PopUp;
