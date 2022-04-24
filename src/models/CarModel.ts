import { Schema, model as createModel, Document } from 'mongoose';

import { Car } from '../interfaces/CarInterface';
import MongoModel from './MongoModel';

interface CarDocument extends Car, Document { }

const carSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

export default class CarModel extends MongoModel<Car> {
  constructor(model = createModel('Car', carSchema)) {
    super(model);
  }
}
