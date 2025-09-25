'use client'

import NewsLetter from "@/components/NewLetter";
import Image from "next/image";

const Page = () => {
    return (
        <>
        <section className="h-max w-screen px-10 py-20 contact">
            <div className="h-max w-full flex items-start">
                <div className="w-1/2 h-full pr-10">
                    <div className="h-max w-full flex flex-col items-start justify-between">
                        <div className="h-max w-full">
                            <h1 className="text-6xl font-bold mb-10">Contact</h1>
                            <p className="text-base mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit eos totam reprehenderit dolorum itaque. Ratione magnam unde, voluptatem magni asperiores eos aspernatur, repellendus reprehenderit sequi possimus explicabo. Fugiat, nam.</p>
                            <div className="h-max w-full mb-20">
                                <div className="h-max w-full flex items-start gap-3 mb-5">
                                    <i className="fa-solid fa-location-dot text-heading"></i>
                                    <div className="h-max w-max">
                                        <h3 className="font-bold text-sm mb-2">Address</h3>
                                        <p className="text-2xl">No 10 Lord Shepherd Street Dutse Bupma.</p>
                                    </div>
                                </div>
                                <div className="h-max w-full flex items-start gap-3 mb-5">
                                    <i className="fa-solid fa-phone text-heading"></i>
                                    <div className="h-max w-max">
                                        <h3 className="font-bold text-sm mb-2">Phone</h3>
                                        <p className="text-2xl">+234 905 406 0454</p>
                                    </div>
                                </div>
                                <div className="h-max w-full flex items-start gap-3 mb-5">
                                    <i className="fa-solid fa-envelope text-heading"></i>
                                    <div className="h-max w-max">
                                        <h3 className="font-bold text-sm mb-2">Email</h3>
                                        <p className="text-2xl">brookemorgan@mail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-max w-full">
                            <h4>Follow Me</h4>
                            <div className="h-max w-max flex items-center gap-3">
                                <a href="#" target="_blank" title="facebook" className="text-background text-xl">
                                    <i className="fa-brands fa-facebook-square"></i>
                                </a>
                                <a href="#" target="_blank" title="facebook" className="text-background text-xl">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="#" target="_blank" title="facebook" className="text-background text-xl">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" target="_blank" title="facebook" className="text-background text-xl">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-max w-1/2 pl-10">
                    <form onSubmit={(e) => e.preventDefault()} className="border-8 border-heading p-10">
                        <h3 className="text-3xl font-bold mb-10">Let's Talk</h3>
                        <div className="h-max w-full">
                            <div className="h-max w-full">
                                <label htmlFor="username" className="text-base text-grey">Name: *</label>
                                <div className="h-max w-full flex justify-between items-start mb-5">
                                    <div className="w-[48%] h-max flex flex-col">
                                        <input type="text" className="h-10 w-full p-3 outline-none border border-grey bg-transparent" id="firstname" title="firstname" />
                                        <label className="text-xs text-grey" htmlFor="firstname">First Name</label>
                                    </div>
                                    <div className="w-[48%] h-max flex flex-col">
                                        <input type="text" className="h-10 w-full p-3 outline-none border border-grey bg-transparent" id="lastname" title="lastname" />
                                        <label className="text-xs text-grey" htmlFor="lastname">Last Name</label>
                                    </div>
                                </div>
                                <div className="w-full h-max flex flex-col mb-5">
                                    <label className="text-base text-grey" htmlFor="email">Email:*</label>
                                    <input type="text" className="h-10 w-full p-3 outline-none border border-grey bg-transparent" id="email" title="email" />
                                </div>
                                <div className="w-full h-max flex flex-col mb-5">
                                    <label className="text-base text-grey" htmlFor="subject">Subject:*</label>
                                    <input type="text" className="h-10 w-full p-3 outline-none border border-grey bg-transparent" id="subject" title="email" />
                                </div>
                                <div className="w-full h-max flex flex-col mb-5">
                                    <label className="text-base text-grey" htmlFor="subject">Message:*</label>
                                    <textarea name="message" className="min-h-40 max-h-40 min-w-full max-w-full p-3 outline-none border border-grey bg-transparent" id="subject" title="email"></textarea>
                                </div>
                                <div className="h-max w-full">
                                    <button type="submit" className="h-max w-max px-5 py-3 font-bold text-sm bg-cta">SEND MESSAGE</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="h-max w-full flex items-center mt-20">
                <div className="h-max w-1/2 flex justify-start">
                    <div className="relative h-[400px] w-[500px]">
                        <Image src="/hero.jpg" alt="contact image" fill className="object-cover" />
                    </div>
                </div>
                <div className="h-max w-1/2 pl-5">
                    <i className="fa-solid fa-quote-left text-3xl text-grey"></i>
                    <span>
                        <p className="text-justify text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam earum fugiat iusto, cumque dolor natus perferendis hic architecto incidunt sit quisquam non nihil aliquam a in at molestiae assumenda quibusdam.</p>
                        <i className="fa-solid fa-quote-right text-3xl text-grey"></i>
                    </span>
                </div>
            </div>
        </section>
        <NewsLetter />
        </>
    )
}

export default Page;