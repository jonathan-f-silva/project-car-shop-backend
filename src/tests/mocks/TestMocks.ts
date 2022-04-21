import MongoModel from '../../models/MongoModel';
import Service from '../../services/Service';

export type TestType = {};

export const testModel = new MongoModel<TestType>('', {});

export const testService = new Service<TestType>(testModel);
