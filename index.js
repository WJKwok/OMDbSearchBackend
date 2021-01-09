require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const url = process.env.MONGODB_URI;
const PORT = process.env.PORT || 4000;

mongoose
	.connect(url, { useNewUrlParser: true })
	.then(() => {
		console.log('connected to MongoDB');
		return server.listen({ port: PORT });
	})
	.then((res) => {
		console.log(`🚀  Server ready at ${res.url}`);
	})
	.catch((err) => {
		console.error(err);
	});
