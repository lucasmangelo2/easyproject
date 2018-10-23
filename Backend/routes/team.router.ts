import {Router} from '../common/router';
import * as restify from 'restify';

import {NotFoundError} from 'restify-errors';
import { Team } from '../models/team.model';

class TeamRouter extends Router {

    constructor(){
        super();
    }

    applyRoutes(application: restify.Server) {
        application.get('/team', (req, resp, next) =>{
            Team.find()
                .then(this.render(resp,next))
                .catch(next);
        });

        application.get('/team/:id', (req, resp, next) => {
            let id : string = req.params.id;
            Team.findById(id)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.post('/team',(req, resp,next) => {
            let taks = new Team(req.body);

            taks.save()
                .then(this.render(resp,next))
                .catch(next);;
        });

        application.patch('/team/:id', (req,resp,next) =>{
            // retorna o objeto alterado
            const options = {new:true, runValidators: true};
            Team.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.del('/team/:id', (req,resp,next) =>{
            Team.remove({_id: req.params.id})
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

export const teamRouter = new TeamRouter();