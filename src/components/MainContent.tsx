const MainContent = (props: { children: React.ReactNode }) => {
    return <div className="relative mt-16 flex flex-col gap-8 min-h-screen h-full">{props.children}</div>
}

export default MainContent;