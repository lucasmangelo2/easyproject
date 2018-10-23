import {Router} from '../common/router';
import * as restify from 'restify';

import {NotFoundError} from 'restify-errors';
import { Company } from '../models/company.model';

class CompanyRouter extends Router {

    constructor(){
        super();
    }

    applyRoutes(application: restify.Server) {
        application.get('/company', (req, resp, next) =>{
            Company.find()
                .then(this.render(resp,next))
                .catch(next);
        });

        application.get('/company/:id', (req, resp, next) => {
            let id : string = req.params.id;
            Company.findById(id)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.post('/company',(req, resp,next) => {
            let taks = new Company(req.body);

            taks.save()
                .then(this.render(resp,next))
                .catch(next);;
        });

        application.patch('/company/:id', (req,resp,next) =>{
            // retorna o objeto alterado
            const options = {new:true, runValidators: true};
            Company.findByIdAndUpdate(req.params.id, req.body, options)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.del('/company/:id', (req,resp,next) =>{
            Company.remove({_id: req.params.id})
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

export const companyRouter = new CompanyRouter();