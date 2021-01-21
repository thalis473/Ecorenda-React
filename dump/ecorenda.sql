CREATE DATABASE ecorenda;
USE ecorenda;

CREATE TABLE usuario(
	id int primary key auto_increment not null,
    nome varchar(100) not null,
    celular varchar(14),
    email varchar(50),
    cpf varchar(15),
    senha varchar(100),
    tipo varchar(100) not null,
    datacadastro date
);

CREATE TABLE material(
	id int primary key auto_increment not null,
    nome varchar(100) not null
);

CREATE TABLE usuario_material(
	id_material int not null,
	id_usuario int not null,
    qtd float,
    unidade varchar(100),
    observacao varchar(100),
    situacao varchar(30),
    valor varchar(100),
    datacadastro date
);

CREATE TABLE endereco(
	id int not null auto_increment primary key,
    id_usuario int not null,
    cep varchar(9),
    logradouro varchar(100),
    numero int,
    bairro varchar(50),
    cidade varchar(50),
    estado varchar(50),
    pontoreferencia varchar(100),
    principal boolean
);

CREATE TABLE agendamento(
	id int not null auto_increment primary key,
    id_usuariodoador int not null,
    id_usuariocatador int not null,
    id_endereco int not null,
    datacoleta date,
    horario varchar(30),
    observacao varchar(255),
    datacadastro date
);


/*inserts*/

insert into usuario (nome, email, senha, tipo,datacadastro) values
('Rayssa','rayssacoosta@gmail.com','1234', 'doador', now()),
('Lucas','lucas.romerovivas@gmail.com','1234', 'catador', now()),
('Thalis','thalisoficial@gmail.com','1234', 'estabelecimento', now());

/*Insert material*/
insert into material (nome) values ('Papelão'),('Plástico');
insert into material (nome) values ('Vidro'),('Alumínio'),('Madeira'),('Eletrônico');

insert into usuario_material (id_material,id_usuario,qtd,unidade,observacao,situacao,valor,datacadastro) values
(1,1,5,'kg',null,'Disponível',null,now()),
(1,2,null,null,null,null,null,now()),
(1,3,1,'kg',null,'Disponível',0.59,now());

insert into usuario_material (id_material,id_usuario,qtd,unidade,observacao,situacao,valor,datacadastro) values
(2,1,3,'kg',null,'Disponível',null,now()),
(3,1,0.5,'kg',null,'Disponível',null,now()),
(4,1,1,'kg',null,'Disponível',null,now()),
(5,1,1,'kg',null,'Disponível',null,now()),
(6,1,1,'kg',null,'Disponível',null,now());

insert into endereco (id_usuario,cep,logradouro,numero,bairro,cidade,estado,pontoreferencia,principal) values
(1,'26265090','Rua Alvorada',2000,'Jd. Alvorada','Nova Iguaçu','RJ','Igreja Universal',true),
(2,'35920000','Rua Bernadino',125,'Nova Era','Nova Iguaçu','RJ',null,true),
(3,'26269784','Estrada de Madureira',1985,'Jd. Alvorada','Nova Iguaçu','RJ','Vovózona',true);

insert into agendamento(id_usuariodoador,id_usuariocatador,id_endereco, datacoleta,horario,observacao,datacadastro) values
(1,2,1,now(),'6:30','Estou a pé',now()),
(1,2,1,now(),'6:35','Estou a pé',now());


/*consultas*/
select * from usuario;
select * from material;
select * from usuario_material;
select * from agendamento;

select usuario.nome, usuario.tipo, material.nome, usuario_material.qtd, usuario_material.unidade, 
usuario_material.observacao, usuario_material.situacao, usuario_material.valor, usuario_material.datacadastro 
from usuario_material 
inner join usuario on usuario_material.id_usuario = usuario.id
inner join material on usuario_material.id_material = material.id;

select doador.nome as Doador, catador.nome as Catador,
concat(endereco.cep, " ", endereco.logradouro, " ", endereco.numero, " ", endereco.bairro, " ", endereco.cidade, " ", endereco.estado) as Endereco,
agendamento.datacoleta, agendamento.horario, agendamento.observacao from agendamento
inner join endereco on agendamento.id_endereco = endereco.id
inner join usuario doador on agendamento.id_usuariodoador = doador.id 
inner join usuario catador on agendamento.id_usuariocatador = catador.id;

/*Procedure*/
DELIMITER $$

CREATE PROCEDURE proc_agendamentoscatador(IN idcatador INT)
BEGIN
select doador.nome as Doador,
agendamento.datacoleta, agendamento.horario,
concat(endereco.cep, " ", endereco.logradouro, " ", endereco.numero, " ", endereco.bairro, " ", endereco.cidade, " ", endereco.estado) as 'Ponto de Encontro',
 agendamento.observacao from agendamento
inner join endereco on agendamento.id_endereco = endereco.id
inner join usuario doador on agendamento.id_usuariodoador = doador.id 
inner join usuario catador on agendamento.id_usuariocatador = catador.id
where catador.id = idcatador
order by agendamento.datacadastro,horario asc;
END $$
DELIMITER ;

call proc_agendamentoscatador(2);

/*AGENDAMENTOS DO CATADOR*/
select * from agendamento 
inner join usuario on agendamento.id_usuariocatador = usuario.id
where agendamento.id_usuariocatador = 2;

/*MATERIAIS DE CADA USUARIO*/
select material.nome,usuario.nome from material
inner join usuario_material on usuario_material.id_material = material.id
inner join usuario on usuario.id = usuario_material.id_usuario;

/*MATERIAIS DOS CATADORES*/
select material.nome,usuario.nome from material
inner join usuario_material on usuario_material.id_material = material.id
inner join usuario on usuario.id = usuario_material.id_usuario
where usuario.tipo = 'catador';

/*perfil usuario*/
select usuario.*, endereco.*, material.nome as material from usuario
inner join endereco on usuario.id = endereco.id_usuario 
inner join usuario_material on usuario_material.id_usuario = usuario.id 
inner join material on usuario_material.id_material = material.id
left join agendamento on agendamento.id_usuariodoador = usuario.id or agendamento.id_usuariocatador = usuario.id
where endereco.principal = true ;
