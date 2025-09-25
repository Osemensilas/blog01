'use client';

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import NewsLetter from "@/components/NewLetter";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home Page - Brooke Morgan</title>
    </Head>
    <section className="h-screen w-screen p-10 flex items-center">
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
    <section className="h-max w-screen py-20px px-10 mb-20">
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
    <section className="h-max w-screen py-20px px-10 mb-20">
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
    <NewsLetter />
    </>
  );
}
