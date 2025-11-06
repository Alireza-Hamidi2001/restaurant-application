import { useSelector } from "react-redux";

function UserName() {
    const username = useSelector((state) => state.user.username);
    return (
        <div className="edu hidden text-2xl font-bold tracking-widest text-neutral-100 sm:inline-block">
            {username}
        </div>
    );
}

export default UserName;
