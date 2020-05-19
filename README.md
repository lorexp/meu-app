# Pré-Requisitos

## **Node**

Clique [Aqui](https://nodejs.org/en/) e baixe a versão 12.16.3 LTS.
![image info](./node.png)

Ao final da instalação, abra o CMD ou o Git Bash e verifique se a versão foi instalada corretamente utilizando os seguintes comandos:

```console
$ node -v && npm -v
```

Se tudo ocorreu bem durante a instalação, a saída será assim:

![image info](./version.png)

## Editor

Use o seu editor de preferência, caso não tenho um editor instalado, recomendo o [VSCode](https://code.visualstudio.com/)

# Iniciando um projeto React

Nosso aplicativo será uma página de consulta a API do github, onde entraremos com um nome de usuário e exibiremos suas informações.

## Create-react-app

Escolha um diretório de sua preferência e abra o terminal (ou CMD) e digite o seguinte comando:

```console
$ npx create-react-app meu-app
```

O create-react-app criará todas as pastas e configurações necessárias para darmos inicio ao projeto. Aguarde até o final da execução do comando. A saída no terminal será essa:

![image info](./create-react-app.png)

Logo após, utilizaremos o comando:

```console
$ cd meu-app
```

Teremos a seguinte estrutura:

```
meu-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

Agora instalaremos a biblioteca [AXIOS](https://github.com/axios/axios) para fazermos requisições HTTP.

```console
$ npm i axios
```

Ao final da instalação poderemos dar início ao aplicativo

```console
$ npm start
```

Com isto, abrirá em seu navegador no endereço `localhost:3000` a seguinte página
![image info](./react-rodando.png)

E em seu console:

![image info](./console.png)

### Removendo alguns arquivos no nosso diretório

Removeremos os seguintes arquivos de dentro da pasta `src`:

- App.css
- App.test.js
- index.css
- logo.svg
- setupTests.js

Selecione-os e delete da pasta

![image info](./remover.png)

OPA!!! Algo deu errado.
![image info](./erro_deletar.png)

Fique tranquilo(a), precisamos remover também as importações dentro dos arquivos `App.js` e `index.js`

## `App.js`

## ANTES:

![image info](./app_before.png)

## DEPOIS:

![image info](./app_after.png)

## `index.js`

## ANTES:

![image info](./index_before.png)

## DEPOIS:

![image info](./index_after.png)

### Agora estamos prontos para criarmos nossa primeira página.

![image info](./hello_world.png)

### Dentro da pasta `src` criaremos outras duas pastas chamandas de `views` e `components`, ficando da seguinte forma:

![image info](./src_after.png)
