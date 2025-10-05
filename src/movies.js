const movies = [
    {
        "id": 1,
        "title": "Inception",
        "year": 2010,
        "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        "imdb_score": 8.8,
        "rank": 14,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "movie_trailer": "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
        "id": 2,
        "title": "The Dark Knight",
        "year": 2008,
        "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "imdb_score": 9.0,
        "rank": 6,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "movie_trailer": "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        "id": 3,
        "title": "Interstellar",
        "year": 2014,
        "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "imdb_score": 8.6,
        "rank": 17,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        "id": 4,
        "title": "The Matrix",
        "year": 1999,
        "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "imdb_score": 8.7,
        "rank": 16,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
        "id": 5,
        "title": "Pulp Fiction",
        "year": 1994,
        "description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "imdb_score": 8.9,
        "rank": 9,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/s7EdQ4FqbhY"
    },
    {
        "id": 6,
        "title": "The Shawshank Redemption",
        "year": 1994,
        "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "imdb_score": 9.3,
        "rank": 1,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/6hB3S9bIaco"
    },
    {
        "id": 7,
        "title": "The Godfather",
        "year": 1972,
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "imdb_score": 9.2,
        "rank": 2,
        "image_url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "movie_trailer": "https://www.youtube.com/embed/sY1S34973zA"
    },
    {
        "id": 8,
        "title": "The Dark Knight Rises",
        "year": 2012,
        "description": "Eight years after the Joker's reign of anarchy, the Dark Knight, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerril of the gangsters.",
        "imdb_score": 8.9,
        "rank": 3,
        "image_url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        "movie_trailer": "https://www.youtube.com/embed/g8evyE9TuYk"
    },
    {
        "id": 9,
        "title": "The Godfather: Part II",
        "year": 1974,
        "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        "imdb_score": 9.0,
        "rank": 5,
        "image_url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        "movie_trailer": "https://www.youtube.com/embed/9O1Iy9od7-A"
    },
    {
        "id": 10,
        "title": "The Lord of the Rings: The Return of the King",
        "year": 2003,
        "description": "Gandalf and Aragorn lead the World's forces against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "imdb_score": 8.9,
        "rank": 8,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/r5X-hFf6Bwo"
    },
    {
        "id": 11,
        "title": "Fight Club",
        "year": 1999,
        "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
        "imdb_score": 8.8,
        "rank": 12,
        "image_url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        "movie_trailer": "https://www.youtube.com/embed/SUXWAEX2jlg"
    },
    {
        "id": 12,
        "title": "Forrest Gump",
        "year": 1994,
        "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama's Forrest G",
        "imdb_score": 8.8,
        "rank": 13,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg"
    },
    {
        "id": 13,
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": 2001,
        "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "imdb_score": 8.8,
        "rank": 11,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/V75dMMIW2B4"
    },
    {
        "id": 14,
        "title": "The Lord of the Rings: The Two Towers",
        "year": 2002,
        "description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        "imdb_score": 8.7,
        "rank": 15,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/LbfMDwc4azU"
    },
    {
        "id": 15,
        "title": "The Empire Strikes Back",
        "year": 1980,
        "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
        "imdb_score": 8.7,
        "rank": 18,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/JNwNXF9Y6kY"
    },
    {
        "id": 16,
        "title": "The Lion King",
        "year": 1994,
        "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        "imdb_score": 8.5,
        "rank": 24,
        "image_url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        "movie_trailer": "https://www.youtube.com/embed/4sj1MT05lAA"
    },
    {
        "id": 17,
        "title": "Gladiator",
        "year": 2000,
        "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him ",
        "imdb_score": 8.5,
        "rank": 25,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/owK1qxDselE"
    },
    {
        "id": 18,
        "title": "The Green Mile",
        "year": 1999,
        "description": "The lives of guards on Death Row are affected by one of their charges",
        "imdb_score": 8.6,
        "rank": 20,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/KTvSg03nqkA"
    },
    {
        "id": 19,
        "title": "Saving Private Ryan",
        "year": 1998,
        "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "imdb_score": 8.6,
        "rank": 19,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/zwhP5b4tD6g"
    },
    {
        "id": 20,
        "title": "Schindler's List",
        "year": 1993,
        "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution ",
        "imdb_score": 9.0,
        "rank": 4,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/gG22XNhtnoY"
    },
    {
        "id": 21,
        "title": "The Silence of the Lambs",
        "year": 1991,
        "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "imdb_score": 8.6,
        "rank": 21,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/W6Mm8Sbe__o"
    },
    {
        "id": 22,
        "title": "Se7en",
        "year": 1995,
        "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        "imdb_score": 8.6,
        "rank": 22,
        "image_url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2GqRAbc6Xcak2ZYrIdTQGbHyTsl.jpg",
        "movie_trailer": "https://www.youtube.com/embed/znmZoVkCjpI"
    }
    ]

export default movies;