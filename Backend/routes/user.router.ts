import {Router} from '../common/router';
import * as bcrypt from 'bcrypt';
import * as restify from 'restify';
import { User } from '../models/user.model';


import {NotFoundError} from 'restify-errors';

class UsersRouter extends Router {

    constructor(){
        super();

        // listener do evento beforeRender, é preciso se declarado no constrututor
        this.on('beforeRender', document => {
            document.password = undefined
            // alternativa - delete document.password
        });
    }


    applyRoutes(application: restify.Server) {
        application.get('/users', (req, resp, next) =>{
            User.find()
                .then(this.render(resp,next))
                .catch(next);
        });

        application.get('/users/:id', (req, resp, next) => {
            let id : string = req.params.id;
            User.findById(id)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.post('/users',(req, resp,next) => {
            let user = new User(req.body);

            user.save()
                .then(this.render(resp,next))
                .catch(next);;
        });

        application.post('/users/auth',(req, resp,next) => {
            let user = new User(req.body);

            User.findOne({username: user.username} ,(err, res)  => {
                bcrypt.compare(user.password, res.password, (err_aux, res_aux){
                    if (res_aux){
                        this.render(resp,next);
                    }
                });
            })
        });

        application.patch('/users/:id', (req,resp,next) =>{
            // retorna o objeto alterado
            const options = {new:true, runValidators: true};
            User.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.del('/users/:id', (req,resp,next) =>{
            //seria possível utilizar o método 'User.findByIdAndUpdate', porém, não será necessário enviar o obejto removido
            User.remove({_id: req.params.id})
                .exec()
                .then((cmdResult : any) => {
                    if(cmdResult.result.n){
                        resp.send(204);
                    }
                    else
                        throw new NotFoundError("Documento não encontrado");

                    return next();
                })
                .catch(next);
        });
    }
}

export const userRouter = new UsersRouter();