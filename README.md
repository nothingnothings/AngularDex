<h1 align="center">VueDex - LeafGreen - Uma Pokédex construída com Vue.js</h1>
<p align="center">
  <img src="src/android-chrome-512x512.png" alt="AngularDex-logo" width="120px" height="120px"/>
  <br>
  <i>Este webApp é um exemplo de aplicativo que pode ser construído com o 
    <br>framework JavaScript Angular.</i>
  <br>
</p>

<p align="center">
  <a href="https://nothingnothings.github.io/AngularDex" target="_blank" rel="noreferrer noopener"><strong>https://nothingnothings.github.io/AngularDex</strong></a>
  <br>
</p>




## Introdução

![VueDex](snapshot/AngularDex1.png)




![VueDex](snapshot/AngularDex2.png)



Single Page Application (SPA) construída com a library/framework Angular (ng new nome-do-projeto). O design do app foi inspirado pelo site [https://pokeapi.co](https://pokeapi.co). Bootstrap, Flexbox e media queries foram utilizados na construção do design responsivo (tentativa de fornecer a melhor experiência possível a múltiplas configurações de tela/dispositivos, tanto desktop como mobile, com diferentes resoluções). Seguindo a filosofia do Framework Angular, o app foi constituído através do uso de recursos como modules, components, services e interceptors.

O app foi inicializado/bootstrapped com o comando/environment `ng new project-name` e implantado (deploy) com o GitHub Pages, assistido pelo recurso GitHub Actions.

![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/nothingnothings/AngularDex?style=flat-square)
[![HitCount](https://hits.dwyl.com/nothingnothings/AngularDex.svg?style=flat-square)](http://hits.dwyl.com/nothingnothings/AngularDex)




 
## Tecnologias
 
 Algumas das linguagens e libraries empregadas:
 
 - Node Package Manager (bootstrapping e gerenciamento do aplicativo React)
 - HTML5
 - SASS (para melhor organização das regras de CSS, nested rules, etc)
 - CSS3 (animações, Flexbox, media queries)
 - Angular versão 16 (framework JavaScript, que propõe a estruturação integral do app em Angular modules, components, services e interceptors)
 - Typescript (para a type safety dos objetos recebidos pelos endpoints do backend; Models e Interfaces, etc.)
 - Angular Router (para a navegação entre as diferentes "páginas" do aplicativo)
 - Gerenciamento de state (dois states principais: o central, providenciado pelo service de "pokedex.service.ts", usado nas páginas "Pokedex" e "Procurar por um Pokémon", e o "local", usado  na página "PokemonDetails", acessada pela route "/pokedex/:idDoPokemon")
 - Bootstrap (usado na barra de navegação e no posicionamento geral dos elementos na página, com "container", "row" e "col")
 - Axios (para a comunicação, requests e responses, entre este aplicativo frontend e o backend visado/buscado por ele, os API endpoints disponibilizados pelo domínio "pokeapi.co". Utilizado na página "PokémonDetails")
 - Http Module (usado para a comunicação entre o aplicativo Angular e o backend visado por ele; visto na página "Pokédex")
 
 
## Estrutura de Diretórios do Projeto

O ambiente de desenvolvimento (com utilização da ferramenta/environment/worfklow `npx vue create app`):


```

.\
│
├── .github\
│   │
│   └── workflows\
│       └── publish.yml
│
│
├── .vscode\
│   └── settings.json
│
├── public\
│   │
│   ├── fonts\
│   │   └── Pokemon Solid.ttf
│   │
│   ├── 404.html
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
│
├── snapshot\
│   ├── VueDex1.png
│   └── VueDex2.png
│
├── src\
│   │
│   ├── assets\
│   │   ├── github-logo.png
│   │   └── vue-logo.png
│   │
│   ├── components\
│   │   │
│   │   ├── ErrorComponent\
│   │   │   └── ErrorComponent.vue
│   │   │
│   │   ├── PokeSearch\
│   │   │   └── PokeSearch.vue
│   │   │
│   │   ├── Pokedex\
│   │   │   │
│   │   │   ├── Card\
│   │   │   │   └── Card.vue
│   │   │   │
│   │   │   └── Pokedex.vue
│   │   │
│   │   ├── PokemonDetailsCard\
│   │   │   └── PokemonDetailsCard.vue
│   │   │
│   │   └── layout\
│   │       │
│   │       ├── TheToolbar\
│   │       │   │
│   │       │   ├── MainNavigation\
│   │       │   │   │
│   │       │   │   ├── NavigationItems\
│   │       │   │   │   │
│   │       │   │   │   ├── NavigationItem\
│   │       │   │   │   │   └── NavigationItem.vue
│   │       │   │   │   │
│   │       │   │   │   └── NavigationItems.vue
│   │       │   │   │
│   │       │   │   └── MainNavigation.vue
│   │       │   │
│   │       │   └── TheToolbar.vue
│   │       │
│   │       ├── hocs\
│   │       │   └── PokedexWrapper.vue
│   │       │
│   │       ├── ThePokeBall.vue
│   │       └── TheSpinner.vue
│   │
│   │
│   ├── interfaces\
│   │   ├── Pokemon.ts
│   │   └── SimplePokemon.ts
│   │
│   ├── pages\
│   │   ├── NotFound.vue
│   │   ├── PokedexPage.vue
│   │   ├── PokemonDetails.vue
│   │   └── PokemonSearch.vue
│   │
│   ├── router\
│   │   └── index.ts
│   │
│   ├── styles\
│   │   ├── _card.scss
│   │   ├── _error-component.scss
│   │   ├── _global.scss
│   │   ├── _main-navigation.scss
│   │   ├── _navigation-item.scss
│   │   ├── _navigation-items.scss
│   │   ├── _pokeball.scss
│   │   ├── _pokedex-wrapper.scss
│   │   ├── _pokedex.scss
│   │   ├── _pokemon-details.scss
│   │   └── _toolbar.scss
│   │
│   ├── App.vue
│   ├── main.ts
│   └── shims-vue.d.ts
│
├── tests\
│   │
│   ├── e2e\
│   │   │
│   │   ├── plugins\
│   │   │   └── index.js
│   │   │
│   │   ├── specs\
│   │   │   └── test.js
│   │   │
│   │   ├── support\
│   │   │   ├── commands.js
│   │   │   └── index.js
│   │   │
│   │   └── .eslintrc.js
│   │
│   └── unit\
│       └── example.spec.ts
│
│
├── .dockerignore
├── .gitignore
├── README.md
├── babel.config.js
├── cypress.json
├── package-lock.json
├── package.json
├── tsconfig.json
├── vue.config.js
└── vue.config.ts
```


O output de produção de `npx vue create app`, que pode ser visualizado no branch`gh-pages` (encarregado da implementação/deployment do app):


```
.\
│
├── .vscode\
│   └── settings.json
│
├── css\
│   ├── 214.72065e3b.css
│   ├── 252.efe5c231.css
│   ├── 861.72065e3b.css
│   └── app.87d71669.css
│
├── fonts\
│   ├── Pokemon Solid.c76e2194.ttf
│   └── Pokemon Solid.ttf
│
├── img\
│   ├── github-logo.e4cf49de.png
│   └── vue-logo.ff417bdf.png
│
├── js\
│   ├── 214.d016785f.js
│   ├── 214.d016785f.js.map
│   ├── 252.0154d851.js
│   ├── 252.0154d851.js.map
│   ├── 656.9f743450.js
│   ├── 656.9f743450.js.map
│   ├── 861.1067c55d.js
│   ├── 861.1067c55d.js.map
│   ├── app.0d4014c8.js
│   ├── app.0d4014c8.js.map
│   ├── chunk-vendors.ae3a0b93.js
│   └── chunk-vendors.ae3a0b93.js.map
│
├── .nojekyll
├── 404.html
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
└── manifest.json
```




## Arquivos de Configuração do Projeto (package.json e tsconfig.json)

O arquivo package.json utilizado no projeto:

```
{
  "name": "vue-dex",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test:unit": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "axios": "^1.3.4",
    "core-js": "^3.8.3",
    "gh-pages": "^5.0.0",
    "vue": "^3.2.13",
    "vue-class-component": "^8.0.0-0",
    "vue-router": "^4.0.3",
    "vuex": "^4.0.0"
  },
  "devDependencies": {
    "@types/axios": "^0.14.0",
    "@types/jest": "^27.0.1",
    "@typescript-eslint/eslint-plugin": "^5.4.0",
    "@typescript-eslint/parser": "^5.4.0",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-e2e-cypress": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/cli-plugin-router": "~5.0.0",
    "@vue/cli-plugin-typescript": "~5.0.0",
    "@vue/cli-plugin-unit-jest": "~5.0.0",
    "@vue/cli-plugin-vuex": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "@vue/eslint-config-typescript": "^9.1.0",
    "@vue/test-utils": "^2.0.0-0",
    "@vue/vue3-jest": "^27.0.0-alpha.1",
    "babel-jest": "^27.0.6",
    "cypress": "^9.7.0",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-vue": "^8.0.3",
    "jest": "^27.0.5",
    "lint-staged": "^11.1.2",
    "prettier": "^2.4.1",
    "sass": "^1.32.7",
    "sass-loader": "^12.0.0",
    "ts-jest": "^27.0.4",
    "typescript": "~4.5.5"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/vue3-essential",
      "eslint:recommended",
      "@vue/typescript/recommended",
      "plugin:prettier/recommended"
    ],
    "parserOptions": {
      "ecmaVersion": 2020
    },
    "rules": {},
    "overrides": [
      {
        "files": [
          "**/__tests__/*.{j,t}s?(x)",
          "**/tests/unit/**/*.spec.{j,t}s?(x)"
        ],
        "env": {
          "jest": true
        }
      }
    ]
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead",
    "not ie 11"
  ],
  "jest": {
    "preset": "@vue/cli-plugin-unit-jest/presets/typescript-and-babel"
  },
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": "vue-cli-service lint"
  },
  "prettier": {
    "trailingComma": "es5",
    "tabWidth": 2,
    "singleQuote": true
  }
}

```


O arquivo tsconfig.json utilizado no projeto: 

```

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "useDefineForClassFields": true,
    "sourceMap": true,
    "types": ["webpack-env", "jest"],
    "paths": {
    },
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": ["node_modules"]
}


```

## Instalação/Utilização 


Para usar este projeto, clone-o usando Git:

1. Rode `git clone` para clonar o projeto dentro de seu repositório local Git
2. Rode `npm install` para instalar todas as dependências (`vue`, `axios`, etc)
3. Rode `npm run build` para criar a versão de produção/implementação (production/deployment) do aplicativo (produzido no diretório `/dist`)
4. Sirva os arquivos de produção/implementação localmente ou na web (com a ajuda de algum serviço de hospedagem)
5. Na página "Pokédex", clique/toque no Pokémon cujas características deseja visualizar. Na página "Procurar por um Pokémon", digite o nome do Pokémon que deseja buscar


## Destaques (features)

- Aplicativo página única, sem recarregamentos de página, arquivo HTML único (Vue.js)
- Aplicativo dividido em diversos componentes, alguns deles utilizados mais de uma única vez, em páginas distintas (filosofia de design da library Vue.js)
- Design criado com CSS (compilado a partir de arquivos .scss)
- Design responsivo (adaptativo, suporte a dispositivos móveis e desktop) criado com Bootstrap, Flexbox e media queries
- Utilização dos recursos GitHub Actions e GitHub Pages com a ferramenta `npx vue create app` para construir um workflow ininterrupto (transição da fase de desenvolvimento para a fase de produção/implementação). A partir do comando `git push`, o GitHub Actions transfere o conteúdo do branch `master` para dentro do branch `gh-pages`, o qual então implementa/faz deploy do app no endereço https://nothingnothings.github.io/VueDex/
- Utilização do pacote/ferramenta Axios para a comunicação com o backend "pokeapi.co", que fornece os dados dos Pokémons (nomes, IDs, peso, altura, tipos, abilidades, etc) ao aplicativo Vue
- Utilização de recursos integrais da library Vue.js, como as options "``data(){}``", "``components:{}``", "``methods:{}``", "``computed:{}``", "``watch:{}``" e "``props:{}``"
- Utilização de hooks da library Vue.js, como "``created(){}``" e "``mounted(){}``"
- Spinner customizado de carregamento (pokébola)
- Página de erro customizada, com output da mensagem/motivo do erro ao usuário
- Favicon compatível com diversos dispositivos

