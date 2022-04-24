import express from 'express';
import 'express-async-errors';

import { z } from 'zod';

import Controller from '../../controllers/Controller';
import MongoModel from '../../models/MongoModel';
import ExpressRouter from '../../routes/ExpressRouter';
import Service from '../../services/Service';
import ErrorMiddleware from '../../utils/ErrorMiddleware';

export const validID = '62620d6c9162997790a96412';
export const invalidID = '6262';
export const validObject = { name: 'test' };
export const invalidObject = { invalid: true };

export const TestZodSchema = z.object({
  name: z.string(),
});

export type TestType = z.infer<typeof TestZodSchema>;

export const TestMongoSchema = {
  name: String,
}

export const testModel = new MongoModel<TestType>('test', TestMongoSchema);

export const testService = new Service<TestType>(testModel);

export const testController = new Controller<TestType>(testService, TestZodSchema);

export const testRouter = new ExpressRouter('/test', testController);

const app = express();

app.use(express.json());
app.use(testRouter.router);
app.use(ErrorMiddleware);

export { app };
