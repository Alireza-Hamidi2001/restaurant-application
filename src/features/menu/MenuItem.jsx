import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { IoMdAddCircleOutline } from "react-icons/io";
import { addItem, getCurrentQuantityByID } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";

function MenuItem({ item }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = item;
    const dispatch = useDispatch();

    function handleAddToCart() {
        const newItem = {
            id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1,
        };
        dispatch(addItem(newItem));
    }
    const currentQuantity = useSelector(getCurrentQuantityByID(id));
    const isInCart = currentQuantity > 0;

    return (
        <li className="flex gap-4 py-2">
            <img
                src={imageUrl}
                alt={name}
                className={`h-32 ${soldOut ? "opacity-70 grayscale" : ""}`}
            />
            <div className="flex grow flex-col py-4">
                <p className="font-medium">{name}</p>
                <p className="text-sm text-stone-500 capitalize italic">
                    {ingredients.join(", ")}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? (
                        <p className="text-sm">{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-sm font-medium text-stone-500 uppercase">
                            Sold out
                        </p>
                    )}

                    {isInCart && <DeleteItem id={id} />}

                    {!soldOut && !isInCart && (
                        <Button type="primary" onClick={handleAddToCart}>
                            <IoMdAddCircleOutline />
                            Add to cart
                        </Button>
                    )}
                </div>
            </div>
        </li>
    );
}

export default MenuItem;
