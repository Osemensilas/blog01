'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const Page = () => {

    const [editPage, setEditPage] = useState(false);

    const editClicked = () => {
        if (!editPage){
            setEditPage(true);
        }else{
            setEditPage(false);
        }
    }

    return ( 
        <>
        <div className={`h-screen w-screen overflow-hidden
        ${editPage ? "flex" : ""}
        `}>
            <div className={`h-screen overflow-y-auto
            ${editPage ? "w-1/5 p-5" : "hidden"}
            `}>
                <form onSubmit={(e) => e.preventDefault()} className="h-max w-full mb-3">
                    <h2 className="text-xl mb-5">Card Format</h2>
                    <div className="h-max w-full mb-3">
                        <input type="checkbox" id="catIcon" />
                        <label htmlFor="catIcon">Hide Category</label>
                    </div>
                    <div className="h-max w-full mb-3">
                        <input type="checkbox" id="metaData" />
                        <label htmlFor="metaData">Meta Data</label>
                    </div>
                    <div className="h-max w-full flex justify-end">
                        <button type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
            <div className={`h-screen overflow-auto
            ${editPage ? "w-4/5" : "w-full"}
            `}>
                <div className="h-max w-full p-5 bg-heading text-background">
                    <button onClick={editClicked} type="button">Edit Home Page</button>
                </div>
                <section className="h-max w-screen mb-20">
                    <header className="h-max w-full p-10">
                        <h1 className="text-center text-5xl font-bold">Blogs</h1>
                    </header>
                    <div className="h-max w-full px-10">
                        <div className="h-max w-full grid grid-cols-3">
                            <Link href={"/blog-post"} className="h-max w-[350px] mb-5">
                                <div className="relative h-[250px] w-[350px]">
                                    <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                                </div>
                                <div className="h-max w-full">
                                    <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                                    <div className="h-[100px] w-full">
                                    <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                                    </div>
                                    <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                                </div>
                            </Link>
                            <Link href={"/blog"} className="h-max w-[350px] mb-5">
                                <div className="relative h-[250px] w-[350px]">
                                    <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                                </div>
                                <div className="h-max w-full">
                                    <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                                    <div className="h-[100px] w-full">
                                    <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                                    </div>
                                    <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                                </div>
                            </Link>
                            <Link href={"/blog"} className="h-max w-[350px] mb-5">
                                <div className="relative h-[250px] w-[350px]">
                                    <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                                </div>
                                <div className="h-max w-full">
                                    <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                                    <div className="h-[100px] w-full">
                                    <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                                    </div>
                                    <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                                </div>
                            </Link>
                            <Link href={"/"} className="h-max w-[350px] mb-5">
                                <div className="relative h-[250px] w-[350px]">
                                    <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                                </div>
                                <div className="h-max w-full">
                                    <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                                    <div className="h-[100px] w-full">
                                    <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                                    </div>
                                    <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                                </div>
                            </Link>
                            <Link href={"/"} className="h-max w-[350px] mb-5">
                                <div className="relative h-[250px] w-[350px]">
                                    <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                                </div>
                                <div className="h-max w-full">
                                    <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                                    <div className="h-[100px] w-full">
                                    <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                                    </div>
                                    <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                                </div>
                            </Link>
                            <Link href={"/"} className="h-max w-[350px] mb-5">
                                <div className="relative h-[250px] w-[350px]">
                                    <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                                </div>
                                <div className="h-max w-full">
                                    <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                                    <div className="h-[100px] w-full">
                                    <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                                    </div>
                                    <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                                </div>
                            </Link>
                            <Link href={"/"} className="h-max w-[350px] mb-5">
                                <div className="relative h-[250px] w-[350px]">
                                    <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                                </div>
                                <div className="h-max w-full">
                                    <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                                    <div className="h-[100px] w-full">
                                    <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                                    </div>
                                    <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                                </div>
                            </Link>
                            <Link href={"/"} className="h-max w-[350px] mb-5">
                                <div className="relative h-[250px] w-[350px]">
                                    <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                                </div>
                                <div className="h-max w-full">
                                    <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                                    <div className="h-[100px] w-full">
                                    <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                                    </div>
                                    <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                                </div>
                            </Link>
                            <Link href={"/"} className="h-max w-[350px] mb-5">
                                <div className="relative h-[250px] w-[350px]">
                                    <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                                </div>
                                <div className="h-max w-full">
                                    <h4 className="h-max w-full py-3 text-sm font-light text-heading">Travel</h4>
                                    <div className="h-[100px] w-full">
                                    <h2 className="h-max w-full py-3 text-2xl font-bold">How to Cook Jollof Rice an Stew with FIsh</h2>
                                    </div>
                                    <p className="h-max w-full py-3 text-sm font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, in dolore! Dolores blanditiis explicabo tempora, ut temporibus est fuga vero ipsam ipsa harum atque ullam pariatur voluptate. Ipsam, sunt ipsum?</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
     );
}
 
export default Page;