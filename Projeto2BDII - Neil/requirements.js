/* a) Objetos B�sicos
i. Cole��es (V)
ii. Documentos (V)
*/

// �ndices
db.Album.createIndex({nome: 1})
db.Artista.createIndex({nome: 1})

// Atualiza��es (V)

db.Artista.update(
{nome: "O Teatro M�gico"},
{$set: {
	website: "http://www.oteatromagico.mus.br",
	pais: "Brasil",
	tipo: {
		integrantes: 7,
		anoCriacao: 2003
	},
	albuns: []
	}},
	{upsert: true}
)

db.Album.update(
{nome: "Segundo Ato"},
{$set: {
	ano: 2008,
	idArtista: "",
	genero: ["folk", "mpb", "indie", "rock progressivo"],
	faixas: 19,
	musicas: [
	  {
	    titulo: "Cidad�o de Papel�o",
	    duracao: 4.56
	  },
	  {
	    titulo: "Xan�u N�5",
	    duracao: 4.37
	  }
	]}},
{upsert: true})

// Remo��es
 
db.Album.remove({
	nome: "Segundo Ato"
})

// ----- Consultas diversas ------
// 01 com cole��o inteira
db.Artista.find()

// 01 com contagem de documentos na cole��o
db.Album.count()

// 03 Consultas com filtros diversos sem proje��o
db.Artista.find({pais: {$eq: "It�lia"}})

db.Album.find({faixas: {$gt: 16}})

db.Artista.find({"tipo.integrantes": {$lt: 6}})

// 03 Consultas com filtros diversos e proje��o

db.Album.find({faixas: {$gt: 20}},
{nome: 1, "musicas.titulo": 1, _id: 0})

db.Album.find(
{ genero: {$in: ["tanz-metal", "rock"]}},
{nome: 1, _id: 0})

db.Artista.find({"tipo.anoCriacao": {$lt: 2001}},
                {nome: 1, _id: 0, website: 1, pais: 1}
)

// Consulta com filtro, proje��o e uso de regex
db.Album.find(
{"musicas.titulo": /^[a-z 0-9]+/gi},
{nome: 1, _id: 0}).limit(5)

// Consulta com acesso a array de elementos
db.Album.find(
{"genero.0": "rock"},
{nome: 1, _id: 0}
)

// Consulta com acesso a estrutura embutida
db.Album.find(
{"musicas.titulo": "Wonderlust King"},
{nome: 1, _id: 0, faixas: 1}
)

// Consulta com fun��o de agrega��o
db.Artista.aggregate([
    {$match: {pais: {$ne: null}}},
    {$group: {_id: "$pais", quantidade: {$sum: 1}}}
])

// Consulta que use distinct ou limit
db.Album.find(
{"genero.0": "pop"},
{nome: 1, _id: 0}).limit(3);

// Consulta livre com explica��o --
db.Album.find({"musicas.titulo": /.*En.*/i},
                {_id: 0, idArtista: 0, faixas: 0})