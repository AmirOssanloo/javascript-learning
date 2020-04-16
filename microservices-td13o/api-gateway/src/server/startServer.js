import cookieParser from 'cookie-parser';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import accessEnv from '#root/helpers/accessEnv';
import resolvers from '#root/graphql/resolvers';
import typeDefs from '#root/graphql/typeDefs';
import cors from './cors';

const PORT = accessEnv("PORT", 7000);
const apolloServer = new ApolloServer({ resolvers, typeDefs });
const app = express();

app.use(cookieParser());
app.use(cors);

apolloServer.applyMiddleware({ app, cors: false, path: '/graphql' });

app.listen(PORT, '0.0.0.0', () => {
  console.info(`API gateway listening on ${PORT}`);
});
