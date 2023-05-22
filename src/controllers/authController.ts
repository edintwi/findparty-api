import {Request, Response} from 'express';
import { User } from '../models/User';

export const  ping = (req: Request, res: Response) =>{
    res.json({
        pong: 'true'
    })
};

export const register = async (req: Request, res: Response) => {
    let {name, email, password} = req.body;

    let newUser = await User.create({name, email, password});

    res.json({id: newUser.id, name, email, password});
};

export const login = (req: Request, res: Response) => {

};
