db.Artista.insertMany([{
        nome: "Cesare Cremonini",
        website: "https://www.cesarecremonini.it",
        dataNasc: new Date('Mar 27, 1980'),
        pais: "Itália",
        cidade: "Bologna",
        tipo: {
                integrantes: 1,
                anoCriacao: 2002
              },
        albuns: []
    
},
{
	nome: "Rammstein",
	website: "https://www.rammstein.de/en/",
	pais: "Alemanha",
	tipo: {
	      	integrantes: 6,
		anoCriacao: 1994
	      },
	albuns: []

},
{
	nome: "Zaz",
	website: "https://zazofficial.com/en/",
	dataNasc: new Date ('May 01, 1980'),
	pais: "França",
	cidade: "Tours",
	tipo: {
		integrantes: 1,
		anoCriacao: 2001
	      },
	albuns: []
},
{
	nome: "Gogol Bordello",
	website: "http://www.gogolbordello.com",
	pais: "Estados Unidos",
	tipo: {
	      	integrantes: 8,
		anoCriacao: 1999
	      },
	albuns: []
},
{
	nome: "Negramaro",
	website: "https://www.negramaro.com",
	pais: "Itália",
	tipo: {
		integrantes: 6,
		anoCriacao: 2001
	      },
	albuns: []
}])