import { Model } from '../interfaces/ModelInterface';
import { Service } from '../interfaces/ServiceInterface';

export default abstract class GenericService<T> implements Service<T> {
  constructor(protected model: Model<T>) { }

  create = async (item: T): Promise<T> => this.model.create(item);

  read = async (): Promise<T[]> => this.model.read();

  abstract readOne(id: string): Promise<T>;

  abstract update(id: string, item: T): Promise<T>;

  abstract delete(id: string): Promise<T>;
}
