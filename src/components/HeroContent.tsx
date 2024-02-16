const HeroContent = (props: { children: React.ReactNode }) => {
    return <section className="rounded-2xl w-full h-full min-w-full min-h-80 bg-neutral-50 border border-blue-500 flex flex-col gap-2 lg:gap-4 justify-center items-center text-center">{props.children}</section>
}

export default HeroContent;