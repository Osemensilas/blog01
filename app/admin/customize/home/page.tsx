'use client';

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

export default function Home() {

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
    <Head>
      <title>Home Page - Brooke Morgan</title>
    </Head>
    <div className={`h-screen w-screen overflow-hidden
        ${editPage ? "flex" : ""}
        `}>
        <div className={`h-screen overflow-y-auto
            ${editPage ? "w-1/5 p-5" : "hidden"}
            `}>
            <form onSubmit={(e) => e.preventDefault()} className="h-max w-full mb-3">
                <h2 className="text-xl mb-5">Edit Hero</h2>
                <div className="h-max w-full">
                    <div className="h-max w-full mb-3">
                        <label htmlFor="heroImg" hidden>Hero Image</label>
                        <img src="/hero.jpg" className="h-[100px] w-[100px]" alt="" />
                        <button type="button">Change Image</button>
                        <input type="file" hidden/>
                    </div>
                    <textarea name="heroTop" className="min-h-[50px] max-h-[50px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="heroTop" placeholder="Stories & Insights"></textarea>
                    <textarea name="heroHeader" className="min-h-[50px] max-h-[50px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="heroHeader" placeholder="I'm Brooke Morgan"></textarea>
                    <textarea name="heroBelow" className="min-h-[50px] max-h-[50px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="heroBelow" placeholder="Copy Writer / SEO Analyst / Storyteller"></textarea>
                    <textarea name="heroParagraph" className="min-h-[100px] max-h-[100px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="heroParagraph" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis eum eveniet ratione nemo, natus sequi sit nostrum ab. Amet quia necessitatibus voluptate, voluptas deserunt porro iste? Dignissimos, cupiditate iure?"></textarea>
                    <textarea name="heroBtn" className="min-h-[50px] max-h-[50px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="heroBtn" placeholder="Read Now"></textarea>
                </div>
                <div className="h-max w-full flex justify-end">
                    <button type="submit">Save Changes</button>
                </div>
            </form>
            <form onSubmit={(e) => e.preventDefault()} className="h-max w-full mb-3">
                <h2 className="text-xl mb-5">Recent Blogs</h2>
                <div className="h-max w-full">
                    <textarea name="recentText" className="min-h-[50px] max-h-[50px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="recentText" placeholder="Recent Blogs"></textarea>
                </div>
                <div className="h-max w-full flex justify-end">
                    <button type="submit">Save Changes</button>
                </div>
            </form>
            <form onSubmit={(e) => e.preventDefault()} className="h-max w-full mb-3">
                <h2 className="text-xl mb-5">Categories</h2>
                <div className="h-max w-full">
                    <div className="h-max w-full mb-3">
                        <input type="checkbox" id="catIcon" />
                        <label htmlFor="catIcon">Hide Category</label>
                    </div>
                    <textarea name="categoryText" className="min-h-[50px] max-h-[50px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="categoryText" placeholder="Categories"></textarea>
                </div>
                <div className="h-max w-full flex justify-end">
                    <button type="submit">Save Changes</button>
                </div>
            </form>
            <form onSubmit={(e) => e.preventDefault()} className="h-max w-full mb-3">
                <h2 className="text-xl mb-5">Subscription</h2>
                <div className="h-max w-full">
                    <div className="h-max w-full mb-3">
                        <input type="checkbox" id="subIcon" />
                        <label htmlFor="subIcon">Hide Subscription</label>
                    </div>
                    <textarea name="mailHeader" className="min-h-[50px] max-h-[50px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="mailHeader" placeholder="Join Mailing List"></textarea>
                    <textarea name="mailText" className="min-h-[50px] max-h-[50px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="mailText" placeholder="Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox."></textarea>
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
            <section className="h-screen w-full p-10 flex items-center">
            <div className="h-full w-[55%] flex items-center justify-start">
                <div className="h-max w-full">
                <div className="h-max w-full flex items-center gap-3 mb-20">
                    <div className="h-[2px] w-20 line"></div>
                    <h4 className="text-base text-heading">Stories & Insights</h4>
                </div>
                <h2 className="text-6xl font-bold mb-10">I'm Brooke Morgan</h2>
                <h3 className="text-2xl font-bold mb-10">Copy Writer / SEO Analyst / Storyteller</h3>
                <p className="text-base mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis eum eveniet ratione nemo, natus sequi sit nostrum ab. Amet quia necessitatibus voluptate, voluptas deserunt porro iste? Dignissimos, cupiditate iure?</p>
                <button type="button" className="cursor-pointer text-base py-2 px-3 bg-cta">Read Now</button>
                </div>
            </div>
            <div className="h-full w-[45%] flex items-center justify-end">
                <div className="relative h-[500px] w-[500px]">
                <Image src={"/hero.jpg"} alt="hero image" fill className="object-cover" /> 
                </div>
            </div>
            </section>
            <section className="h-max w-full py-20px px-10 mb-20">
            <h2 className="text-3xl font-bold mt-10 mb-20">Recent Blogs</h2>
            <div className="h-max w-full grid grid-cols-3">
                <Link href={"/"} className="h-max w-[350px]">
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
                <Link href={"/"} className="h-max w-[350px]">
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
                <Link href={"/"} className="h-max w-[350px]">
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
            </section>
            <section className="h-max w-full py-20px px-10 mb-20">
            <h2 className="text-3xl font-bold mt-10 mb-20">Categories</h2>
            <div className="h-max w-full grid grid-cols-3 gap-y-10">
                <Link href={"/"} className="h-[250px] w-[350px] relative after:rounded-md afterEffect">
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center z-50">
                    <h5 className="text-background font-bold text-3xl">Food Blog</h5>
                </div>
                <Image src={"/cat1.jpg"} alt="blog category" fill className="object-cover rounded-md" />
                </Link>
                <Link href={"/"} className="h-[250px] w-[350px] relative after:rounded-md afterEffect">
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center z-50">
                    <h5 className="text-background font-bold text-3xl">Food Blog</h5>
                </div>
                <Image src={"/cat1.jpg"} alt="blog category" fill className="object-cover rounded-md" />
                </Link>
                <Link href={"/"} className="h-[250px] w-[350px] relative after:rounded-md afterEffect">
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center z-50">
                    <h5 className="text-background font-bold text-3xl">Food Blog</h5>
                </div>
                <Image src={"/cat1.jpg"} alt="blog category" fill className="object-cover rounded-md" />
                </Link>
                <Link href={"/"} className="h-[250px] w-[350px] relative after:rounded-md afterEffect">
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center z-50">
                    <h5 className="text-background font-bold text-3xl">Food Blog</h5>
                </div>
                <Image src={"/cat1.jpg"} alt="blog category" fill className="object-cover rounded-md" />
                </Link>
                <Link href={"/"} className="h-[250px] w-[350px] relative after:rounded-md afterEffect">
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center z-50">
                    <h5 className="text-background font-bold text-3xl">Food Blog</h5>
                </div>
                <Image src={"/cat1.jpg"} alt="blog category" fill className="object-cover rounded-md" />
                </Link>
                <Link href={"/"} className="h-[250px] w-[350px] relative after:rounded-md afterEffect">
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center z-50">
                    <h5 className="text-background font-bold text-3xl">Food Blog</h5>
                </div>
                <Image src={"/cat1.jpg"} alt="blog category" fill className="object-cover rounded-md" />
                </Link>
            </div>
            </section>
            <section className="h-max w-full flex items-center justify-center mb-10">
                <div className="w-[80%] h-[400px] bg-background shadow-custom flex">
                    <div className="w-1/2 h-full">
                        <div className="relative h-full w-full">
                            <Image src={"/news-letter.jpg"} fill className="object-cover" alt="subscribe" />
                        </div>
                    </div>
                    <div className="w-1/2 h-full p-5 flex items-center">
                        <div className="h-max w-full">
                            <h2 className="h-max w-full text-3xl mb-5 font-bold">Join Mailing List</h2>
                            <p className="text-base font-extralight">Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.</p>
                            <form onSubmit={(e) => e.preventDefault()} className="h-max w-full flex items-center mt-5">
                                <input type="text" name="email" title="email" className="h-10 w-[250px] px-3 outline-none border border-grey" placeholder="Enter your email address" />
                                <button type="submit" className="h-10 w-max px-3 text-sm btn">SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    </>
  );
}
