import React from 'react'

function Filter({rating, handleRatingChange}) {
    return (
        <>
            <form action="">
                <input
                    type="text"
                    name="filterRating"
                    id="filterRating"
                    value={rating}
                    placeholder="Filter by Rating"
                    onChange={handleRatingChange}
                    className="border-b border-slate-600 p-3 text-sm text-slate-600 outline-none dark:bg-dark-2 dark:text-slate-600" />
                <button type="button" className="bg-cyan-700 text-white px-5 py-2 rounded-full ml-2">
                    Filter
                </button>
            </form>
        </>
    )
}

export default Filter
