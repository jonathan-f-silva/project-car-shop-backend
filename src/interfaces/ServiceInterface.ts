import { ResponseInterface } from './ResponseInterface';

export interface Service<T> {
  create: (data: T) => Promise<ResponseInterface>;
  read: () => Promise<T[]>;
  readOne: (id: string) => Promise<ResponseInterface>;
  update: (id: string, data: T) => Promise<ResponseInterface>;
  delete: (id: string) => Promise<ResponseInterface>;
}
