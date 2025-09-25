'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

    const pathname = usePathname();

    return ( 
        <>
        <header id="header" className={`h-[75px] w-full bg-heading py-10 px-10 border-b border-grey flex justify-between items-center
            ${pathname === '/admin' ? "hidden" : ""}
            ${pathname === '/customize' ? "hidden" : ""}
            ${pathname === '/admin/customize' ? "hidden" : ""}
            ${pathname === '/admin/customize/home' ? "hidden" : ""}
            ${pathname === '/admin/customize/blogs' ? "hidden" : ""}
            ${pathname === '/admin/customize/about' ? "hidden" : ""}
            ${pathname === '/admin/customize/contact' ? "hidden" : ""}
            `}>
            <div className="h-max w-max flex items-center gap-10">
                <Link href={"/"} className="h-max w-max cursor-pointer">
                    <h1 className="font-bold text-background text-4xl font-logo">BM</h1>
                </Link>
                <ul className="h-max w-max list-none flex items-center gap-3">
                    <li className="h-max w-max">
                        <Link href={"/"} className="text-background text-base font-semibold">Home</Link>
                    </li>
                    <li className="h-max w-max">
                        <Link href={"/blogs"} className="text-background text-base font-semibold">Blogs</Link>
                    </li>
                    <li className="h-max w-max">
                        <Link href={"/about"} className="text-background text-base font-semibold">About Me</Link>
                    </li>
                    <li className="h-max w-max">
                        <Link href={"/contact"} className="text-background text-base font-semibold">Contact Me</Link>
                    </li>
                </ul>
            </div>
            <div className="h-max w-max flex items-center gap-5">
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
                <a href="#" className="cursor-pointer text-base py-2 px-3 cta">Let's Talk</a>
            </div>
        </header>
        </>
     );
}
 
export default Header;