create database ecorenda;

-- ESTRUTURA + QUERIES TAB. USUARIOS
create table usuarios(
	id int auto_increment primary key,
    nome varchar(50) not null,
    atribuicao varchar(30) default 'catador',
    celular varchar(16) default 'não cadastrado',
	telefone varchar(16) default 'não cadastrado',
    email varchar(50) not null,
    senha varchar(50) not null,
    descricao varchar(255) default 'breve descrição do usuário',
    dataCad date default current_timestamp
) default character set utf8;
desc usuarios;
select * from usuarios;
INSERT INTO usuarios(nome, email, senha, atribuicao)
VALUES ('gustavo', 'gustavo@gmail.com', sha1('1234'), 'estabelecimento');

select * from usuarios 
where email = 'gustavo@gmail.com'
and senha = sha1('1234');

truncate usuarios;

-- ESTRUTURA + QUERIES TAB. ENDEREÇOS
create table enderecos(
	idE int auto_increment primary key,
    usuarioId int,
    cep varchar(16) default '00000-000',
    estado varchar(2) default 'na',
	bairro varchar(50) default 'não cadastrado',
    rua varchar(60) default 'não cadastrado',
    num int default '0',
    complemento varchar(100) default 'nenhum complemento'
) default character set utf8;
alter table enderecos
add foreign key(usuarioId)
references usuarios(id);

insert into enderecos(usuarioId, estado, bairro, rua, num)
values(37, 'rj', 'Nova Iguaçu', 'Nossa Senhora de Fátima', '29');

select usuarios.*, enderecos.*
from usuarios join enderecos
on usuarios.id = enderecos.usuarioID;

truncate enderecos;



-- -- ESTRUTURA + QUERIES TAB. MATERIAIS
-- ALUMINIO
create table aluminio(
	idAluminio int auto_increment primary key,
    usuarioId int,
    
    descricao varchar(30) default "não especificado",
    peso decimal(5,3) default null,
    valor decimal(5,2) default 00.00
) default character set utf8;
alter table aluminio
add foreign key(usuarioId)
references usuarios(id);

-- COBRE
create table cobre(
	idCobre int auto_increment primary key,
    usuarioId int,
    
    descricao varchar(30) default "não especificado",
    peso decimal(5,3) default null,
    valor decimal(5,2) default 00.00
) default character set utf8;
alter table cobre
add foreign key(usuarioId)
references usuarios(id);

-- PLASTICO
create table plastico(
	idPlastico int auto_increment primary key,
    usuarioId int,
    
    descricao varchar(30) default "não especificado",
    peso decimal(5,3) default null,
    valor decimal(5,2) default 00.00
) default character set utf8;
alter table plastico
add foreign key(usuarioId)
references usuarios(id);

-- MATERIAIS
create table materiais(
	idM int auto_increment primary key,
    usuarioId int,
    fk_aluminioId int,
    fk_cobreId int,
    fk_plasticoId int,
    constraint fk_aluminioId 
    foreign key(fk_aluminioId) references aluminio(idAluminio),
    constraint fk_cobreId 
    foreign key(fk_cobreId) references cobre(idCobre),
    constraint fk_plasticoId 
    foreign key(fk_plasticoId) references plastico(idPlastico)	
) default character set utf8;   

-- -- ESTRUTURA + QUERIES TAB. AGENDAMENTOS  
CREATE TABLE agendamentos (
	idAgendamento int auto_increment primary key,
    fk_doador int,
    fk_catador int,
    `data` date,
    hora varchar(8),
    material varchar(15),
    quantidade int,
    fk_localizacao int,
    `status` varchar(15) default "PENDENTE",
    constraint fk_doador 
    foreign key(fk_doador) references usuarios(id),
	constraint fk_catador 
    foreign key(fk_catador) references usuarios(id),
	constraint fk_localizacao 
    foreign key(fk_localizacao) references enderecos(idE)
);

select * from usuarios;
update usuarios set email = "lucas@gmail.com" WHERE id=1;

delete from usuarios where id=34;

drop table agendamentos;

-- FAVORITOS
create table favoritos(
	idFav int auto_increment primary key,
    usuarioId int,
    fk_favoritoId int,
    constraint usuarioId 
    foreign key(usuarioId) references usuarios(id),
    constraint fk_favoritoId 
    foreign key(fk_favoritoId) references usuarios(id)
) default character set utf8;

-- FEEDBACK
create table feedback(
	idFeed int auto_increment primary key,
    nome varchar(60),
    email varchar(80),
    msg longtext
) default character set utf8;

    
-- SELECT FINAL DO USUARIO
SELECT usuarios.*, enderecos.*, materiais.*
    FROM usuarios LEFT OUTER JOIN enderecos
    ON usuarios.id = enderecos.usuarioID
	LEFT OUTER JOIN materiais ON usuarios.id = materiais.usuarioID
    WHERE email = "gustavo@gmail.com"
    AND senha = sha1('1234');



DELETE FROM usuarios WHERE id=17;
DELETE FROM enderecos WHERE usuarioID=17;
DELETE FROM materiais WHERE usuarioID=17;
    
SELECT usuarios.nome, usuarios.email, materiais.*
    FROM usuarios 
    LEFT OUTER JOIN materiais
    ON usuarios.id = materiais.usuarioID WHERE
    materiais.tipoAluminio LIKE "a%";    
    
    
    
    
    
    
    
    
    
    

    
    

    
    
    
    
    
    
    
    
    
    
    
    

