'use client';

import Image from "next/image";

const NewsLetter = () => {
    return ( 
        <>
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
        </>
     );
}
 
export default NewsLetter;