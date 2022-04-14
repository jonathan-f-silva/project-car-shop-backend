import { Model } from '../interfaces/ModelInterface';
import { Service } from '../interfaces/ServiceInterface';

export default class GenericService<T> implements Service<T> {
  constructor(protected model: Model<T>) { }

  create = async (item: T): Promise<T> => this.model.create(item);

  read = async (): Promise<T[]> => this.model.read();

  readOne = async (id: string): Promise<T | null> => this.model.readOne(id);

  update = async (id: string, item: T): Promise<T | null> =>
    this.model.update(id, item);

  delete = async (id: string): Promise<T | null> =>
    this.model.delete(id);
}
