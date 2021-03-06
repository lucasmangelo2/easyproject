import * as restify from 'restify';
import * as mongoose from 'mongoose';
import * as corsMiddleware from 'restify-cors-middleware';

import { rejects } from 'assert';
import { resolve } from 'url';
import { enviroment } from '../common/enviroment';
import { Router } from '../common/router';
import { mergePatchBodyParser } from './merge-patch.parser';
import { handlerError } from './error.handler';


export class Server {

    application: restify.Server;

    initializeDb() : mongoose.MongooseThenable{
        // configurando o módulo de Promisse do mongoose
        (<any>mongoose).Promise = global.Promise;

        return mongoose.connect(enviroment.db.url, {
            useMongoClient: true
        });

    }

    initRoutes(routers: Router[]) : Promise<any>{
        return new Promise((resolve, reject) =>{
            try {                
                this.application = restify.createServer({
                    name: 'easy-project-api',
                    version: '1.0.0'
                });

                const corsOptions : corsMiddleware.Options = {
                    //preflightMaxAge:10,
                    origins: ['*'],
                    allowHeaders: ['*'],
                    exposeHeaders:['']
                }

                const cors : corsMiddleware.CorsMiddleware = corsMiddleware(corsOptions);

                this.application.pre(cors.preflight)

                this.application.use(cors.actual)

                // configuração para visualização da query utilizada na requisição
                this.application.use(restify.plugins.queryParser());

                // conversão da body em objeto json
                this.application.use(restify.plugins.bodyParser());

                // merge customizado para requisições patch, com content-type: 'merge-patch+json'
                this.application.use(mergePatchBodyParser); 

                // routes

                for(let router of routers){
                    router.applyRoutes(this.application);
                }

                this.application.listen(enviroment.server.port, ()=>{
                    resolve(this.application);
                });

                this.application.on('restifyError',handlerError)
            }
            catch(error){
                reject(error)
            }
        })
    }

    bootstrap(routers: Router[] = []): Promise<Server>{
        return this.initializeDb().then(()=> 
        this.initRoutes(routers).then(() => this));
    }
}