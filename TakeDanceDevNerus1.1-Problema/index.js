// Importa os módulos necessários do Express e de outras bibliotecas
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

// Define a porta em que o servidor será executado
const port = 3000;

// Importa o módulo "path" para manipulação de caminhos de arquivo
var path = require("path");

// Cria uma instância do Express
const app = express();

// Define valores de login e senha para fins de demonstração
var login = "admin@gmail";
var pass = "1234";

// Configurações do middleware e configurações do Express

// Configura o uso de sessões com uma chave secreta
app.use(session({ secret: "clone050" }));

// Configura o middleware para analisar dados do corpo das solicitações POST
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do mecanismo de visualização para arquivos HTML usando o EJS (Embedded JavaScript)
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// Configuração para servir arquivos estáticos da pasta "css" quando a URL começar com "/css"
app.use("/css", express.static(path.join(__dirname, "css")));

// Define o local onde as visualizações HTML estão localizadas
app.set("views", path.join(__dirname, "/"));

// Roteamento de solicitações

// Manipula solicitações POST na raiz ("/") do servidor
app.post("/", (req, res) => {
  // Verifica se o email e a senha da solicitação POST correspondem aos valores de login e senha
  if (req.body.email == login && req.body.password == pass) {
    // Se correspondem, define uma variável de sessão para marcar o usuário como logado
    req.session.login = login;
    // Renderiza a página "index" com o login do usuário
    res.render("login", { login: login });
  } else {
    // Se as credenciais não correspondem, renderiza a página "registrar"
    res.render("registrar");
  }
});

app.post("/", (req, res) => {
  if (req.body.login == login && req.body.password == pass) {
    req.session.login = login;
  } else {
    res.render("login");
  }
});

// Manipula solicitações GET na raiz ("/") do servidor
app.get("/", (req, res) => {
  // Verifica se o usuário está logado com base na variável de sessão
  if (req.session.login) {
    // Se estiver logado, renderiza a página "index"
    res.render("index");
    console.log("usuario logado " + req.session.login);
  } else {
    // Se não estiver logado, renderiza a página "registrar"
    res.render("registrar");
  }
});

// Inicia o servidor e ouve na porta especificada
app.listen(port, () => {
  console.log("servidor rodando");
});
