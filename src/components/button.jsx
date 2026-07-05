export default function Button({
    children,
    type = "button",
    bgColor = "bg-slate-900",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-xl font-medium shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

