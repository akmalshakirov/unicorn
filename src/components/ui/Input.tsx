import type { InputProps } from "../../types";

const Input = ({
    onChange,
    placeholder,
    value,
    className,
    name,
    autoComplete,
    autoFocus,
}: InputProps) => {
    return (
        <input
            placeholder={placeholder}
            className={`border border-gray-500/67 rounded-[20px] px-3 py-2 outline-none transition focus:bg-secondary/50 focus:ring-3 focus:ring-stroke/67 focus:border-transparent ${className ? className : ""}`}
            value={value}
            onChange={onChange}
            name={name}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
        />
    );
};

export default Input;
