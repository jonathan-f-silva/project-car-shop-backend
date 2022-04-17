import { TypeOrError } from './ErrorInterface';

export interface Service<T> {
  create: (data: T) => Promise<TypeOrError<T>>;
  read: () => Promise<T[]>;
  readOne: (id: string) => Promise<TypeOrError<T>>;
  update: (id: string, data: T) => Promise<TypeOrError<T>>;
  delete: (id: string) => Promise<TypeOrError<T>>;
}
