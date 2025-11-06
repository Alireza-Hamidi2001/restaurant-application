/* eslint-disable react-refresh/only-export-components */
// Test ID: IIDSAT

import { useLoaderData, useParams } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { IoHappyOutline } from "react-icons/io5";

import {
    calcMinutesLeft,
    formatCurrency,
    formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

const smile = <IoHappyOutline />;

function Order() {
    const order = useLoaderData();
    console.log(order);
    const {
        id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery,
        cart,
    } = order;
    const deliveryIn = calcMinutesLeft(estimatedDelivery);

    return (
        <div className="space-y-8 px-8 py-6 sm:py-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl font-semibold sm:text-4xl">
                    Order #{id} status{" "}
                </h2>

                <div className="space-x-2">
                    {priority && (
                        <span className="rounded-2xl bg-red-500 px-3 py-1 text-sm font-semibold tracking-wider text-red-100 uppercase sm:text-lg">
                            Priority
                        </span>
                    )}
                    <span className="rounded-2xl bg-green-500 px-3 py-1 text-sm font-semibold tracking-wider text-green-100 uppercase sm:text-lg">
                        {status} order
                    </span>
                </div>
            </div>

            <div className="comic flex flex-wrap items-center justify-between gap-4 bg-stone-200 px-4 py-2">
                <p className="text-[1rem] sm:text-[1.5rem]">
                    {deliveryIn >= 0
                        ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left`
                        : "Order should have arrived"}
                </p>
                <p className="text-[0.8rem] text-stone-400">
                    (Estimated delivery: {formatDate(estimatedDelivery)})
                </p>
            </div>

            <ul className="divide-y divide-stone-200 border-t border-b border-stone-200">
                {cart.map((item) => (
                    <OrderItem item={item} key={item.id} />
                ))}
            </ul>

            <div className="comic space-y-2 bg-stone-200 px-6 py-4">
                <p className="text-sm font-medium text-stone-600 sm:text-[1.2rem]">
                    Price pizza: {formatCurrency(orderPrice)}
                </p>
                {priority && (
                    <p className="text-sm font-medium text-stone-600 sm:text-[1.2rem]">
                        Price priority: {formatCurrency(priorityPrice)}
                    </p>
                )}
                <p className="text-sm font-bold text-stone-600 sm:text-[1.2rem]">
                    To pay on delivery:{" "}
                    {formatCurrency(orderPrice + priorityPrice)}
                </p>
            </div>
        </div>
    );
}
export async function loader({ params }) {
    const order = await getOrder(params.orderId);
    return order;
}

export default Order;
