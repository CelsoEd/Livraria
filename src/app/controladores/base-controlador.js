const LivroControlador = require('./livro-controlador');

const templates = require('../views/templates');
//definição da URL e açoes get, post e put
class BaseControlador {
    //definiçao da URL das rotas
    static rotas() {
        return {
            home: '/',
            login: '/login',
            quemSomos: '/quemSomos',
            estandeLivros: '/estandeLivros'
        };
    }
    //retorna a home
    home() {
        return function(req, resp) {
            resp.marko(
                templates.base.home
            );
        };
    }
    //retorna a pagina quem somos
    quemSomos(){
        return function(req, resp){
            resp.marko(
                templates.base.quemSomos
            );
        };
    }
    //retorna a pagina de livros
    estandeLivros(){
        return function(req, resp){
            resp.marko(
                templates.base.estandeLivros
            );
        };
    }
     //retorna a pagina de login
    login() {
        
        return function(req, resp) {
            resp.marko(templates.base.login);
        };
    }
    //executa a estrategia de login e criação de sessao
    efetuaLogin() {

        return function(req, resp, next) {

            // Lógica de login.
            const passport = req.passport;
            passport.authenticate('local', (erro, usuario, info) => {
                if (info) {
                    return resp.marko(templates.base.login);
                }

                if (erro) {
                    return next(erro);
                }

                req.login(usuario, (erro) => {
                    if (erro) {
                        return next(erro);
                    }

                    return resp.redirect(LivroControlador.rotas().lista);
                });
            })(req, resp, next);
        };
    }
    ///retorna a pagina home
    logout(){
        return function(req, resp){
            const passport = req.passport;

            passport.deserializeUser()
        }
    }

    

}

module.exports = BaseControlador;