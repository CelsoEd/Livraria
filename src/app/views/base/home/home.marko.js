// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/Livraria$1.0.0/src/app/views/base/home/home.marko",
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

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo.png\" alt=\"Livraria\" width=\"75\">Livraria Futuro</h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"/livros\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Administrativo</a></div></div></div></header><div class=\"container\" id=\"menuPrincipal\"><nav id=\"menu\"><ul><li id=\"menuT\"><a href=\"/\">Home</a></li><li id=\"menuT\"><a href=\"/QuemSomos\">Quem Somos</a></li><li id=\"menuT\"><a href=\"/estande\">Estande de Livros</a></li><li id=\"menuT\"><a href=\"/estandeLivros\">Lançamentos</a></li></ul></nav></div><main class=\"conteudoPrincipal\"><div class=\"container\"><div class=\"cabecalho-artigo\"><h3>Artigo > Cultura de ler</h3><h1>5 motivos que explicam por que ler é importante</h1><h3>05 de Abril de 2019</h3></div><p>O hábito da leitura pode nos trazer diversos benefícios essenciais para nosso desenvolvimento. Confira 5 motivos que explicam por que ler é importante: </p><h2>1. Falar sobre diversos assuntos</h2><p> Ao ler com frequência, você passa a ampliar seu conhecimento sobre diversos tipos de conteúdo, desde fatos reais até histórias de ficção. Com isso, você expande sua capacidade de compreensão e se torna capaz de trazer assuntos diferentes às conversas, o que provavelmente fará com que você se sinta mais criativo.</p><figure class=\"foto_legenda\"><img src=\"/estatico/imagens/assuntos.jpg\"><figcaption><h2>Uma nova maneira de ver o mundo</h2></figcaption></figure><h2>2. Encontrar empregos melhores</h2><p>Com um conhecimento mais amplo sobre diversos assuntos, você terá mais chance de ser bem-sucedido com as oportunidades de emprego encontrar. Uma pessoa culta que mostra ter vontade de manter-se aprendendo constantemente tem mais chances de se destacar entre os candidatos a uma vaga, conquistando os recrutadores.</p><figure class=\"foto_legenda\"><img src=\"/estatico/imagens/emprego.jpg\"><figcaption><h2>Uma nova maneira de ver o mundo</h2></figcaption></figure><h2>3. Melhorar a memória</h2><p>Quanto mais livros você ler, maior será sua compreensão. Ao entender a importância de um assunto e o motivo pelo qual ele é importante, você se lembrará dele com mais clareza, fazendo com que sua memória seja aprimorada.</p><figure class=\"foto_legenda\"><img src=\"/estatico/imagens/memoria.jpg\"><figcaption><h2>Uma nova maneira de ver o mundo</h2></figcaption></figure><h2>4. Aprimorar a capacidade de aprendizado</h2><p>Se você costuma ser desatendo ao realizar suas tarefas, passar a ler mais pode ajudar. Seu interesse por assuntos diversos aumentará e você se sentirá mais motivado a procurar por novas informações, aprimorando seu aprendizado.</p><figure class=\"foto_legenda\"><img src=\"/estatico/imagens/aprender.jpg\"><figcaption><h2>Uma nova maneira de ver o mundo</h2></figcaption></figure><h2>5. Diminuir o estresse</h2><p>Realizar diversas tarefas ao mesmo tempo devido à falta de atenção é uma atitude estressante, principalmente porque essas atividades fragmentadas normalmente são concluídas de maneira incompleta e inadequada. Como a leitura aumentará o seu foco, você deixará esse hábito de lado, fazendo com que você se sinta mais relaxado por ter mais concentração, assim como acontece na meditação.</p><figure class=\"foto_legenda\"><img src=\"/estatico/imagens/stress.jpg\"><figcaption><h2>Uma nova maneira de ver o mundo</h2></figcaption></figure></div></main><footer class=\"rodape\"><div class=\"container\"><div><p>Copyright &copy; 2019 - by Larissa Morais and Celso Eduardo</p></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "68");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/Livraria$1.0.0/src/app/views/base/home/home.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
