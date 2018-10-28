import {Router} from '../common/router';
import * as restify from 'restify';
import { Attachment } from '../models/attachment.model';
import { NotFoundError } from 'restify-errors';

class AttachmentRouter extends Router {

    constructor(){
        super();
    }

    applyRoutes(application: restify.Server) {

        //#region CheckList

        application.get('/attachment', (req, resp, next) => {
            Attachment.find()
                .then(this.render(resp,next))
                .catch(next);
        });

        application.get('/attachment/:id', (req, resp, next) => {
            let id : string = req.params.id;

            Attachment.findById(id)
                .then(this.render(resp,next))
                .catch(next);
        });

        application.post('/attachment/', (req, resp, next) => {
            let attachment = new Attachment(req.body);
            
            attachment.save()
                    .then(this.render(resp,next))
                    .catch(next);
        });

        application.patch('/attachment/:id', (req, resp, next) => {
            let id : string = req.params.id;
            const options = {new:true, runValidators: true};
            Attachment.findByIdAndUpdate(id ,req.body, options)
            .then(
                this.render(resp,next)
            )
            .catch(next);
        });

        application.del('/attachment/:id', (req,resp,next) =>{
            Attachment.remove({_id: req.params.id})
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

export const attachmentRouter = new AttachmentRouter();