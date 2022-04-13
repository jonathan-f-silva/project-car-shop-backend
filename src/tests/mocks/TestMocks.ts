import { Schema, model as createModel, Document } from 'mongoose';
import { Model } from '../../interfaces/ModelInterface';

import MongoModel from '../../models/MongoModel';
import GenericService from '../../services/GenericService';

export type TestType = { name: string; };

export interface TestDocument extends TestType, Document { }

export const testSchema = new Schema<TestDocument>({ name: String });

export class TestMongoModel extends MongoModel<TestType> {
  constructor(model = createModel('TestModel', testSchema)) {
    super(model);
  }
}

export class TestGenericService extends GenericService<TestType> {
  constructor(model = new TestMongoModel()) {
    super(model);
  }
}

export const testMock: TestType = {  name: 'test' };
export const testMockResult = { ...testMock, _id: '123' }
