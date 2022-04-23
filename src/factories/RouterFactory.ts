import { Router } from 'express';
import { ZodSchema } from 'zod';

import { MongooseSchema } from '../interfaces/MongooseSchema';
import MongoModel from '../models/MongoModel';
import Controller from '../controllers/Controller';
import Service from '../services/Service';
import ExpressRouter from '../routes/ExpressRouter';

type RouterParams<T> = {
  route: string,
  tableName: string,
  zodSchema: ZodSchema<T>,
  mongooseSchema: MongooseSchema<T>,
};

export default function makeRouter<T>(
  { route, tableName, zodSchema, mongooseSchema }: RouterParams<T>,
): Router {
  const model = new MongoModel<T>(tableName, mongooseSchema);
  const service = new Service<T>(model);
  const controller = new Controller<T>(service, zodSchema);
  const expressRouter = new ExpressRouter<T>(route, controller);

  return expressRouter.router;
}
