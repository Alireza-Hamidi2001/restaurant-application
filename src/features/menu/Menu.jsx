/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
    const menu = useLoaderData();
    return (
        <ul className="px-4 grid grid-cols-1 divide-y divide-stone-200">
            {menu.map((item) => (
                <MenuItem item={item} key={item.id} />
            ))}
        </ul>
    );
}

export async function loader() {
    const menu = await getMenu();
    return menu;
}

export default Menu;
