// código inspirado em https://app.betrybe.com/course/back-end/mongodb-com-nodejs-e-poo/mongodb-e-poo/91006798-2877-4004-9cf5-d2d72a859272/conteudos/3a09b443-b999-49fe-bcd8-ca2863db53f3/models/13be5bfe-6c23-41f8-a4b1-3d5acfdf1c70?use_case=side_bar

// Como resolver o problema de tipagem do schema do mongoose
// https://github.com/Automattic/mongoose/issues/10046#issuecomment-811194721

import {
  Model as M,
  model as createModel,
  Schema,
  SchemaDefinition,
  SchemaDefinitionType,
} from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

export default class MongoModel<T> implements Model<T> {
  protected schema: Schema<T>;

  protected model: M<T>;

  constructor(
    mongoCollectionName: string,
    mongoSchemaDefinition: SchemaDefinition<SchemaDefinitionType<T>>,
  ) {
    this.schema = new Schema<T>(mongoSchemaDefinition);
    this.model = createModel<T>(mongoCollectionName, this.schema);
  }

  create = async (obj: T): Promise<T> => this.model.create(obj);

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ _id: id });

  update = async (id: string, obj: T): Promise<T | null> =>
    this.model.findByIdAndUpdate(id, obj, { new: true });

  delete = async (id: string): Promise<T | null> =>
    this.model.findByIdAndDelete(id);
}
