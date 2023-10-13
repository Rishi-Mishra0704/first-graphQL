import { ApolloServer } from "@apollo/server";
import { startStandaloneApolloServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

const server = new ApolloServer({
    typeDefs,
});

const { url } = await startStandaloneApolloServer(server, {
  listen: { port: 4000 },

});

console.log(`🚀 Server ready at ${url}`);