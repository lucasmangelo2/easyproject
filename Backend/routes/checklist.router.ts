import {Router} from '../common/router';
import * as restify from 'restify';

import {NotFoundError} from 'restify-errors';
import { CheckList } from '../models/checklist.model';
import { Task } from '../models/task.model';

class CheckListRouter extends Router {

    constructor(){
        super();
    }

    applyRoutes(application: restify.Server) {

        //#region CheckList

        application.get('/checklist_by_task/:id', (req, resp, next) => {
            let id : string = req.params.id;
            CheckList.find({task_id: id})
                .then(this.render(resp,next))
                .catch(next);
        });

        application.get('/checklist', (req, resp, next) => {
            CheckList.find()
                .then(this.render(resp,next))
                .catch(next);
        });

        application.get('/checklist/:id', (req, resp, next) => {
            let id : string = req.params.id;

            CheckList.findById(id)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.post('/checklist/', (req, resp, next) => {
            let task_id = req.body.task_id;
            if(task_id){
                Task.findById(task_id, (err,document)=>{
                    if(document){
                        let checklist = new CheckList(req.body);
                        checklist.save()
                                .then(this.render(resp,next))
                                .catch(next);
                    }
                    else {
                        resp.status(500)
                        resp.send('Tarefa não encontrada');
                        return next();
                    }
                })
            }
            else {
                resp.status(500)
                resp.send('Tarefa não informada');
                return next();
            }
        });

        application.patch('/checklist/:id', (req, resp, next) => {
            let id : string = req.params.id;
            const options = {new:true, runValidators: true};
            CheckList.findByIdAndUpdate(id ,req.body, options)
            .then(
                this.render(resp,next)
            )
            .catch(next);
        });

        application.del('/checklist/:id', (req,resp,next) =>{
            CheckList.remove({_id: req.params.id})
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

export const checkListRouter = new CheckListRouter();