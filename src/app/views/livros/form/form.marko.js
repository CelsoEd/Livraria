// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casa$1.0.0/src/app/views/livros/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/estilo.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo.png\" alt=\"Livraria\" width=\"75\">Livraria Futuro</h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"/\" class=\"login\"><i class=\"fas fa-sign-out-alt\"></i>Logout</a></div></div></div></header><main class=\"conteudoPrincipal\"><div class=\"container\"><h1>Cadastro de livros</h1>");

  if (data.errosValidacao) {
    out.w("<div>");

    var for__20 = 0;

    marko_forEach(data.errosValidacao, function(erro) {
      var keyscope__21 = "[" + ((for__20++) + "]");

      out.w("<div class=\"alert alert-danger\">" +
        marko_escapeXml(erro.param) +
        " - " +
        marko_escapeXml(erro.msg) +
        "</div>");
    });

    out.w("</div>");
  }

  out.w("<form action=\"/livros/form\" method=\"post\">");

  if (data.livro.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.livro.id) +
      "\"></div>");
  }

  out.w("<div class=\"form-group\"><label for=\"titulo\">Titulo:</label><input type=\"text\" id=\"titulo\" name=\"titulo\" value=\"" +
    marko_escapeXmlAttr(data.livro.titulo) +
    "\" placeholder=\"coloque o\r&#10;                            titulo\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"preco\">Preço:</label><input type=\"text\" id=\"preco\" name=\"preco\" placeholder=\"150.25\" value=\"" +
    marko_escapeXmlAttr(data.livro.preco) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"descricao\">Descrição:</label><textarea cols=\"20\" rows=\"10\" id=\"descricao\" name=\"descricao\" placeholder=\"fale sobre o livro\" class=\"form-control\">" +
    marko_escapeXml(data.livro.descricao) +
    "</textarea></div><input type=\"submit\" value=\"Salvar\" class=\"btn btn-primary\"></form></div></main><footer class=\"rodape\"><div class=\"container\"><div><p>Copyright &copy; 2019 - by Larissa Morais and Celso Eduardo</p></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "41");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/casa$1.0.0/src/app/views/livros/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
