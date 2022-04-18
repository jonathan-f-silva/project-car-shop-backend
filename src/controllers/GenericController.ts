import { Request, Response } from 'express';
import GenericService from '../services/GenericService';
import { isError } from '../interfaces/ErrorInterface';

export default class GenericController<T> {
  constructor(
    protected _route: string,
    protected service: GenericService<T>,
  ) { }

  get route() { return this._route; }

  create = async (
    req: Request,
    res: Response,
  ) => {
    const item = await this.service.create(req.body);
    if (isError(item)) {
      const { code, error } = item;
      return res.status(code).send({ error });
    }
    return res.status(201).send(item);
  };

  read = async (_req: Request, res: Response) => {
    const items = await this.service.read();
    return res.json(items);
  };

  readOne = async (req: Request, res: Response) => {
    const item = await this.service.readOne(req.params.id);
    if (isError(item)) {
      const { code, error } = item;
      return res.status(code).send({ error });
    }
    return res.json(item);
  };

  update = async (req: Request, res: Response) => {
    const item = await this.service.update(req.params.id, req.body);
    if (isError(item)) {
      const { code, error } = item;
      return res.status(code).send({ error });
    } return res.json(item);
  };

  delete = async (req: Request, res: Response) => {
    const item = await this.service.delete(req.params.id);
    if (isError(item)) {
      const { code, error } = item;
      return res.status(code).send({ error });
    } return res.status(204).end();
  };
}
