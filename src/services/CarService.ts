import { Car, CarSchema } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';
import GenericService from './GenericService';
import ErrorMessages from '../utils/ErrorMessages';
import { isError } from '../interfaces/ErrorInterface';

const notFoundError = { code: 404, error: ErrorMessages.OBJECT_NOT_FOUND };

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
    const checkedId = GenericService.checkId(id);
    if (isError(checkedId)) return checkedId;

    const car = await this.model.readOne(id);
    if (car === null) return notFoundError;
    return car;
  };

  update = async (id: string, car: Car) => {
    const checkedId = GenericService.checkId(id);
    if (isError(checkedId)) return checkedId;

    const parsedCar = CarSchema.safeParse(car);
    if (!parsedCar.success) {
      return { code: 400, error: parsedCar.error.toString() };
    }

    const updatedCar = await this.model.update(id, parsedCar.data);
    if (!updatedCar) return notFoundError;
    return updatedCar;
  };

  delete = async (id: string) => {
    const checkedId = GenericService.checkId(id);
    if (isError(checkedId)) return checkedId;

    const deletedCar = await this.model.delete(id);
    if (!deletedCar) return notFoundError;
    return deletedCar;
  };
}
