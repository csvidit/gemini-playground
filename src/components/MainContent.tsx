const MainContent = (props: { children: React.ReactNode }) => {
    return <div className="flex flex-col gap-8">{props.children}</div>
}

export default MainContent;