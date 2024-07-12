import { movies } from "./movieFile.js";

//short movie title
const shortMovieTitle = movies.filter((movie) => movie.title.length < 7);
console.log(shortMovieTitle);

//long movie title
const longMovieTitle = movies.filter((movie) => movie.title.length > 20);
console.log(longMovieTitle);

//1980-1989
const filterMovieYears = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
console.log(filterMovieYears);

//extra key "tag"
const movieWithTag = movies.map((movie) => {
  let tag;
  if (movie.rating >= 7) {
    tag = "Good";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    tag = "Average";
  } else if (movie.rating < 4) {
    tag = "Bad";
  }
  return { ...movie, tag: tag }; //spread syntax to include all the key value pairs of movie object
});
console.log(movieWithTag);

//chaining

const moviesWithRating = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(moviesWithRating);

/*const movieWithKeyword = movies.filter(
  (movie) =>
    movie.title.toLowerCase().includes("Surfer".toLowerCase()) ||
    movie.title.toLowerCase().includes("Alien".toLowerCase()) ||
    movie.title.toLowerCase().includes("Benjamin".toLowerCase())
);

console.log(movieWithKeyword);*/

//movies containing keywords

const keyWords = ["Surfer", "Alien", "Benjamin"].map((keyword) =>
  keyword.toLowerCase()
);

const movieWithKeyWord = movies.filter((movie) =>
  keyWords.some((keyword) => movie.title.toLowerCase().includes(keyword))
);

console.log(movieWithKeyWord.length);

//duplicated title
const duplicatedMovieTitle = movies.filter((movie) => {
  const movieWords = movie.title.toLowerCase().split(/\W+/);
  const uniqueWords = new Set(movieWords); //set removes duplicate elements
  return uniqueWords.size !== movieWords.length;
});
console.log(duplicatedMovieTitle);

//avg rating
const sumOfRatings = movies.reduce((sum, movie) => sum + movie.rating, 0);

const avgRating = sumOfRatings / movies.length;
console.log(avgRating);

//total number of good , average and bad movies

let movieRatingCount = {
  goodMovies: 0,
  averageMovies: 0,
  badMovies: 0,
};

movieWithTag.forEach((movie) => {
  if (movie.tag === "Good") {
    movieRatingCount.goodMovies++;
  } else if (movie.tag === "Average") {
    movieRatingCount.averageMovies++;
  } else if (movie.tag === "Bad") {
    movieRatingCount.badMovies++;
  }
});

console.log(movieRatingCount);
