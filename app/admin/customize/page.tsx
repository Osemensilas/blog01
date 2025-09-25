import Link from "next/link";

const Page = () => {
    return ( 
        <>
        <section className="h-screen w-screen">
            <div className="w-full h-full flex items-start">
                <div className="h-screen w-1/5 flex flex-col gap-y-3 p-5 overflow-auto">
                    <div className="h-max w-full">
                        <button type="button" className="w-full h-max flex items-center gap-3"><i className="fa fa-arrow-left"></i> Go Back</button>
                    </div>
                    <div className="h-max w-full my-3">
                        <h2 className="mb-3 text-xl">Try Other Fonts</h2>
                        <div className="h-max w-full flex flex-wrap gap-3">
                            <button type="button" className="font-select monsurat active">Aa</button>
                            <button type="button" className="font-select nunito">Aa</button>
                            <button type="button" className="font-select alan-sans">Aa</button>
                            <button type="button" className="font-select zalando-sans-expanded">Aa</button>
                            <button type="button" className="font-select dancing-script">Aa</button>
                            <button type="button" className="font-select smooch-sans">Aa</button>
                            <button type="button" className="font-select roboto">Aa</button>
                            <button type="button" className="font-select eb-garamond">Aa</button>
                            <button type="button" className="font-select indie-flower-regular">Aa</button>
                        </div>
                    </div>
                    <div className="h-max w-full my-3">
                        <h2 className="mb-3 text-xl">Try Other Colors</h2>
                        <div className="h-max w-full flex flex-wrap gap-3">
                            <button type="button" className="bg-select bg-default" title="btn"><span className="dot"></span> <span className="dot"></span></button>
                            <button type="button" className="bg-select bg-default2" title="btn"><span className="dot"></span> <span className="dot"></span></button>
                            <button type="button" className="bg-select bg-default3" title="btn"><span className="dot"></span> <span className="dot"></span></button>
                            <button type="button" className="bg-select bg-default4" title="btn"><span className="dot"></span> <span className="dot"></span></button>
                            <button type="button" className="bg-select bg-default5" title="btn"><span className="dot"></span> <span className="dot"></span></button>
                            <button type="button" className="bg-select bg-default6" title="btn"><span className="dot"></span> <span className="dot"></span></button>
                            <button type="button" className="bg-select bg-default7" title="btn"><span className="dot"></span> <span className="dot"></span></button>
                            <button type="button" className="bg-select bg-default8" title="btn"><span className="dot"></span> <span className="dot"></span></button>
                            <button type="button" className="bg-select bg-default9" title="btn"><span className="dot"></span> <span className="dot"></span></button>
                        </div>
                    </div>
                    <h2 className="font-bold text-xl">Edit Pages</h2>
                    <Link target="_blank" href={"/admin/customize/home"}>Home</Link>
                    <Link target="_blank" href={"/admin/customize/blogs"}>Blogs</Link>
                    <Link target="_blank" href={"/admin/customize/blog"}>Blog</Link>
                    <Link target="_blank" href={"/admin/customize/about"}>About</Link>
                    <Link target="_blank" href={"/admin/customize/contact"}>Contact</Link>
                </div>
                <div className="h-full w-4/5">
                    <iframe className="h-full w-full" src="http://localhost:3000/" frameBorder="0"></iframe>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Page;