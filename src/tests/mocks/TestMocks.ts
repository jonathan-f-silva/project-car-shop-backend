import Controller from '../../controllers/Controller';
import MongoModel from '../../models/MongoModel';
import ExpressRouter from '../../routes/ExpressRouter';
import Service from '../../services/Service';

export type TestType = {};

export const testModel = new MongoModel<TestType>('', {});

export const testService = new Service<TestType>(testModel);

export const testController = new Controller<TestType>(testService);

export const testRouter = new ExpressRouter('/test', testController);
