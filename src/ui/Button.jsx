function Button({ children, disabled, type, onClick }) {
    const base =
        "upper flex cursor-pointer items-center gap-2 rounded-[2px] bg-amber-400 px-4 py-2 text-amber-950 transition-colors duration-200 hover:bg-amber-300 focus:ring-2 focus:ring-amber-300 focus:ring-offset-1 focus:outline-0 sm:text-xl";
    const styles = {
        primary: base,
        delete:
            base +
            " focus:ring-2 focus:ring-red-300 bg-red-500 text-neutral-100 hover:bg-red-700",
        round: " p-0 md:py-2.5 text-lg",
        confirm:
            "comic rounded-[4px] flex items-center gap-4 text-lg sm:text-2xl text-white py-2 px-4 sm:px-8 bg-green-600 transition-all duration-200 hover:bg-green-700 cursor-pointer",
        discard:
            "comic rounded-[4px] flex items-center gap-4 text-lg sm:text-2xl text-white py-2 px-4 sm:px-8 bg-red-500 transition-all duration-200 hover:bg-red-600 cursor-pointer",
    };

    if (onClick) {
        return (
            <button
                onClick={onClick}
                disabled={disabled}
                className={styles[type]}
            >
                {children}
            </button>
        );
    }
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    );
}

export default Button;
