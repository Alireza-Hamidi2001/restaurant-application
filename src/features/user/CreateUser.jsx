import { useState } from "react";
import { PiHandWaving } from "react-icons/pi";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function CreateUser() {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(updateName(username));
        navigate("menu");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center"
        >
            <p className="mb-4 flex items-center gap-4 text-lg text-stone-500 md:text-2xl">
                <PiHandWaving className="text-[3rem]" /> Welcome! Please start
                by telling us your name
            </p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-8 rounded-xs border border-stone-300 bg-stone-200 px-4 py-2 text-lg placeholder:text-stone-400 focus:border-stone-400 focus:outline-0"
            />

            {username !== "" && (
                <div>
                    <Button type="primary">Start ordering</Button>
                </div>
            )}
        </form>
    );
}

export default CreateUser;
