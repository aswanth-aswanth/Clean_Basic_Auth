import express, { Request, Response, NextFunction } from 'express';
import { HttpResponse } from '../../http/helpers/HttpResponse';

const adapter = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch((err: Error) => {
    const { message, statusCode = 500 } = err;
    res.status(statusCode).json(HttpResponse.error(message, statusCode));
  });
};

export default adapter;
