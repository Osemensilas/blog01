import Link from "next/link";

const AdminNavigation = () => {
    return ( 
        <>
        <div className="w-[25%] h-max pt-20 pr-3 pl-10">
            <div className="h-max w-full pb-3 flex flex-col">
                <Link href={"/admin/dashboard"} className="h-max w-full py-3 mb-2 text-background bg-heading text-center">Dashboard</Link>
                <Link href={"/admin/post"} className="h-max w-full py-3 mb-2 text-background bg-heading text-center">Post</Link>
                <Link href={"/admin/subscribers"} className="h-max w-full py-3 mb-2 text-background bg-heading text-center">Subscribers</Link>
                <Link href={"/admin/settings"} className="h-max w-full py-3 mb-2 text-background bg-heading text-center">Settings</Link>
                <Link href={"/admin/customize"} target="_blank" className="h-max w-full py-3 mb-2 text-background bg-heading text-center">Cusomize</Link>
            </div>
            <div className="h-max w-full py-2 mt-2 border-t border-grey">
                <button type="button" className="w-full h-max py-3 bg-red-500 text-background">Logout</button>
            </div>
        </div>
        </>
     );
}
 
export default AdminNavigation;