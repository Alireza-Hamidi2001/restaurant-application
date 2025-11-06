import { BounceLoader } from "react-spinners";

function Loader() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-300/20 backdrop-blur-[3px]">
            <BounceLoader color="#000" size={70} />
        </div>
    );
}

export default Loader;
