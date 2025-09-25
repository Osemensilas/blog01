'use client';

import AdminNavigation from "@/components/AdminNavigation";

const Page = () => {
    return ( 
        <>
        <section className="h-max w-screen flex items-start">
            <AdminNavigation />
            <div className="w-[75%] h-max pr-10">
                <header className="w-full h-20 pl-3 pr-10 flex justify-start items-center">
                    <h2 className="font-bold text-3xl">Settings</h2>
                </header>
                <div className="h-max w-full">
                    <form onSubmit={(e) => e.preventDefault()} className="h-max w-full px-5">
                        <div className="h-max w-full flex flex-col gap-y-1 mb-3">
                            <label htmlFor="siteName" className="text-grey text-base">Site Name:</label>
                            <input type="text" className="h-10 w-1/2 border border-grey px-3 bg-transparent" id="siteName" />
                        </div>
                        <div className="h-max w-full flex flex-col gap-y-1 mb-3">
                            <label htmlFor="siteTitle" className="text-grey text-base">Site Title:</label>
                            <input type="text" className="h-10 w-1/2 border border-grey px-3 bg-transparent" id="siteTitle" />
                        </div>
                        <div className="h-max w-full flex flex-col gap-y-1 mb-3">
                            <label htmlFor="logoType" className="text-grey text-base">Logo Type:</label>
                            <select className="h-10 w-1/2 border border-grey px-3 bg-transparent" id="logoType">
                                <option value="text">Text</option>
                                <option value="image">Image</option>
                            </select>
                        </div>
                        <div className="h-max w-full flex flex-col gap-y-1 mb-3">
                            <label htmlFor="logo" className="text-grey text-base">Logo:</label>
                            <input type="text" className="h-10 w-1/2 border border-grey px-3 bg-transparent" id="logo" />
                        </div>
                        <div className="h-max w-full flex flex-col gap-y-1 mb-3">
                            <label htmlFor="facebook" className="text-grey text-base">Facebook Url:</label>
                            <input type="text" className="h-10 w-1/2 border border-grey px-3 bg-transparent" id="facebook" />
                        </div>
                        <div className="h-max w-full flex flex-col gap-y-1 mb-3">
                            <label htmlFor="twitter" className="text-grey text-base">Twitter Url:</label>
                            <input type="text" className="h-10 w-1/2 border border-grey px-3 bg-transparent" id="twitter" />
                        </div>
                        <div className="h-max w-full flex flex-col gap-y-1 mb-3">
                            <label htmlFor="instagram" className="text-grey text-base">Instagram Url:</label>
                            <input type="text" className="h-10 w-1/2 border border-grey px-3 bg-transparent" id="instagram" />
                        </div>
                        <div className="h-max w-full flex flex-col gap-y-1 mb-3">
                            <label htmlFor="whatsapp" className="text-grey text-base">WhatsApp Number:</label>
                            <input type="text" className="h-10 w-1/2 border border-grey px-3 bg-transparent" id="whatsapp" />
                        </div>
                        <div className="h-max w-full flex flex-col gap-y-1 mb-3">
                            <label htmlFor="email" className="text-grey text-base">Email:</label>
                            <input type="text" className="h-10 w-1/2 border border-grey px-3 bg-transparent" id="email" />
                        </div>
                        <div className="h-max w-full flex flex-col gap-y-1 mb-3">
                            <label htmlFor="password" className="text-grey text-base">Password:</label>
                            <input type="password" className="h-10 w-1/2 border border-grey px-3 bg-transparent" id="password" />
                        </div>
                        <div className="h-max w-full py-5">
                            <button type="submit" className="cursor-pointer text-base py-2 px-3 bg-cta">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Page;
<>

</>