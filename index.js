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
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
  },
};
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
