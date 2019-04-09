const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();

module.exports = (app) => {
    const rotasBase = BaseControlador.rotas();

    app.get(rotasBase.home, baseControlador.home());
    app.get(rotasBase.quemSomos, baseControlador.quemSomos());
    app.get(rotasBase.estandeLivros,baseControlador.estandeLivros());

    app.route(rotasBase.login)
        .get(baseControlador.login())
        .post(baseControlador.efetuaLogin());
};