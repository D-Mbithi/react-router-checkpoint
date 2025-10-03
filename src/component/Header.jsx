export function Header() {
    return (
        <>
            <header className="bg-[url('https://static0.moviewebimages.com/wordpress/wp-content/uploads/photo/YBxavPqsmKoTPd3LuWxHbDIG8krk72.jpg')] bg-cover bg-center bg-no-repeat h-[400px] relative">
                <nav className="container mx-auto px-4 py-4 border-b border-slate-200">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center w-full justify-between">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
                                alt="Netflix Logo"
                                className="h-8"
                            />
                            <ul className="hidden md:flex gap-x-2">
                                <li className="">
                                    <a href="#" className="bg-slate-100 rounded hover:bg-cyan-700 py-2 px-5 hover:text-slate-50 dark:text-slate-700 text-slate-700">
                                        Home
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#" className="bg-slate-100 rounded hover:bg-cyan-700 py-2 px-5 hover:text-slate-50 dark:text-slate-800 text-slate-800">
                                        Movies
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#" className="bg-slate-100 rounded hover:bg-cyan-700 py-2 px-5 hover:text-slate-50 dark:text-slate-900 text-slate-900">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section>
                    <div className="container mx-auto px-4 py-10 bg-gradient-to-r from-cyan-400/40 to-slate-800 rounded-lg shadow-lg mt-10 text-slate-50">
                        <h1 className="text-4xl text-center font-bold text-slate-100 py-4">Welcome to Netflix</h1>
                        <p className="text-lg text-center text-slate-50 font-mono leading-0">
                            Your one-stop destination for a world of entertainment, films, TV shows, and more.
                        </p>
                    </div>
                </section>
            </header>
        </>
    )
}
