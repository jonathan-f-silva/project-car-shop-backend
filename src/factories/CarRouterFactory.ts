import {
  Car,
  CarMongoSchema,
  CarZodSchema,
} from '../interfaces/CarInterface';

import makeRouter from './RouterFactory';

function makeCarRouter() {
  return makeRouter<Car>({
    route: '/cars',
    tableName: 'Cars',
    zodSchema: CarZodSchema,
    mongooseSchema: CarMongoSchema,
  });
}

export default makeCarRouter;
