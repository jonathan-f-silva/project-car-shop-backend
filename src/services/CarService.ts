import { Car, CarSchema } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';
import GenericService from './GenericService';
import ErrorMessages from '../utils/ErrorMessages';

export default class CarService extends GenericService<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (car: Car) => {
    const parsedCar = CarSchema.safeParse(car);
    if (!parsedCar.success) {
      return { code: 400, error: parsedCar.error.toString() };
    }
    return this.model.create(parsedCar.data);
  };

  readOne = async (id: string) => {
    const car = await this.model.readOne(id);
    if (car === null) return { code: 400, error: ErrorMessages.CAR_NOT_FOUND };
    return car;
  };

  update = async (id: string, car: Car) => {
    const parsedCar = CarSchema.safeParse(car);
    if (!parsedCar.success) {
      return { code: 400, error: parsedCar.error.toString() };
    }

    const updatedCar = await this.model.update(id, parsedCar.data);
    if (!updatedCar) return { code: 400, error: ErrorMessages.CAR_NOT_FOUND };
    return updatedCar;
  };

  delete = async (id: string) => {
    const deletedCar = await this.model.delete(id);
    if (!deletedCar) return { code: 400, error: ErrorMessages.CAR_NOT_FOUND };
    return deletedCar;
  };
}
