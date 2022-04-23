import { Router } from 'express';

import {
  Motorcycle, MotorcycleMongoSchema as schema,
  MotorcycleZodSchema,
} from '../interfaces/MotorcycleInterface';
import { MongoSchema } from '../interfaces/MongooseSchema';
import MongoModel from '../models/MongoModel';
import Service from '../services/Service';
import Controller from '../controllers/Controller';
import ExpressRouter from '../routes/ExpressRouter';

function makeMotorcycleRouter(
  route = '/motorcycles',
  tableName = 'Motorcycle',
): Router {
  const model = new MongoModel<Motorcycle>(
    tableName,
    schema as MongoSchema<Motorcycle>,
  );
  const service = new Service<Motorcycle>(model);
  const controller = new Controller<Motorcycle>(service, MotorcycleZodSchema);
  const expressRouter = new ExpressRouter<Motorcycle>(route, controller);

  return expressRouter.router;
}

export default makeMotorcycleRouter;
