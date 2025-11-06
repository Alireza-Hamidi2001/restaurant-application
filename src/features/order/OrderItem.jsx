import { formatCurrency } from "../../utils/helpers";
import { GoDotFill } from "react-icons/go";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
    const { quantity, name, totalPrice } = item;

    return (
        <li className="comic py-3">
            <div className="flex items-center justify-between gap-4 text-sm">
                <p className="flex items-center gap-2 sm:text-[1.6rem]">
                    <GoDotFill className="text-red-400" />
                    <span className="font-bold">{quantity}&times;</span> {name}
                </p>
                <p className="font-bold sm:text-[1.4rem]">{formatCurrency(totalPrice)}</p>
            </div>
        </li>
    );
}

export default OrderItem;
