const Movie = require('../../models/Movie');

module.exports = {
	Query: {
		async getNominations() {
			try {
				const movies = await Movie.find().sort({ voteCount: -1 });
				return movies;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
	Mutation: {
		async nominateMovies(_, { movieInputs }) {
			const findMoviesPromise = movieInputs.map((movie) => {
				const { imdbID } = movie;
				return Movie.findOne({ imdbID });
			});
			const movieExistsResults = await Promise.all(findMoviesPromise);

			const updateMoviesPromises = movieExistsResults.map((movie, index) => {
				if (movie) {
					movie.voteCount += 1;
					return movie.save();
				} else {
					const { Poster, Title, Year, imdbID } = movieInputs[index];
					const newMovie = new Movie({
						Poster,
						Title,
						Year,
						imdbID,
						voteCount: 1,
					});
					return newMovie.save();
				}
			});

			const updatedMovies = await Promise.all(updateMoviesPromises);

			return updatedMovies;
		},
	},
};
