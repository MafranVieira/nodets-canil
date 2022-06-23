import { Request, Response } from "express";

import {Pet} from '../models/pet';
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
    let query:string = req.query.q as string;

    !query ? res.redirect('/'):false;

    let list = Pet.getFromName(query);

    res.render('pages/page',{
        menu: createMenuObject(''),
        list,
        query
    });
}