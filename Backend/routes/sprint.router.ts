import {Router} from '../common/router';
import * as restify from 'restify';

import {NotFoundError} from 'restify-errors';
import { Sprint } from '../models/sprint.model';

class SprintRouter extends Router {

    constructor(){
        super();
    }

    applyRoutes(application: restify.Server) {
        application.get('/sprint', (req, resp, next) =>{
            Sprint.find()
                .then(this.render(resp,next))
                .catch(next);
        });

        application.get('/sprint/:id', (req, resp, next) => {
            let id : string = req.params.id;
            Sprint.findById(id)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.post('/sprint',(req, resp,next) => {
            let taks = new Sprint(req.body);

            taks.save()
                .then(this.render(resp,next))
                .catch(next);;
        });

        application.patch('/sprint/:id', (req,resp,next) =>{
            // retorna o objeto alterado
            const options = {new:true, runValidators: true};
            Sprint.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.del('/sprint/:id', (req,resp,next) =>{
            Sprint.remove({_id: req.params.id})
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

export const sprintRouter = new SprintRouter();