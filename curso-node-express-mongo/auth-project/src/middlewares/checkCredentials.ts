import User  from './../models/User';
import { Response, Request, json } from 'express';
import { verify } from 'jsonwebtoken';
import jwt from '../config/jwt';


export default async function(request: Request, response: Response, next: () => any){
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        return response.status(401).json({error: 'Token is missing'});
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded: any = await verify(token, jwt.secret);

        const id = decoded.sub;

        request.user = id;

        const user = await User.findById(id);

        if(user?.deleted === true) return response.status(401).json({error: 'Disabled user'});

        return next();
    } catch(error)
    {

    }
}