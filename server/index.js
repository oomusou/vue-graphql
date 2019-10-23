let { ApolloServer, gql } = require('apollo-server');

let data = [
  { title: 'FP in JavaScript', category: 'FP'},
  { title: 'RxJS in Action', category: 'FRP'},
  { title: 'Speaking JavaScript', category: 'JS'}
];

let typeDefs = gql`
  type Query {
    """
    根據書本種類查詢所有書籍
    """
    allBooks(category: BookCategory!): [Book]
  }
  
  """
  書本 type
  """
  type Book {
    """
    書本名稱
    """
    title: String
    """
    書本種類
    """
    category: BookCategory
  }
  
  """
  書本種類 enum
  """
  enum BookCategory {
    """
    函數式編程
    """
    FP
    """
    函數響應編程
    """
    FRP
    """
    JavaScript
    """
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