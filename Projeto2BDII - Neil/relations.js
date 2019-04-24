// ---- RELAÇÕES ARTISTA-ALBUM ----

db.Album.updateMany(
{nome: 
	{$in: ["Maggese", "Il Primo Bacio Sulla Luna", "Più Che Logico"]}}, 
	{$set: {idArtista: ObjectId("5b64a8a5b8ada17a4c631110")}}) //Cesare Cremonini

db.Album.updateMany(
{nome: 
	{$in: ["Liebe ist für alle da", "Sehnsucht"]}}, 
	{$set: {idArtista: ObjectId("5b64a8a5b8ada17a4c631111")}}) // Rammstein

db.Album.updateMany(
{nome: 
	{$in: ["Zaz", "Recto Verso"]}}, 
	{$set: {idArtista: ObjectId("5b64a8a5b8ada17a4c631112")}}) // Zaz

db.Album.updateMany(
{nome: 
	{$in: ["Super Taranta", "Trans-Continental Hustle"]}}, 
	{$set: {idArtista: ObjectId("5b64a8a5b8ada17a4c631113")}}) // Gogol Bordello

db.Album.updateMany(
{nome: 
	{$in: ["Casa 69", "La Finestra", "Mentre tutto scorre", "Amore che torni"]}}, 
	{$set: {idArtista: ObjectId("5b64a8a5b8ada17a4c631114")}}) // Negramaro

// Relacionar álbuns a artista

db.Artista.update(
	{nome: "Cesare Cremonini"},
	{$set: {albuns: [
                ObjectId("5b64a897b8ada17a4c631103"),
                ObjectId("5b64a897b8ada17a4c631104"),
                ObjectId("5b64a897b8ada17a4c631105")
            ]}}
)

db.Artista.update(
	{nome: "Rammstein"},
	{$set: {albuns: [
		ObjectId("5b64a897b8ada17a4c631106"),
		ObjectId("5b64a897b8ada17a4c631107")
            ]}}
)

db.Artista.update(
	{nome: "Zaz"},
	{$set: {albuns: [
		ObjectId("5b64a897b8ada17a4c631108"),
		ObjectId("5b64a897b8ada17a4c631109")
            ]}}
)

db.Artista.update(
	{nome: "Gogol Bordello"},
	{$set: {albuns: [
		ObjectId("5b64a897b8ada17a4c63110a"),
		ObjectId("5b64a897b8ada17a4c63110b")
            ]}}
)

db.Artista.update(
	{nome: "Negramaro"},
	{$set: {albuns: [
		ObjectId("5b64a897b8ada17a4c63110c"),
		ObjectId("5b64a897b8ada17a4c63110d"),
		ObjectId("5b64a897b8ada17a4c63110e"),
		ObjectId("5b64a897b8ada17a4c63110f")
            ]}}
)