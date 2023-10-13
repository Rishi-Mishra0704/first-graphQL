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
  Game: {
    reviews(game) {
      return db.reviews.filter((review) => review.game_id === game.id);
    },
  },
  Author: {
    reviews(author) {
      return db.reviews.filter((review) => review.author_id === author.id);
    },
  },
  Review: {
    game(review) {
      return db.games.find((game) => game.id === review.game_id);
    },
    author(review) {
      return db.authors.find((author) => author.id === review.author_id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((game) => game.id !== args.id);
      return db.games;
    },
    addGame(_, args) {
      let newGame = {
        id: Math.floor(Math.random() * 10000),
        ...args.game,
      };
      db.games.push(newGame);
      return newGame;
    },

    deleteAuthor(_, args) {
      db.authors = db.authors.filter((author) => author.id !== args.id);
      return db.authors;
    },

    addAuthor(_, args) {
      let newAuthor = {
        id: Math.floor(Math.random() * 10000),
        ...args.author,
      };
      db.authors.push(newAuthor);
      return newAuthor;
    },

    deleteReview(_, args) {
      db.reviews = db.reviews.filter((review) => review.id !== args.id);
      return db.reviews;
    },

    addReview(_, args) {
      let newReview = {
        id: Math.floor(Math.random() * 10000),
        ...args.review,
      };
      db.reviews.push(newReview);
      return newReview;
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
