import {Router} from '../common/router';
import * as restify from 'restify';

import {NotFoundError} from 'restify-errors';
import { Stage } from '../models/stage.model';

class StageRouter extends Router {

    constructor(){
        super();
    }

    applyRoutes(application: restify.Server) {
        application.get('/stage', (req, resp, next) =>{
            Stage.find()
                .then(this.render(resp,next))
                .catch(next);
        });

        application.get('/stage/:id', (req, resp, next) => {
            let id : string = req.params.id;
            Stage.findById(id)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.post('/stage',(req, resp,next) => {
            let taks = new Stage(req.body);

            taks.save()
                .then(this.render(resp,next))
                .catch(next);;
        });

        application.patch('/stage/:id', (req,resp,next) =>{
            // retorna o objeto alterado
            const options = {new:true, runValidators: true};
            Stage.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.del('/stage/:id', (req,resp,next) =>{
            Stage.remove({_id: req.params.id})
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

export const stageRouter = new StageRouter();