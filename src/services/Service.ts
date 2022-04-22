import { Model } from '../interfaces/ModelInterface';

export default class Service<T> {
  constructor(
    protected model: Model<T>,
  ) { }

  create = async (data: T): Promise<T> => this.model.create(data);

  read = async (): Promise<T[]> => this.model.read();

  readOne = async (id: string): Promise<T | null> => this.model.readOne(id);

  update = async (id: string, data: T): Promise<T | null> =>
    this.model.update(id, data);

  delete = async (id: string): Promise<T | null> => this.model.delete(id);
}
