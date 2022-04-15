import { Schema, model as createModel, Document } from 'mongoose';
import { Model } from '../../interfaces/ModelInterface';

import MongoModel from '../../models/MongoModel';
import GenericService from '../../services/GenericService';

export type TestType = { name: string; };

export interface TestDocument extends TestType, Document { }

export const testSchema = new Schema<TestDocument>({ name: String });

const notFoundError = new Error('Item Not found');

export class TestMongoModel extends MongoModel<TestType> {
  constructor(model = createModel('TestModel', testSchema)) {
    super(model);
  }
}

export class TestGenericService extends GenericService<TestType> {
  constructor(model = new TestMongoModel()) {
    super(model);
  }

  readOne = async (id: string) => {
    const item = await this.model.readOne(id);
    if (!item) throw notFoundError;
    return item;
  }

  update = async (id: string, item: TestType) => {
    const updatedItem = await this.model.update(id, item);
    if (!updatedItem) throw notFoundError;
    return updatedItem;
  };

  delete = async (id: string) => {
    const deletedItem = await this.model.delete(id);
    if (!deletedItem) throw notFoundError;
    return deletedItem;
  }
} 

export const testMock: TestType = {  name: 'test' };
export const testMockResult = { ...testMock, _id: '123' }
