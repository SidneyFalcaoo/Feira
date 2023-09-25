import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import loginUsuarioController from '../Controller/loginUsuarioController.js';

const servidor = express();
servidor.use(express.json())
servidor.use(cors());

servidor.use(loginUsuarioController);

servidor.listen(process.env.PORT,() => console.log('API subiu'));