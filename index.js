// global imports
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// local imports
import { typeDefs } from "./schema.js";
import db from "./_db.js";


// resolvers
const resolvers = {
    Query: {
        games() {
            return db.games;
        },
        reviews() {
            return db.reviews;
        },
        authors() {
            return db.authors;
        },
    },

}
// apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers
});


// start server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },

});

console.log(`🚀 Server ready at ${url}`);