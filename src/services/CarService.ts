import { Car, CarSchema } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';
import GenericService from './GenericService';

export default class CarService extends GenericService<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = (car: Car) => {
    const parsedCar = CarSchema.safeParse(car);
    
    if (!parsedCar.success) throw parsedCar.error;
    
    return this.model.create(parsedCar.data);
  };

  readOne = async (id: string) => {
    const car = this.model.readOne(id);
    
    if (!car) throw new Error('Car not found');
    
    return car;
  };

  update = async (id: string, car: Car) => {
    const parsedCar = CarSchema.safeParse(car);
    
    if (!parsedCar.success) throw parsedCar.error;
    
    const updatedCar = this.model.update(id, parsedCar.data);
    
    if (!updatedCar) throw new Error('Car not found');
    
    return updatedCar;
  };
}