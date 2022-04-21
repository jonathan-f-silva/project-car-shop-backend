import { NextFunction, Request, Response } from 'express';

export enum ErrorMessage {
  OBJECT_NOT_FOUND = 'Object not found',
  SERVER_ERROR = 'Oops! Something wrong is not right!',
}

export enum ErrorType {
  NOT_FOUND = 'NotFoundError',
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export class NotFoundError extends Error {
  name = ErrorType.NOT_FOUND;

  code = HttpStatusCode.NOT_FOUND;

  constructor(message = ErrorMessage.OBJECT_NOT_FOUND) {
    super(message);
  }
}

const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, message } = err;
  switch (name) {
    case ErrorType.NOT_FOUND:
      res.status(HttpStatusCode.NOT_FOUND).send({ message }).end();
      break;

    default:
      console.error(err);
      res.status(500).send({ message: ErrorMessage.SERVER_ERROR }).end();
  }
  next(err);
};

export { errorMiddleware };
