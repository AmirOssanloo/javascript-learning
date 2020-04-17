import cookieParser from 'cookie-parser';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from './cors';
import formatGraphQLErrors from './formatGraphQLErrors';
import accessEnv from '#root/helpers/accessEnv';
import resolvers from '#root/graphql/resolvers';
import typeDefs from '#root/graphql/typeDefs';
import injectSession from './injectSession';

const PORT = accessEnv("PORT", 7000);
const app = express();
const apolloServer = new ApolloServer({
  context: context => context,
  formatError: formatGraphQLErrors,
  resolvers, typeDefs
});

app.use(cookieParser());
app.use(cors);
app.use(injectSession);

apolloServer.applyMiddleware({ app, cors: false, path: '/graphql' });

app.listen(PORT, '0.0.0.0', () => {
  console.info(`API gateway listening on ${PORT}`);
});
