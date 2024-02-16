const Button = (props: { onClick: any; children: React.ReactNode }) => {
    return (
        <button onClick={props.onClick} className="bg-blue-700 hover:bg-blue-500 text-white drop-shadow-sm font-medium py-2 px-4 rounded-md">
            {props.children}
        </button>
    )
}

export default Button;