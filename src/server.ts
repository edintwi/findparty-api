import express, {Request, Response} from "express";
import cors from 'cors';
import path from  "path";
import dotenv from 'dotenv';
import apiRoutes from './routes/auth';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.static(path.join(__dirname,'../public)')));
server.use(express.urlencoded({ extended: true }));

server.use('/auth', apiRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint not found'});
})


server.listen(process.env.PORT);
console.log('Server listening on port ' + process.env.PORT);