import React, { useEffect, useRef, useState } from "react";

const Modal = ({setYear, setImageUrl, setRank, setImdbScore, setDescription, setTitle, handleAddMovie}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const trigger = useRef(null);
    const modal = useRef(null);

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!modalOpen || keyCode !== 27) return;
            setModalOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    // add movie to the list
    return (
        <>
            <div className="py-5">
                <button
                    ref={trigger}
                    onClick={() => setModalOpen(true)}
                    className={`rounded-full bg-slate-600 hover:text-slate-600 hover:bg-slate-100 px-6 py-3 text-base font-medium dark:text-white text-slate-50 border border-slate-600`}
                >
                    Add Movie
                </button>
                <div
                    className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-slate-400/60 bg-dark/90 px-4 py-5 ${
                        modalOpen ? "block" : "hidden"
                    }`}
                >
                    <div
                        ref={modal}
                        className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
                    >
                        <h3 className="pb-[18px] uppercase font-extralight text-xl text-dark text-slate-600 dark:text-slate-600 sm:text-2xl">
                            Add Movie
                        </h3>
                        <form onSubmit={handleAddMovie} className="mb-10 text-left">
                            <div className="mb-6">
                                <label
                                    htmlFor="title"
                                    className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-600 text-left"
                                >Title</label>
                                <input
                                    type="text" id="title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full border border-slate-600 p-3 text-sm text-slate-600 outline-none dark:bg-dark-2 dark:text-slate-600" />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-600 text-left"
                                >Description</label>
                                <textarea
                                    rows="5"
                                    id="description"
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full border border-slate-600 p-3 text-sm text-slate-600 outline-none dark:bg-dark-2 dark:text-slate-600"></textarea>
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="image_url"
                                    className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-600 text-left"
                                >Image URL</label>
                                <input
                                    type="text"
                                    id="image_url"
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    className="w-full border border-slate-600 p-3 text-sm text-slate-600 outline-none dark:bg-dark-2 dark:text-slate-600" />
                            </div>
                            <div className="flex gap-x-1 mb-6">
                                <div className="mb-6">
                                    <label
                                        htmlFor="rank"
                                        className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-600 text-left"
                                    >Rank</label>
                                    <input
                                        type="text"
                                        id="rank"
                                        onChange={(e) => setRank(e.target.value)}
                                        className="w-full border border-slate-600 p-3 text-sm text-slate-600 outline-none dark:bg-dark-2 dark:text-slate-600" />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="imdb_score"
                                        className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-600 text-left"
                                    >IMDB Score</label>
                                    <input
                                        type="text"
                                        id="imdb_score"
                                        onChange={(e) => setImdbScore(e.target.value)}
                                        className="w-full border border-slate-600 p-3 text-sm text-slate-600 outline-none dark:bg-dark-2 dark:text-slate-600" />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="year"
                                        className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-600 text-left"
                                    >Year</label>
                                    <input
                                        type="text" id="year"
                                        onChange={(e) => setYear(e.target.value)}
                                        className="w-full border border-slate-600 p-3 text-sm text-slate-600 outline-none dark:bg-dark-2 dark:text-slate-600" />
                                </div>
                            </div>
                            <div className="-mx-3 flex flex-wrap">
                            <div className="w-1/2 px-3">
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="block w-full border rounded-full border-red-600 text-red-600 p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-red-600"
                                >
                                    Cancel
                                </button>
                            </div>
                            <div className="w-1/2 px-3">
                                <button
                                    type="submit"
                                    className="block w-full rounded-full border hover:bg-slate-600 hover:text-slate-50 border-slate-600 bg-primary p-3 text-center text-base font-medium text-slate-600 transition hover:bg-blue-dark">
                                    Add Movie
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
