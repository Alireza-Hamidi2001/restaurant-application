import Button from "../../ui/Button";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { decItem, incItem } from "./CartSlice";

function UpdateQuantity({ id, quantity }) {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center gap-4">
            <Button type="round" onClick={() => dispatch(incItem(id))}>
                <FaPlus className="cursor-pointer text-2xl text-amber-500 transition-all duration-200 hover:scale-[1.3] hover:text-amber-400" />
            </Button>
            <span className="font-bold text-amber-700">{quantity}</span>
            <Button type="round" onClick={() => dispatch(decItem(id))}>
                <FaMinus className="cursor-pointer text-2xl text-amber-500 transition-all duration-200 hover:scale-[1.3] hover:text-amber-400" />
            </Button>
        </div>
    );
}

export default UpdateQuantity;
