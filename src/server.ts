import App from './app';
import makeCarRouter from './factories/carRouterFactory';

const server = new App();

server.addRouter(makeCarRouter());

export default server;
