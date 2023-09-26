create database joyeriacristallo;
use joyeriacristallo;

create table tabela_cliente (
	idUsuario 				int primary key auto_increment,
    cliente					varchar(100),
    email					varchar(100),
    senha					varchar(100)
);


insert into tabela_cliente ( cliente, email, senha ) 
                        values ( ?, ?, ? )