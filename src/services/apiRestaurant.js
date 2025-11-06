const API_URL2 = "https://react-fast-pizza-api.onrender.com/api";
const API_URL = "https://api-fast-rezat-app.vercel.app/api";

export async function getMenu() {
    const res = await fetch(`${API_URL}/menu`);

    if (!res.ok) throw Error("Failed getting menu");

    const { data } = await res.json();
    return data;
}

export async function getOrder(id) {
    const res = await fetch(`${API_URL2}/order/${id}`);
    if (!res.ok) throw Error(`Couldn't find order #${id}`);

    const { data } = await res.json();
    return data;
}

export async function createOrder(newOrder) {
    try {
        const res = await fetch(`${API_URL2}/order`, {
            method: "POST",
            body: JSON.stringify(newOrder),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) throw Error();
        const { data } = await res.json();
        return data;
    } catch {
        throw Error("Failed creating your order");
    }
}

export async function updateOrder(id, updateObj) {
    try {
        const res = await fetch(`${API_URL}/order/${id}`, {
            method: "PATCH",
            body: JSON.stringify(updateObj),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) throw Error();
        // We don't need the data, so we don't return anything
    } catch (err) {
        throw Error("Failed updating your order");
    }
}
