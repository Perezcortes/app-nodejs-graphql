const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

// Definición del esquema de GraphQL
const typeDefs = `
  type Query {
    hello: String
  }
`;

// Resolvers para manejar las consultas
const resolvers = {
  Query: {
    hello: () => 'hola mundo',
  },
};

// Configuración del servidor Apollo
const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });
  await server.start();
  server.applyMiddleware({ app }); 
}

module.exports = useGraphql;
