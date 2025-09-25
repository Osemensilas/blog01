import NewsLetter from "@/components/NewLetter";
import Image from "next/image";

const Page = () => {
    return ( 
        <>
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
                                <a href="#" target="_blank" title="facebook" className="text-background text-xl">
                                    <i className="fa-brands fa-whatsapp"></i>
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
        </>
     );
}
 
export default Page;