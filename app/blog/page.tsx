'use client';

import Image from "next/image";
import Link from "next/link";

const Page = () => {
    return ( 
        <>
        <section className="h-max w-screen p-20">
            <div className="h-max w-full">
                <div className="h-max w-full flex justify-center">
                    <div className="relative h-[400px] w-[800px]">
                        <Image src={"/hero.jpg"} alt="blog image" fill className="object-cover" />
                    </div>
                </div>
                <div className="h-max w-full mt-10">
                    <h1 className="font-bold text-4xl mb-10">How to Cook Jollof Rice and Not Burn It</h1>
                    <div className="h-max w-full blog-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas numquam omnis, dolor eum consequatur, nihil culpa iusto in consectetur nobis dolorem delectus dignissimos? Molestiae fuga impedit at, repellendus dolor quo!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, nemo praesentium nihil voluptates maiores numquam quae excepturi veniam omnis ducimus suscipit, voluptatibus velit harum voluptatum nostrum eius repellendus eos et.</p>
                        <h2>The Ingredients Used</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit earum impedit dignissimos voluptatum deserunt repellat, sed dolorem beatae reiciendis voluptates. Quia ullam eaque illo totam dolore, blanditiis temporibus illum?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium illum unde, ut voluptatibus deserunt vero omnis reiciendis rem molestiae ipsam id nam, odio, incidunt quia. Ex unde blanditiis nemo quod!</p>
                    </div>
                </div>
                <div className="h-max w-full mt-10">
                    <h2 className="py-5 font-bold text-3xl">Comments</h2>
                    <div className="commentContainer">
                        <h2 className="commentName">Osemen Silas</h2>
                        <p className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, optio reiciendis vero natus expedita odit tempora quia eveniet, sint voluptatibus maiores minus aliquam debitis placeat voluptatum, dolorem consequuntur nesciunt in?</p>
                        <div className="commentReplyBtn">
                            <button type="button">Reply</button>
                        </div>
                        <div className="commentReplyFormContainer">
                            <form onSubmit={(e) => e.preventDefault()} className="h-max w-full">
                                <h2 className="py-5 font-bold text-3xl">Reply this post</h2>
                                <p className="pb-5">Your email address will not be published</p>
                                <div className="h-max w-full mb-5">
                                    <textarea name="message" className="min-w-full max-w-full min-h-[250px] max-h-[250px] border border-grey bg-transparent p-3 outline-none" id="replyMessage" title="message"></textarea>
                                </div>
                                <div className="h-max w-full flex justify-between">
                                    <input type="text" className="h-10 w-[30%] border border-grey bg-transparent outline-none px-3 text-sm" title="name" placeholder="Name*" />
                                    <input type="text" className="h-10 w-[30%] border border-grey bg-transparent outline-none px-3 text-sm" title="email" placeholder="Email*" />
                                    <input type="text" className="h-10 w-[30%] border border-grey bg-transparent outline-none px-3 text-sm" title="website" placeholder="website" />
                                </div>
                                <div className="h-max w-full py-5">
                                    <button type="button" className="border-heading border py-3 px-5 bg-transparent text-heading font-bold">POST COMMENT</button>
                                </div>
                            </form>
                        </div>
                        <div className="h-max w-full pl-20">
                            <div className="w-full h-max border-b border-grey mb-3 pb-3">
                                <h2 className="font-normal text-xl mb-3">John Paul</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odio asperiores magnam hic pariatur facilis aut ut cupiditate necessitatibus mollitia sunt voluptatibus nisi nulla esse ab maiores aspernatur, illo voluptates.</p>
                            </div>
                            <div className="w-full h-max border-b border-grey mb-3 pb-3">
                                <h2 className="font-normal text-xl mb-3">Theophilus Sundey</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odio asperiores magnam hic pariatur facilis aut ut cupiditate necessitatibus mollitia sunt voluptatibus nisi nulla esse ab maiores aspernatur, illo voluptates.</p>
                            </div>
                            <div className="w-full h-max border-b border-grey mb-3 pb-3">
                                <h2 className="font-normal text-xl mb-3">Sarah Jone</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odio asperiores magnam hic pariatur facilis aut ut cupiditate necessitatibus mollitia sunt voluptatibus nisi nulla esse ab maiores aspernatur, illo voluptates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-max w-full">
                <h2 className="py-5 font-bold text-3xl">Related Post</h2>
                <div className="h-max w-full grid grid-cols-3">
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
                </div>
            </div>
            <div className="h-max w-full">
                <form onSubmit={(e) => e.preventDefault()} className="h-max w-full">
                    <h2 className="py-5 font-bold text-3xl">Leave a comment</h2>
                    <p className="pb-5">Your email address will not be published</p>
                    <div className="h-max w-full mb-5">
                        <textarea name="message" className="min-w-full max-w-full min-h-[250px] max-h-[250px] border border-grey bg-transparent p-3 outline-none" id="message" title="message"></textarea>
                    </div>
                    <div className="h-max w-full flex justify-between">
                        <input type="text" className="h-10 w-[30%] border border-grey bg-transparent outline-none px-3 text-sm" title="name" placeholder="Name*" />
                        <input type="text" className="h-10 w-[30%] border border-grey bg-transparent outline-none px-3 text-sm" title="email" placeholder="Email*" />
                        <input type="text" className="h-10 w-[30%] border border-grey bg-transparent outline-none px-3 text-sm" title="website" placeholder="website" />
                    </div>
                    <div className="h-max w-full py-5">
                        <button type="button" className="border-heading border py-3 px-5 bg-transparent text-heading font-bold">POST COMMENT</button>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default Page;