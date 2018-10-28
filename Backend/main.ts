import {Server} from './server/server'
import { userRouter } from './routes/user.router';

import { Router } from './common/router';

import { teamRouter } from './routes/team.router';
import { taksRouter } from './routes/taks.router';
import { stageRouter } from './routes/stage.router';
import { sprintRouter } from './routes/sprint.router';
import { projectRouter } from './routes/project.model';
import { memberRouter } from './routes/member.router';
import { companyRouter } from './routes/company.router';
import { checkListRouter } from './routes/checklist.router';
import { attachmentRouter } from './routes/attachment.router';


const server = new Server();

const routers : Router[] = [
    userRouter,
    teamRouter,
    taksRouter,
    stageRouter,
    sprintRouter,
    projectRouter,
    memberRouter,
    companyRouter,
    checkListRouter,
    attachmentRouter
]

server.bootstrap(routers)
      .then(server => {
          console.log(`Server is listening on: `, server.application.address());
      })
      .catch(error => {
          console.log('Server failed to start');
          console.error(error);

          //server é parado caso ocorra algum erro
          process.exit(1);
      })