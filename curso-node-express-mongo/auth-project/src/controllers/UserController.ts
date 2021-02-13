import {json, Request, Response} from 'express';
import User from '../models/User';

class UserController {
    async show(request: Request, response: Response) {
        const user = await User.findById(request.user);

        if(!user) {
            return response.status(401).json({error: 'Only authenticade user can be execut this action'});
        }

        return response.status(200).json({user: user.show()});
    }


    async store(request: Request, response: Response){
        const {name, email, password} = request.body;

        const userExist = await User.findOne({email});

        if(userExist) {
            return response.status(400).json({error: 'Email already exists'});
        }

        const user = await User.create({
            name,
            email,
            password
        });

        return response.status(200).json({user : user.show()});
    }

    async update(request: Request, response: Response){
        const {name, email, password} = request.body;
        const user = await User.findById(request.user);

        if(!user){
            return response.status(401).json({error: 'Only authenticated user can execute this action'});
        }        

        if(email && (email !== user.email)) {
            const userExist = await User.findOne({email});
            if(userExist) {
                return response.status(400).json({error: 'Email already exists'});
            }
        }

        if(name) user.name = name;
        if(email) user.email = email;
        if(email) user.password = password;

        await user.save();

        return response.status(200).json({user: user.show()});
    }

    async delete(request: Request, response: Response){
        const user = await User.findById(request.user);

        if(!user){
            return response.status(401).json({error: 'Only authenticated user can execute this action'});
        }

        user.deleted = true;

        await user.save();

        return response.json(204).send();
    }
}

export default new UserController();