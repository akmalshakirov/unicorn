import type { InputProps } from "../../types";

const Input = ({ onChange, placeholder, value, className }: InputProps) => {
    return (
        <input
            placeholder={placeholder}
            className={`border border-gray-500/67 rounded-3xl p-2 ${className}`}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
