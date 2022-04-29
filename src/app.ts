import cors from 'cors';
import express, { Router } from 'express';

import connectToDatabase from './connection';

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PROTOCOL = process.env.USE_SSL === 'true' ? 'https' : 'http';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase().then(() => {
      this.app.listen(
        PORT,
        () => console.log(
          `Backend running here 👉 ${PROTOCOL}://${HOSTNAME}:${PORT}`,
        ),
      );
    });
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;
