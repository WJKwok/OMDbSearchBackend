const movieResolvers = require('./movies');

module.exports = {
	Query: {
		...movieResolvers.Query,
	},
	Mutation: {
		...movieResolvers.Mutation,
	},
};
