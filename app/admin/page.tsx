const Page = () => {

    return ( 
        <>
        <section className="h-screen w-screen">
            <div className="h-full w-full flex items-center justify-center">
                <form className="h-max w-[350px]">
                    <header className="h-max w-full py-5">
                        <h2 className="font-bold text-3xl">Admin Panel</h2>
                    </header>
                    <div className="h-max w-full">
                        <div className="h-max w-full flex flex-col mb-3">
                            <label htmlFor="email" className="mb-2 text-grey text-sm">Email</label>
                            <input type="text" className="h-10 w-full border border-grey outline-none px-3 bg-transparent" id="email" />
                        </div>
                        <div className="h-max w-full flex flex-col mb-3">
                            <label htmlFor="password" className="mb-2 text-grey text-sm">Password</label>
                            <input type="password" className="h-10 w-full border border-grey outline-none px-3 bg-transparent" id="password" />
                        </div>
                    </div>
                    <div className="w-full h-max py-5">
                        <button type="submit" className="h-max w-max py-3 px-5 border border-heading text-heading text-base hover:text-background hover:bg-heading duration-300 transition-all">Login</button>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default Page;