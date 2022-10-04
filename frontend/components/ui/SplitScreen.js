const SplitScreen = ({children}) =>{
    const [left,right] = children;
    return (
        <>
            <section className="flex flex-row">
                <article className="basis-1/4 bg-slate-800 min-h-screen rounded-lg">
                    {left}
                </article>

                <article className=" basis-full bg-slate-100">
                    {right}
                </article>
            </section>
        </>
    
    )
}

export default SplitScreen;