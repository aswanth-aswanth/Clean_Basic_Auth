import { Request, Response } from 'express';

export const adaptRoute = (controller: any) => {
  return async (req: Request, res: Response) => {
    try {
      const httpRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
      };

      const httpResponse = await controller.handle(httpRequest);

      if (httpResponse.headers) {
        res.set(httpResponse.headers);
      }
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (err) {
      const error = err as Error & { statusCode?: number }; // Type assertion
      const { message, statusCode = 500 } = error;
      res.status(statusCode).json({ error: message });
    }
  };
};
