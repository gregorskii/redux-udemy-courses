import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import bunyanMiddleware from 'bunyan-middleware';
import routes from './routes';
import { logger } from './interfaces';

const app = express();

// App setup
app.use(bunyanMiddleware(logger));
app.use(bodyParser.json({ type: '*/*' }));

routes(app);

// Server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`Server listening at ${port}`);
});
