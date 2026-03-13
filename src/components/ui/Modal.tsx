import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { ModalProps } from "../../types";

const Modal = ({
    children,
    onClose,
    open,
    title = "Modal",
    clickOutsideClose = false,
    footerChildren,
}: ModalProps) => {
    useEffect(() => {
        if (!open) return;

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "15px";

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [open, onClose]);

    return createPortal(
        <AnimatePresence mode='wait'>
            {open && (
                <motion.div
                    key='overlay'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className='fixed flex items-center justify-center inset-0 bg-black/67 backdrop-blur-xs z-50'
                    onClick={() => clickOutsideClose && onClose()}>
                    <motion.div
                        key='modal'
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className='bg-secondary border-b border-b-gray-600 shadow-[0_2px_67px_2px] shadow-gray-100/10 rounded-[20px] max-w-xl w-full'
                        onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-lg font-semibold mb-4 border-b border-b-gray-500 pt-3 px-7 pb-2.5 text-center uppercase'>
                            {title}
                        </h2>
                        <div className='p-5 px-7'>{children}</div>
                        {footerChildren && (
                            <div className='mt-6 flex justify-end gap-3'>
                                {footerChildren}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
};

export default Modal;
