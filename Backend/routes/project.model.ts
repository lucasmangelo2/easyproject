import {Router} from '../common/router';
import * as restify from 'restify';

import {NotFoundError} from 'restify-errors';
import { Project } from '../models/project.model';

class ProjectRouter extends Router {

    constructor(){
        super();
    }

    applyRoutes(application: restify.Server) {
        application.get('/project', (req, resp, next) =>{
            Project.find()
                .then(this.render(resp,next))
                .catch(next);
        });

        application.get('/project/:id', (req, resp, next) => {
            let id : string = req.params.id;
            Project.findById(id)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.post('/project',(req, resp,next) => {
            let taks = new Project(req.body);

            taks.save()
                .then(this.render(resp,next))
                .catch(next);;
        });

        application.patch('/project/:id', (req,resp,next) =>{
            // retorna o objeto alterado
            const options = {new:true, runValidators: true};
            Project.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.del('/project/:id', (req,resp,next) =>{
            Project.remove({_id: req.params.id})
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

export const projectRouter = new ProjectRouter();