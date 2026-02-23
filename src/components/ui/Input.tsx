import { Search } from "lucide-react";
import type { InputProps } from "../../types";

const Input = ({
    onChange,
    placeholder,
    value,
    className,
    name,
    autoComplete,
    autoFocus,
    leftIcon,
}: InputProps) => {
    const determineLeftIcon = () => {
        if (typeof leftIcon === "object") {
            return leftIcon;
        } else {
            return <Search className='stroke-stroke' size={22} />;
        }
    };

    return (
        <div className='relative'>
            {leftIcon && (
                <span className='absolute top-2.5 left-2.5 pointer-events-none'>
                    {/* <Search className='stroke-stroke' size={22} /> */}
                    {determineLeftIcon()}
                </span>
            )}
            <input
                placeholder={placeholder}
                className={`border border-gray-500/67 rounded-[20px] px-3 py-2 ${leftIcon && "pl-10"} outline-none transition focus:bg-secondary/50 focus:ring-3 focus:ring-stroke/67 focus:border-transparent ${className ? className : ""}`}
                value={value}
                onChange={onChange}
                name={name}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
            />
        </div>
    );
};

export default Input;
