import {Router} from '../common/router';
import * as restify from 'restify';

import {NotFoundError} from 'restify-errors';
import { Task } from '../models/task.model';

class TaksRouter extends Router {

    constructor(){
        super();
    }

    applyRoutes(application: restify.Server) {

        //#region Task

        application.get('/task', (req, resp, next) =>{
            Task.find()
                .then(this.render(resp,next))
                .catch(next);
        });

        application.get('/task/:id', (req, resp, next) => {
            let id : string = req.params.id;
            Task.findById(id)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.get('/task_by_stage/:stage_id', (req, resp, next) => {
            let id : string = req.params.stage_id;
            Task.find({"stage._id":id})
                .then(this.render(resp,next))
                .catch(next);
        });

        application.post('/task',(req, resp,next) => {
            let taks = new Task(req.body);

            taks.save()
                .then(this.render(resp,next))
                .catch(next);
        });

        application.patch('/task/:id', (req,resp,next) =>{
            // retorna o objeto alterado
            const options = {new:true, runValidators: true};
            Task.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.del('/task/:id', (req,resp,next) =>{
            Task.remove({_id: req.params.id})
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

        //#endregion
    }
}

export const taksRouter = new TaksRouter();