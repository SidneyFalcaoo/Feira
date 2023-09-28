import { LogarUsuario, LoginUsuario } from "../Repository/loginUsuarioRepository.js";

import { Router } from "express";
const Endpoint = Router();








// Usuario criar um login //
Endpoint.post('/usuario/login', async (req, resp) => {
    try {
        const login = req.body;

        if (!login.nome) throw new Error ('Nome obrigatorio');
        if (!login.email) throw new Error ('Email obrigatorio');
        if (!login.senha) throw new Error ('Senha obrigatorio');

    


        const Logar = await LogarUsuario(login);
        resp.send(Logar);
    } 
    catch (error) {
        resp.status(500).send({ erro: error.message })
    }    
});







Endpoint.post('/usuario/logar', async (req, resp) => {
    try {
        
        const { email, senha } = req.body
        const linha = await LoginUsuario (email, senha);

        resp.send(linha)

    } catch (error) {
        resp.status(500).send({ erro: error.message })
    }
});




export default Endpoint;