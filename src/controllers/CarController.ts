import { Car } from '../interfaces/CarInterface';
import CarService from '../services/CarService';
import GenericController from './GenericController';

export default class CarController extends GenericController<Car> {
  constructor(
    route = '/cars',
    service = new CarService(),
  ) {
    super(route, service);
  }
}
