//No arquivo templates esta definido as pastas que existe 
//e automaticamente procuram o arquivo index.js que esta 
//definindo as URL de cada pasta, sendo possivel chamar a 
//URL por template. base ou livros. o nome da variavel definido
// no index.js por exemplo, para chamar a pagina home templates.base.home
module.exports = {
    base: require('./base'),
    livros: require('./livros')
}