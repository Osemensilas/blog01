'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {

    const pathname = usePathname();

    return ( 
        <>
        <footer id="footer" className={`h-max w-full py-10 px-10 bg-heading footer
            ${pathname === '/admin' ? "hidden" : ""}
            ${pathname === '/customize' ? "hidden" : ""}
            ${pathname === '/admin/customize' ? "hidden" : ""}
            ${pathname === '/admin/customize/home' ? "hidden" : ""}
            ${pathname === '/admin/customize/blogs' ? "hidden" : ""}
            ${pathname === '/admin/customize/about' ? "hidden" : ""}
            ${pathname === '/admin/customize/contact' ? "hidden" : ""}
            `}>
            <div className="h-max w-full flex items-center justify-between  mb-10">
                <Link href={"/"} className="h-max w-max cursor-pointer">
                    <h6 className="font-bold text-background text-4xl font-logo">BM</h6>
                </Link>
                <ul className="h-max w-max list-none flex items-center gap-5">
                    <li className="h-max w-max font-light">
                        <Link href={"/"} className="text-background text-base font-light">Home</Link>
                    </li>
                    <li className="h-max w-max font-light">
                        <Link href={"/"} className="text-background text-base font-light">Blog</Link>
                    </li>
                    <li className="h-max w-max font-light">
                        <Link href={"/"} className="text-background text-base font-light">About Me</Link>
                    </li>
                    <li className="h-max w-max font-light">
                        <Link href={"/"} className="text-background text-base font-light">Contact Me</Link>
                    </li>
                </ul>
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
            <div className="h-max w-full flex justify-between items-center text-background text-sm">
                <p>© 2025 travel blooger</p>
                <p>Powered by Iruap Tech Studio LTD</p>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;