import GenericService from '../services/Service';

export default class Controller<T> {
  constructor(
    protected service: GenericService<T>,
  ) { }

  create = async (data: T) => this.service.create(data);

  read = async () => this.service.read();

  readOne = async (id: string) => this.service.readOne(id);

  update = async (id: string, data: T) => this.service.update(id, data);

  delete = async (id: string) => this.service.delete(id);
}
