import {Request, Response} from 'express';
import User from '../models/User';
import crypto from 'crypto';
import { addMinutes, isAfter, subMinutes } from 'date-fns';
import Mail from '../helpers/Mail';
import mailConfig from '../config/mail';


class RecoveryController {
    async store(request: Request, response: Response){
        const {email} = request.body;

        console.log(email);

        const user = await User.findOne({email});

        if(!user) {
            return response.status(400).json({error: 'User does not found'});
        }

        const token = crypto.randomBytes(8).toString('hex');
        const exp   = addMinutes(new Date(), 5);

        user.token = token;
        user.expiration = exp;

       
        let result = Mail.sendMail({
            from: mailConfig.from,
            to: user.email,
            subject: "Recuperação de Senha",
            template: 'recovery',
            context: {
                token: user.token
            }
        });

        console.log(result);

        await user.save();

        return response.status(200).send();
    }

    async update(request: Request, response: Response){
        const {token, password} = request.body;

        console.log(token);

        const user = await User.findOne({token});

        if(!user) return response.status(400).json({error: 'Invalid Token'});

        if(isAfter(new Date, Date.parse(user.expiration + ""))){
            return response.status(400).json({error: 'Token expired'});
        }

        user.password = password;
        user.token = "";
        user.expiration = subMinutes(new Date(), 20);

        await user.save();

        return response.status(200).send();
    }
}

export default new RecoveryController();