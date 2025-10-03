import {MovieCard} from "./MovieCard.jsx";

export const MovieListing = ({movies}) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                {movies.map((movie) => (<MovieCard key={movie.title} {...movie}/>))}
            </div>
        </>
    )
}
