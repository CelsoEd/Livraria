// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/Livraria$1.0.0/src/app/views/base/erros/404.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/estilo.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo.png\" alt=\"Livraria\" width=\"75\">Livraria Futuro</h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"/livros\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Administrativo</a></div></div></div></header><main class=\"conteudoPrincipal\"><div class=\"container\"><h1>NOT FOUND</h1><p>Página não encontrada!</p><a href=\"/\">Voltar</a></div></main><footer class=\"rodape\"><div class=\"container\"><div><p>Copyright &copy; 2019 - by Larissa Morais and Celso Eduardo</p></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "25");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/Livraria$1.0.0/src/app/views/base/erros/404.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
