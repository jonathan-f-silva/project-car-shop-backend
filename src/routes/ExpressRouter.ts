import { Request, Response, Router } from 'express';
import Controller from '../controllers/Controller';

export default class ExpressRouter<T> {
  public router: Router;

  constructor(
    readonly route: string,
    public controller: Controller<T>,
  ) {
    this.router = Router();
    this.setupRoutes();
  }

  private create = async (req: Request, res: Response) => {
    const result = await this.controller.create(req.body);
    res.status(201).send(result);
  };

  private read = async (_req: Request, res: Response) => {
    const result = await this.controller.read();
    res.send(result);
  };

  private readOne = async (req: Request, res: Response) => {
    const result = await this.controller.readOne(req.params.id);
    res.send(result);
  };

  private update = async (req: Request, res: Response) => {
    const result = await this.controller.update(req.params.id, req.body);
    res.send(result);
  };

  private delete = async (req: Request, res: Response) => {
    await this.controller.delete(req.params.id);
    res.sendStatus(204);
  };

  public setupRoutes() {
    this.router.post(this.route, this.create);
    this.router.get(this.route, this.read);
    this.router.get(`${this.route}/:id`, this.readOne);
    this.router.put(`${this.route}/:id`, this.update);
    this.router.delete(`${this.route}/:id`, this.delete);
  }
}
