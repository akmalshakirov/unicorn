import { Search } from "lucide-react";
import React, { useEffect, useRef } from "react";
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
    focusable = false,
    ...rest
}: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const resolvedIcon = React.isValidElement(leftIcon) ? (
        leftIcon
    ) : (
        <Search className='stroke-stroke' size={22} />
    );

    useEffect(() => {
        if (focusable) {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
                    const target = e.target as HTMLElement | null;

                    const isTypingField =
                        target?.tagName === "INPUT" ||
                        target?.tagName === "TEXTAREA" ||
                        target?.isContentEditable;

                    if (!isTypingField) {
                        e.preventDefault();
                        inputRef.current?.focus();
                    }
                }
            };

            document.addEventListener("keydown", handleKeyDown);
            return () => document.removeEventListener("keydown", handleKeyDown);
        }
    }, []);

    const showPlaceholder = !value && placeholder;

    return (
        <div className={`${className ?? ""}`}>
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
                    ref={inputRef}
                    {...rest}
                    id={id ?? name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoFocus={autoFocus}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    className={`border border-gray-500/67 rounded-[20px] px-3 py-2 outline-none transition focus:ring-2 focus:ring-stroke focus:border-transparent ${
                        leftIcon ? "pl-10" : ""
                    } ${inputClassName ?? ""}`.trim()}
                />

                {focusable && showPlaceholder && (
                    <span className='absolute top-1/2 -translate-y-1/2 right-5 rounded-md bg-stroke/30 px-2 py-0.5 font-bold text-white/67 pointer-events-none'>
                        /
                    </span>
                )}
            </div>
        </div>
    );
};

export default Input;
