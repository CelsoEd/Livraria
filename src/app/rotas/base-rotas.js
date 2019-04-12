const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();
//definincoes da rota e da ação da classe controle 
module.exports = (app) => {
    const rotasBase = BaseControlador.rotas();

    app.get(rotasBase.home, baseControlador.home());
    app.post(rotasBase.home, baseControlador.logout());
    
    app.get(rotasBase.quemSomos, baseControlador.quemSomos());
    app.get(rotasBase.estandeLivros,baseControlador.estandeLivros());

    app.route(rotasBase.login)
        .get(baseControlador.login())
        .post(baseControlador.efetuaLogin());
};