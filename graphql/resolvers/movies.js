const Movie = require('../../models/Movie');

module.exports = {
	Query: {
		async getNominations() {
			try {
				const movies = await Movie.find();
				return movies;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
	Mutation: {
		async nominateMovie(_, { movieInput: { Poster, Title, Year, imdbID } }) {
			try {
				let movie = await Movie.findOne({ imdbID });
				if (movie) {
					movie.voteCount += 1;
					return await movie.save();
				} else {
					const newMovie = new Movie({
						Poster,
						Title,
						Year,
						imdbID,
						voteCount: 1,
					});
					return await newMovie.save();
				}
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};
