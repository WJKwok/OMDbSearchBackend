const { model, Schema } = require('mongoose');

const movieSchema = new Schema({
	Poster: String,
	Title: String,
	Year: String,
	imdbID: String,
	voteCount: Number,
});

module.exports = model('Movie', movieSchema);
