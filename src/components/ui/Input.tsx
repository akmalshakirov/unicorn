// import { Search } from "lucide-react";
// import type { InputProps } from "../../types";

// const Input = ({
//     onChange,
//     placeholder,
//     value,
//     className,
//     name,
//     autoComplete,
//     autoFocus,
//     leftIcon,
//     inputClassName,
//     ...rest
// }: InputProps) => {
//     const defineLeftIcon = () => {
//         if (typeof leftIcon === "object") {
//             return leftIcon;
//         } else {
//             return <Search className='stroke-stroke' size={22} />;
//         }
//     };

//     return (
//         <div className={`relative ${className ? className : ""}`}>
//             {leftIcon && (
//                 <span className='absolute top-2.5 left-2.5 pointer-events-none'>
//                     {defineLeftIcon()}
//                 </span>
//             )}
//             <input
//                 {...rest}
//                 placeholder={placeholder}
//                 className={`border border-gray-500/67 rounded-[20px] px-3 py-2 ${leftIcon && "pl-10"} outline-none transition  focus:ring-3 focus:ring-stroke/67 focus:border-transparent ${inputClassName ? inputClassName : ""}`}
//                 value={value}
//                 onChange={onChange}
//                 name={name}
//                 autoFocus={autoFocus}
//                 autoComplete={autoComplete}
//             />
//         </div>
//     );
// };

// export default Input;

// Input.tsx
import { Search } from "lucide-react";
import React from "react";
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
    inputClassName,
    label,
    id,
    ...rest
}: InputProps) => {
    const resolvedIcon = React.isValidElement(leftIcon) ? (
        leftIcon
    ) : (
        <Search className='stroke-stroke' size={22} />
    );

    return (
        <div className={`relative ${className ?? ""}`}>
            {label && (
                <label htmlFor={id ?? name} className='block mb-2'>
                    {label}
                </label>
            )}

            <div className='relative'>
                {leftIcon && (
                    <span
                        className='absolute top-1/2 -translate-y-1/2 left-2.5 pointer-events-none'
                        aria-hidden='true'>
                        {resolvedIcon}
                    </span>
                )}
                <input
                    {...rest}
                    id={id ?? name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    autoComplete={autoComplete}
                    className={`border border-gray-500/67 rounded-[20px] px-3 py-2 ${leftIcon ? "pl-10" : ""} outline-none transition focus:ring-2 focus:ring-stroke focus:border-transparent ${inputClassName ?? ""}
                    `.trim()}
                />
            </div>
        </div>
    );
};

export default Input;
