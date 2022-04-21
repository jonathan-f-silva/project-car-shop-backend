import { Model } from '../interfaces/ModelInterface';

export default class Service<T> {
  constructor(
    protected model: Model<T>,
  ) { }

  create = async (data: T) => this.model.create(data);

  read = async () => this.model.read();

  readOne = async (id: string) => this.model.readOne(id);

  update = async (id: string, data: T) => this.model.update(id, data);

  delete = async (id: string) => this.model.delete(id);
}
