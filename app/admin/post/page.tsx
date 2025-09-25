'use client';

import AdminNavigation from '@/components/AdminNavigation';

const Page = () => {
    return(
        <>
        <section className="h-max w-screen flex items-start">
            <AdminNavigation />
            <div className="w-[75%] h-max pr-10">
                <header className="w-full h-20 pl-3 pr-10 flex justify-start items-center">
                    <h2 className="font-bold text-3xl">Add Blog</h2>
                </header>
                <div className="h-max w-full flex items-start">
                    <div className="h-max w-[70%] pr-2">
                        <form onSubmit={(e) => e.preventDefault()} className="h-max w-full">
                            <div className="h-max w-full">
                                <div className="h-max w-full flex flex-col mb-3">
                                    <label htmlFor="title" className="text-text text-base mb-3">Title</label>
                                    <input type="text" className="h-10 w-full border border-grey bg-transparent px-3" title="title" id="title" />
                                </div>
                                <div className="h-max w-full flex justify-between">
                                    <div className="h-max w-[48%] flex flex-col mb-3">
                                        <label htmlFor="category" className="text-text text-base mb-3">Category</label>
                                        <select name="category" className="h-10 w-full border border-grey bg-transparent px-3" title="category" id="category">
                                            <option value="">-- Select Category --</option>
                                        </select>
                                    </div>
                                    <div className="h-max w-[48%] flex flex-col mb-3">
                                        <label htmlFor="author" className="text-text text-base mb-3">Author</label>
                                        <input type="text" className="h-10 w-full border border-grey bg-transparent px-3" title="author" id="author" />
                                    </div>
                                </div>
                                <div className="h-max w-full flex justify-between">
                                    <div className="h-max w-[48%] flex flex-col mb-3">
                                        <label htmlFor="image" className="text-text text-base mb-3">Image</label>
                                        <input type="file" className="h-10 w-full border border-grey bg-transparent px-3" title="image" id="image" />
                                    </div>
                                </div>
                                <div className="h-max w-full flex flex-col mb-3">
                                    <label htmlFor="message" className="text-text text-base mb-3">Blog Content</label>
                                    <textarea name="message" id="message" title="message" className="min-h-[250px] max-[250px] max-w-full min-w-full p-3 border border-grey bg-transparent"></textarea>
                                </div>
                            </div>
                            <div className="h-max w-full py-5">
                                <button type="submit" className="cursor-pointer text-base py-2 px-3 bg-cta">Post Blog</button>
                            </div>
                        </form>
                    </div>
                    <div className="h-max w-[30%] pl-2">
                        <form onSubmit={(e) => e.preventDefault()} className="h-max w-full">
                            <div className="h-max w-full flex flex-col mb-3">
                                <label htmlFor="addCategory" className="text-text text-base mb-3">Add Category</label>
                                <input type="text" title="add category" className="h-10 w-full border border-grey bg-transparent px-3" id="addCategory" />
                            </div>
                            <button type="submit" className="cursor-pointer text-base py-2 px-3 bg-cta">Submit</button>
                        </form>
                        <form onSubmit={(e) => e.preventDefault()} className="h-max w-full mt-5">
                            <div className="h-max w-full flex flex-col mb-3">
                                <label htmlFor="addCategory" className="text-text text-base mb-3">Delete Category</label>
                                <select name="categoryDel" className="h-10 w-full border border-grey bg-transparent px-3" title="categoryDel" id="categoryDel">
                                    <option value="">-- Select Category --</option>
                                </select>
                            </div>
                            <button type="submit" className="cursor-pointer text-base py-2 px-3 bg-cta">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Page;