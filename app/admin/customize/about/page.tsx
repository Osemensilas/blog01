'use client';

import NewsLetter from "@/components/NewLetter";
import Image from "next/image";
import { useState } from "react";

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
                    <h2 className="text-xl mb-5">Edit About</h2>
                    <div className="h-max w-full">
                        <textarea name="heroHeader" className="min-h-[50px] max-h-[50px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="heroHeader" placeholder="About Me"></textarea>
                        <textarea name="heroParagraph" className="min-h-[100px] max-h-[100px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="heroParagraph" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum non nesciunt consectetur aut error natus, quam inventore consequuntur sequi ipsam. Ipsam placeat error, tempora nulla harum sint sunt pariatur."></textarea>
                        <div className="h-max w-full my-3">
                            <h2 className="text-xl mb-5">First Container</h2>
                            <div className="h-max w-full">
                                <textarea name="firstHeader" className="min-h-[50px] max-h-[50px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="firstHeader" placeholder="Copywriter"></textarea>
                                <textarea name="firstParagraph" className="min-h-[100px] max-h-[100px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="firstParagraph" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque nesciunt"></textarea>
                            </div>
                            <div className="h-max w-full mb-3">
                                <input type="checkbox" id="firstIcon" />
                                <label htmlFor="firstIcon">Hide First Container</label>
                            </div>
                        </div>
                        <div className="h-max w-full my-3">
                            <h2 className="text-xl mb-5">Second Container</h2>
                            <div className="h-max w-full">
                                <textarea name="secondHeader" className="min-h-[50px] max-h-[50px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="secondHeader" placeholder="SEO Specialist"></textarea>
                                <textarea name="secondParagraph" className="min-h-[100px] max-h-[100px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="secondParagraph" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque nesciunt"></textarea>
                            </div>
                            <div className="h-max w-full mb-3">
                                <input type="checkbox" id="secondIcon" />
                                <label htmlFor="secondIcon">Hide Second Container</label>
                            </div>
                        </div>
                        <div className="h-max w-full my-3">
                            <h2 className="text-xl mb-5">Third Container</h2>
                            <div className="h-max w-full">
                                <textarea name="thirdHeader" className="min-h-[50px] max-h-[50px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="thirdHeader" placeholder="Storyteller"></textarea>
                                <textarea name="thirdParagraph" className="min-h-[100px] max-h-[100px] min-w-full max-w-full border border-grey bg-transparent p-2 rounded text-sm" id="thirdParagraph" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque nesciunt"></textarea>
                            </div>
                            <div className="h-max w-full mb-3">
                                <input type="checkbox" id="thirdIcon" />
                                <label htmlFor="thirdIcon">Hide Third Container</label>
                            </div>
                        </div>
                        <div className="h-max w-full mb-3">
                            <input type="checkbox" id="catIcon" />
                            <label htmlFor="catIcon">Hide Social Icons</label>
                        </div>
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
                <section className="h-max w-screen about mb-20">
                    <div className="h-screen w-full flex">
                        <div className="h-full w-3/5 p-10 flex items-center">
                            <div className="h-max w-full">
                                <h1 className="text-6xl font-bold mb-10">About Me</h1>
                                <p className="text-base mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum non nesciunt consectetur aut error natus, quam inventore consequuntur sequi ipsam. Ipsam placeat error, tempora nulla harum sint sunt pariatur.</p>
                                <div className="h-max w-full flex items-start gap-3 mb-5">
                                    <i className="fa-solid fa-feather text-xl text-heading"></i>
                                    <div className="h-max w-full">
                                        <h2 className="font-bold text-sm mb-2">Copywriter</h2>
                                        <p className="text-base mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque nesciunt</p>
                                    </div>
                                </div>
                                <div className="h-max w-full flex items-start gap-3 mb-5">
                                    <i className="fa-solid fa-newspaper text-xl text-heading"></i>
                                    <div className="h-max w-full">
                                        <h2 className="font-bold text-sm mb-2">SEO Specialist</h2>
                                        <p className="text-base mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque nesciunt</p>
                                    </div>
                                </div>
                                <div className="h-max w-full flex items-start gap-3 mb-5">
                                    <i className="fa-solid fa-pen text-xl text-heading"></i>
                                    <div className="h-max w-full">
                                        <h2 className="font-bold text-sm mb-2">Storyteller</h2>
                                        <p className="text-base mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque nesciunt</p>
                                    </div>
                                </div>
                                <div className="">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-2/5">
                            <div className="relative h-full w-full">
                                <Image src={"/hero.jpg"} alt="about image" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>
                <NewsLetter />
            </div>
        </div>
        </>
     );
}
 
export default Page;