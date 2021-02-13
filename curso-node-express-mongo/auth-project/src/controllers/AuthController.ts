import UserModel from './../models/User';
import { Request, Response, json } from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt';


class AuthController {
    async store(request: Request, response: Response){
        const {email, password} = request.body;
        
        const user = await UserModel.findOne({email});

        if(!user){
            return response.status(400).json({error: 'Credentials do no match'});
        }

        if(user?.deleted === true) return response.status(401).json({error: 'Disabled user'});


        const checkPassword = await bcryptjs.compare(password, user.password + "");
        if(!checkPassword){
            return response.status(400).json({error: 'Credentials do no match'});
        }

        const {secret, expiresIn} = jwtConfig; 

        const token = jwt.sign({}, secret, {
            subject: String(user._id),
            expiresIn
        })

        return response.status(200).json({user: user.show(), token});
    }
}

export default new AuthController();