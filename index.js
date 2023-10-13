import { ApolloServer } from "@apollo/server";
import { startStandaloneApolloServer } from "@apollo/server/standalone";

const server = new ApolloServer({});

const { url } = await startStandaloneApolloServer(server, {
  listen: { port: 4000 },

});

console.log(`🚀 Server ready at ${url}`);