import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { SiIfood } from "react-icons/si";
import UserRedirect from "../features/user/UserRedirect";

function Home() {
    const username = useSelector((state) => state.user.username);
    return (
        <div className="justify-centermt-10 mt-56 flex flex-col items-center gap-4 px-4 text-center sm:my-16 sm:mt-20">
            <SiIfood className="text-[5rem]" />
            <h1 className="mb-8 text-[2rem] text-emerald-950 md:text-[3.5rem]">
                Taste the World on One Plate
                <br />
                <span className="text-[1.2rem] sm:text-4xl text-emerald-500">
                    Where Every Dish Is a Masterpiece
                </span>
            </h1>
            {!username ? <CreateUser /> : <UserRedirect />}
        </div>
    );
}

export default Home;
