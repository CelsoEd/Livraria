const livroRotas = require('./livro-rotas');
const baseRotas = require('./base-rotas');
//define o arquivo de rotas de cada função
module.exports = (app) => {
    baseRotas(app);
    livroRotas(app);
};