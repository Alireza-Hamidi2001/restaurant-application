import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    function submitHandler(e) {
        e.preventDefault();
        if (!searchValue) return;
        navigate(`order/${searchValue}`);
        setSearchValue("");
    }
    return (
        <form onSubmit={submitHandler} action="#">
            <input
                placeholder="Search order #"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-50 rounded-xs border-2 border-neutral-700 bg-neutral-800 px-4 py-2 transition-all duration-200 focus:border-neutral-600 focus:outline-0 sm:w-64 sm:focus:w-72"
            />
        </form>
    );
}

export default SearchOrder;
