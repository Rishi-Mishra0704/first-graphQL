// global imports
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// local imports
import { typeDefs } from "./schema.js";

import { resolvers } from "./resolvers.js";

// resolvers

// apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// start server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
