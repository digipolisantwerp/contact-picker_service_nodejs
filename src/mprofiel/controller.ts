import createService = require('./service');
import { ServiceConfig, ContactItem } from './types';
import { Request, Response, NextFunction } from 'express';

const createController = (config: ServiceConfig) => {
    const service = createService(config);
    return (req: Request, res: Response, next: NextFunction) => {
        const search = req.query.search as string;
        service(search).then((result: ContactItem[]) => {
            res.json(result);
        }).catch((error: any) => {
            next(error);
        });
    }
}

export = createController;
