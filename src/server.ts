import App from './app';
import CarController from './controllers/CarController';
import { Car } from './interfaces/CarInterface';
import GenericRouter from './routes/GenericRouter';

const server = new App();

const carController = new CarController();

const carRouter = new GenericRouter<Car>();
carRouter.addRoute(carController);

server.addRouter(carRouter.router);

export default server;
