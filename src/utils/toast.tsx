import toast from "react-hot-toast";

type Props = { variant: (string & "success") | "error"; content: string };

const Toast = ({ variant, content }: Props) => {
    switch (variant) {
        case "success":
            return toast.success(content, {
                style: {
                    backgroundColor: "#03912780",
                    color: "white",
                    backdropFilter: "blur(4px)",
                },
            });
            break;
        case "error":
            return toast.error(content, {
                style: {
                    backgroundColor: "#7d061a80",
                    color: "white",
                    backdropFilter: "blur(4px)",
                },
            });
            break;
    }
};

export default Toast;
