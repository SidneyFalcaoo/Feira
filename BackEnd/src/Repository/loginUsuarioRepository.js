import conexao from "./Connection.js";


export async function LogarUsuario(usuario) {
    const comando = `
    insert into tabela_cliente ( cliente, email, senha ) 
                        values ( ?, ?, ? )
            `;

    const [login] = await conexao.query(comando,[
        usuario.nome,
        usuario.email,
        usuario.senha
    ]);

    usuario.id = login.insertId
    return usuario;
};







export async function LoginUsuario(email, senha) {
    const comando = `
        select 	cliente,
                email,
                senha
        from    tabela_cliente
        where	email like ?
        and	    senha like ?
        `;

    const [ dados ] = await conexao.query(comando, [
        email,
        senha
    ]);

    return dados[0];
};