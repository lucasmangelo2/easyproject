import {Router} from '../common/router';
import * as restify from 'restify';

import {NotFoundError} from 'restify-errors';
import { Member } from '../models/member.model';

class MemberRouter extends Router {

    constructor(){
        super();
    }

    applyRoutes(application: restify.Server) {
        application.get('/member', (req, resp, next) =>{
            Member.find()
                .then(this.render(resp,next))
                .catch(next);
        });

        application.get('/member/:id', (req, resp, next) => {
            let id : string = req.params.id;
            Member.findById(id)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.post('/member',(req, resp,next) => {
            let taks = new Member(req.body);

            taks.save()
                .then(this.render(resp,next))
                .catch(next);;
        });

        application.patch('/member/:id', (req,resp,next) =>{
            // retorna o objeto alterado
            const options = {new:true, runValidators: true};
            Member.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.del('/member/:id', (req,resp,next) =>{
            Member.remove({_id: req.params.id})
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

export const memberRouter = new MemberRouter();