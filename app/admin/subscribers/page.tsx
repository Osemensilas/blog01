'use client';

import AdminNavigation from "@/components/AdminNavigation";

const Page = () => {
    return ( 
        <>
        <section className="h-max w-screen flex items-start">
            <AdminNavigation />
            <div className="w-[75%] h-max pr-10">
                <header className="h-max w-full p-10">
                    <h2 className="font-bold text-3xl">Message Subscribers</h2>
                </header>
                <div className="h-max w-full px-10 flex items-start">
                    <div className="h-max w-[70%] pr-2">
                        <form onSubmit={(e) => e.preventDefault()} className="h-max w-full">
                            <div className="h-max w-full flex flex-col mb-3">
                                <label htmlFor="message" className="text-text text-base mb-3">Message</label>
                                <textarea name="message" id="message" title="message" className="min-h-[250px] max-[250px] max-w-full min-w-full p-3 border border-grey bg-transparent"></textarea>
                            </div>
                            <div className="h-max w-full py-5">
                                <button type="submit" className="cursor-pointer text-base py-2 px-3 bg-cta">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className="h-max w-[30%] pl-2">
                        <h2>Total Subscribers</h2>
                        <p>325</p>
                        <div className="h-max w-full">
                            <h2>Emails:</h2>
                            <div className="h-[200px] w-full overflow-auto">
                                <p>Osemensilas@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Page;