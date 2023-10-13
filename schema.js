export const typeDefs = `#graphql
    type Game{
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    type Review{
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Author{
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Query{
        games: [Game]
        game(id: ID!): Game
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author
 
    }

    type Mutation{
        deleteGame(id: ID!): [Game]
        addGame(game: GameInput!): Game
        editGame(id: ID!, game: EditGameInput!): Game

        deleteAuthor(id: ID!): [Author]
        addAuthor(author: AuthorInput!): Author

        deleteReview(id: ID!): [Review]
        addReview(review: ReviewInput!): Review
    }
    input GameInput{
        title: String!
        platform: [String!]!
    }

    input AuthorInput{
        name: String!
        verified: Boolean!
    }

    input ReviewInput{
        rating: Int!
        content: String!
        game_id: ID!
        author_id: ID!
    }

    input EditGameInput{
        title: String
        platform: [String!]
    }
`;
