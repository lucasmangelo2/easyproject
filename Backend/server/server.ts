import * as restify from 'restify';
import * as mongoose from 'mongoose';

import { rejects } from 'assert';
import { resolve } from 'url';
import { enviroment } from '../common/enviroment';
import { Router } from '../common/router';

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

                // configuração para visualização da query utilizada na requisição
                this.application.use(restify.plugins.queryParser());

                // routes

                for(let router of routers){
                    router.applyRoutes(this.application);
                }

                this.application.listen(enviroment.server.port, ()=>{
                    resolve(this.application);
                });
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