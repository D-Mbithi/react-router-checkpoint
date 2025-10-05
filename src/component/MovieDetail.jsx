import React from 'react'
import Movies from "../movies.js";
import { useParams } from 'react-router-dom';
import {Header} from "./Header.jsx";

function MovieDetail() {
    const { id } = useParams();

    const movie = Movies.find((movie) => movie.id === parseInt(id));

    if (!movie) {
        return <div className="container mx-auto px-4 py-10">Movie not found</div>;
    }
  return (

      <>
            <Header />
          <div className="container mx-auto px-4 py-10">
              <div className="max-w-4xl mx-auto p-5 dark:bg-dark-2 rounded-lg shadow-md overflow-hidden">
                  <div className="mt-4 h-full w-full rounded-lg p-4 bg-cyan-700">
                      <iframe width="100%" height="450" src={movie.movie_trailer} title={movie.title} frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen></iframe>
                  </div>
                  <div className="md:flex mt-6">
                      <div className="md:flex-shrink-0">
                          <img className="h-48 w-full object-cover md:h-full md:w-48" src={movie.image_url}
                               alt={movie.title}/>
                      </div>
                      <div className="p-8">
                          <div
                              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{movie.year}</div>
                          <a href="#"
                             className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline">{movie.title}</a>
                          <p className="mt-2 text-gray-500 dark:text-gray-400">{movie.description}</p>
                          <div className="mt-4">
                              <span className="text-yellow-500 font-bold">IMDb Score: {movie.imdb_score}</span>
                              <span className="ml-4 text-gray-600 dark:text-gray-400">Rank: {movie.rank}</span>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default MovieDetail;