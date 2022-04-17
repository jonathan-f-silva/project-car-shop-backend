type ErrorInterface = {
  code: number;
  error: string;
};

export type TypeOrError<T> = T | ErrorInterface;

export type TypeArrayOrError<T> = T[] | ErrorInterface;

// Type Guards
// https://medium.com/ovrsea/checking-the-type-of-an-object-in-typescript-the-type-guards-24d98d9119b0
export function isError<T>(
  item: TypeOrError<T> | TypeArrayOrError<T>,
): item is ErrorInterface {
  if ((item as ErrorInterface).error) { return true; }
  return false;
}

export default ErrorInterface;
