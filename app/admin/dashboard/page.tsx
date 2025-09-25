import AdminNavigation from "@/components/AdminNavigation";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
    return ( 
        <>
        <section className="h-max w-screen flex items-start">
            <AdminNavigation />
            <div className="w-[75%] h-max pr-10">
                <header className="w-full h-20 pl-3 pr-10 flex justify-start items-center">
                    <h2 className="font-bold text-3xl">All Blogs</h2>
                </header>
                <div className="w-full h-max px-3 grid grid-cols-3">
                    <div className="h-max w-[280px] mb-5">
                        <div className="relative h-[250px] w-[280px]">
                            <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                        </div>
                        <div className="h-max w-full">
                            <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                            <div className="h-[100px] w-full">
                            <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                            </div>
                            <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                        </div>
                        <div className="h-max w-full flex mt-3 justify-between">
                            <Link className="py-3 px-5 bg-heading text-background" href={"/admin/customize/blog-post"}>View Blog</Link>
                            <button type="button" className="py-3 px-5 bg-red-500 text-background">Delete BLog</button>
                        </div>
                    </div>
                    <div className="h-max w-[280px] mb-5">
                        <div className="relative h-[250px] w-[280px]">
                            <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                        </div>
                        <div className="h-max w-full">
                            <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                            <div className="h-[100px] w-full">
                            <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                            </div>
                            <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                        </div>
                        <div className="h-max w-full flex mt-3 justify-between">
                            <Link className="py-3 px-5 bg-heading text-background" href={"/blog"}>View Blog</Link>
                            <button type="button" className="py-3 px-5 bg-red-500 text-background">Delete BLog</button>
                        </div>
                    </div>
                    <div className="h-max w-[280px] mb-5">
                        <div className="relative h-[250px] w-[280px]">
                            <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                        </div>
                        <div className="h-max w-full">
                            <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                            <div className="h-[100px] w-full">
                            <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                            </div>
                            <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                        </div>
                        <div className="h-max w-full flex mt-3 justify-between">
                            <Link className="py-3 px-5 bg-heading text-background" href={"/blog"}>View Blog</Link>
                            <button type="button" className="py-3 px-5 bg-red-500 text-background">Delete BLog</button>
                        </div>
                    </div>
                    <div className="h-max w-[280px] mb-5">
                        <div className="relative h-[250px] w-[280px]">
                            <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                        </div>
                        <div className="h-max w-full">
                            <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                            <div className="h-[100px] w-full">
                            <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                            </div>
                            <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                        </div>
                        <div className="h-max w-full flex mt-3 justify-between">
                            <Link className="py-3 px-5 bg-heading text-background" href={"/blog"}>View Blog</Link>
                            <button type="button" className="py-3 px-5 bg-red-500 text-background">Delete BLog</button>
                        </div>
                    </div>
                    <div className="h-max w-[280px] mb-5">
                        <div className="relative h-[250px] w-[280px]">
                            <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                        </div>
                        <div className="h-max w-full">
                            <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                            <div className="h-[100px] w-full">
                            <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                            </div>
                            <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                        </div>
                        <div className="h-max w-full flex mt-3 justify-between">
                            <Link className="py-3 px-5 bg-heading text-background" href={"/blog"}>View Blog</Link>
                            <button type="button" className="py-3 px-5 bg-red-500 text-background">Delete BLog</button>
                        </div>
                    </div>
                    <div className="h-max w-[280px] mb-5">
                        <div className="relative h-[250px] w-[280px]">
                            <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                        </div>
                        <div className="h-max w-full">
                            <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                            <div className="h-[100px] w-full">
                            <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                            </div>
                            <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                        </div>
                        <div className="h-max w-full flex mt-3 justify-between">
                            <Link className="py-3 px-5 bg-heading text-background" href={"/blog-post"}>View Blog</Link>
                            <button type="button" className="py-3 px-5 bg-red-500 text-background">Delete BLog</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Page;