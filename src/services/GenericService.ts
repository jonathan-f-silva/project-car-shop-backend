import { TypeOrError } from '../interfaces/ErrorInterface';
import { Model } from '../interfaces/ModelInterface';
import { Service } from '../interfaces/ServiceInterface';

export default abstract class GenericService<T> implements Service<T> {
  constructor(protected model: Model<T>) { }

  create = async (item: T): Promise<TypeOrError<T>> =>
    this.model.create(item);

  read = async (): Promise<T[]> => this.model.read();

  abstract readOne(id: string): Promise<TypeOrError<T>>;

  abstract update(id: string, item: T): Promise<TypeOrError<T>>;

  abstract delete(id: string): Promise<TypeOrError<T>>;
}
