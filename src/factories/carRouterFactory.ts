import { Router } from 'express';

import {
  Car, CarMongoSchema as schema, CarZodSchema,
} from '../interfaces/CarInterface';
import { MongoSchema } from '../interfaces/MongooseSchema';
import MongoModel from '../models/MongoModel';
import Service from '../services/Service';
import Controller from '../controllers/Controller';
import ExpressRouter from '../routes/ExpressRouter';

function makeCarRouter(route = '/cars', tableName = 'Car'): Router {
  const model = new MongoModel<Car>(tableName, schema as MongoSchema<Car>);
  const service = new Service<Car>(model);
  const controller = new Controller<Car>(service, CarZodSchema);

  const expressRouter = new ExpressRouter<Car>(route, controller);
  return expressRouter.router;
}

export default makeCarRouter;
