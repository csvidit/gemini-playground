const MainContainer = (props: { children: React.ReactNode }) => {
    return <div className="min-w-screen max-w-screen w-screen min-h-screen flex flex-col gap-16 p-8 lg:p-16 bg-neutral-200 text-neutral-900 *:selection:bg-neutral-600 *:selection:text-neutral-100">{props.children}</div>
}

export default MainContainer;