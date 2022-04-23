import {
  Motorcycle,
  MotorcycleMongoSchema,
  MotorcycleZodSchema,
} from '../interfaces/MotorcycleInterface';

import makeRouter from './RouterFactory';

function makeMotorcycleRouter() {
  return makeRouter<Motorcycle>({
    route: '/motorcycles',
    tableName: 'Motorcycles',
    zodSchema: MotorcycleZodSchema,
    mongooseSchema: MotorcycleMongoSchema,
  });
}

export default makeMotorcycleRouter;
