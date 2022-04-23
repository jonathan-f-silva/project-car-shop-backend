import 'express-async-errors';

import App from './app';
import makeCarRouter from './factories/CarRouterFactory';
import makeMotorcycleRouter from './factories/MotorcycleRouterFactory';
import ErrorMiddleware from './utils/ErrorMiddleware';

const server = new App();

server.addRouter(makeCarRouter());
server.addRouter(makeMotorcycleRouter());

server.app.use(ErrorMiddleware);

export default server;
