const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
	type Movie {
		id: ID!
		Poster: String!
		Title: String!
		Year: String!
		imdbID: String!
		voteCount: Int!
	}
	type Query {
		getNominations: [Movie]!
	}
`;

const movies = [
	{
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMTRiMGFjMmMtYTUzOS00N2U4LWJjZDQtNjFjNjg4MTg4YTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
		Title: 'Hellraiser III: Hell on Earth',
		Year: '1992',
		imdbID: 'tt0104409',
		voteCount: 20,
	},
	{
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMGUxZGViMDktOWM5OS00MTlmLTkzZTYtZWJmZGEzNjg1M2ZlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
		Title: 'Jason Goes to Hell: The Final Friday',
		Year: '1993',
		imdbID: 'tt0107254',
		voteCount: 2,
	},
];

const resolvers = {
	Query: {
		getNominations: () => movies,
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
