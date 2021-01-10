const { gql } = require('apollo-server');

module.exports = gql`
	type Movie {
		id: ID!
		Poster: String!
		Title: String!
		Year: String!
		imdbID: String!
		voteCount: Int!
	}
	input MovieInput {
		Poster: String!
		Title: String!
		Year: String!
		imdbID: String!
	}
	type Query {
		getNominations: [Movie]!
	}
	type Mutation {
		nominateMovies(movieInputs: [MovieInput]!): [Movie]!
	}
`;

//nominateMovies(movieInputs: [MovieInput]!): [Movie]!
