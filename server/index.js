let { ApolloServer, gql } = require('apollo-server');

let data = [
  { title: 'FP in JavaScript', category: 'FP'},
  { title: 'RxJS in Action', category: 'FP'},
  { title: 'Speaking JavaScript', category: 'JS'}
];

let typeDefs = gql`
  type Query {
    allBooks(category: BookCategory!): [Book]
  }

  type Book {
    title: String
    category: BookCategory
  }

  enum BookCategory {
    FP
    FRP
    JS
  }
`;


let resolvers = {
  Query: {
    allBooks: (_, args) => data.filter(x => x.category === args.category)
  }
};

let server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(
  ({ url }) => console.log(`GraphQL Server ready at ${ url }`)
);