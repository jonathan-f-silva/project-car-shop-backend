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

  // private async create(req: Request, res: Response) {
  //   const result = await this.controller.create(req.body);
  //   res.status(201).send(result);
  // }

  private read = async (_req: Request, res: Response) => {
    const result = await this.controller.read();
    res.send(result);
  };

  // private async readOne(req: Request, res: Response) {
  //   const result = await this.controller.readOne(req.params);
  //   res.send(result);
  // }

  // private async update(req: Request, res: Response) {
  //   const result = await this.controller.read();
  //   res.send(result);
  // }

  // private async delete(req: Request, res: Response) {
  //   const result = await this.controller.read();
  //   res.send(result);
  // }

  public setupRoutes() {
    // this.router.post(route, this.create);
    this.router.get(this.route, this.read);
    // this.router.get(`${route}/:id`, this.readOne);
    // this.router.put(`${route}/:id`, this.update);
    // this.router.delete(`${route}/:id`, this.delete);
  }
}
