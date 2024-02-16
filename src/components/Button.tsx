import { twMerge } from "tailwind-merge";

const Button = (props: { onClick: any; children: React.ReactNode, className?: string }) => {
    return (
        <button onClick={props.onClick} className={twMerge("bg-blue-700 hover:bg-blue-500 text-white drop-shadow-sm font-medium py-2 px-4 rounded-md flex flex-row gap-1 items-center", props.className)}>
            {props.children}
        </button>
    )
}

export default Button;