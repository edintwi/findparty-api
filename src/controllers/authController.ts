import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User';

export const  ping = (req: Request, res: Response) =>{
    res.json({
        pong: 'true'
    })
};

export const register = async (req: Request, res: Response) => {

    let {userName, name, email, password} = req.body;

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    password = hash;
    
    let newUser = await User.create({ userName, name, email, password});

    res.json({id: newUser.id,userName, name, email, password});
};

export const login = (req: Request, res: Response) => {

};
