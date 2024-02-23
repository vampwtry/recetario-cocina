import {Request, Response} from 'express';

 export const getRecetas = (req: Request, res: Response) => {
    res.json({
        msg: "Get Recetas"
    })

}