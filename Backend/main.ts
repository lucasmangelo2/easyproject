import {Server} from './server/server'
import { userRouter } from './routes/user.router';

const server = new Server();

server.bootstrap([userRouter])
      .then(server => {
          console.log(`Server is listening on: `, server.application.address());
      })
      .catch(error => {
          console.log('Server failed to start');
          console.error(error);

          //server é parado caso ocorra algum erro
          process.exit(1);
      })