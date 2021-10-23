import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

//Database Connection
const URL = "mongodb://localhost:27017/graphqlcrud";

mongoose.connect(
  URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("DB CONNECTED")
);
const app = express();
const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.listen(4000, () => console.log("Server UP & RUnning *4000"));
};
startServer()
  .then(() => console.log("Working"))
  .catch((err) => console.log(`Server is closing due to ${err}`));
