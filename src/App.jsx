import { MovieListing } from "./component/MovieListing.jsx";
import {Header} from "./component/Header.jsx";
import Search from "./component/ui/Search.jsx";
import movieData from "./movies.js";
import Modal from "./component/Modal.jsx";
import { useState } from "react";
import Filter from "./component/ui/Filter.jsx";


function App() {
    const[movies, setMovies] = useState(movieData);
    const[search, setSearch] = useState("");
    const[rating, setRating] = useState("");


    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImageUrl] = useState("");
    const [rank, setRank] = useState("");
    const [imdb_score, setImdbScore] = useState("");

    const handleAddMovie = (e) => {
        e.preventDefault()
        if (!title || !year || !description || !image_url || !rank || !imdb_score) return "All form input fields are required";

        const newMovie = {
            title,
            year,
            description,
            image_url,
            rank,
            imdb_score,
        }
        setMovies([...movies, newMovie]);

        setYear("");
        setTitle("");
        setDescription("");
        setImageUrl("");
        setRank("");
        setImdbScore("");
    };

    const filterMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
    })

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

  return (
    <>
        <Header/>
        <main className="container mx-auto px-4">
            <div className="w-full flex justify-between items-center mt-10">
                <Search searchTerm={search} setSearchTerm={setSearch} filteredMovies={filterMovies}  />
                <Filter rating={rating} handleRatingChange={handleRatingChange} />
                <Modal
                    setYear={setYear}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    setImageUrl={setImageUrl}
                    setRank={setRank}
                    setImdbScore={setImdbScore}
                    handleAddMovie={handleAddMovie}/>
            </div>
            <MovieListing movies={filterMovies} />
        </main>
    </>
  )
}

export default App
