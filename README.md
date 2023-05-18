<h1 align="center">AngularDex - FireRed - Uma Pokédex construída com Angular</h1>
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

![AngularDex](snapshots/AngularDex1.png)




![AngularDex](snapshots/AngularDex2.png)



Single Page Application (SPA) construída com a library/framework Angular (ng new nome-do-projeto). O design do app foi inspirado pelo site [https://pokeapi.co](https://pokeapi.co). Bootstrap, Flexbox e media queries foram utilizados na construção do design responsivo (tentativa de fornecer a melhor experiência possível a múltiplas configurações de tela/dispositivos, tanto desktop como mobile, com diferentes resoluções). Seguindo a filosofia do Framework Angular, o app foi constituído através do uso de recursos como modules, components, services e interceptors.

O app foi inicializado/bootstrapped com o comando/environment `ng new project-name` e implantado (deploy) com o GitHub Pages, assistido pelo recurso GitHub Actions.

![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/nothingnothings/AngularDex/master)
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

O ambiente de desenvolvimento (com utilização da ferramenta/environment/worfklow `ng new project-name`):


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
│   ├── extensions.json
│   ├── launch.json
│   └── tasks.json
│
├── snapshots\
│   ├── AngularDex1.png
│   └── AngularDex2.png
│
├── src\
│   │
│   ├── app\
│   │   │
│   │   ├── components\
│   │   │   │
│   │   │   ├── UI\
│   │   │   │   │
│   │   │   │   ├── pokeBall\
│   │   │   │   │   ├── pokeBall.component.html
│   │   │   │   │   ├── pokeBall.component.scss
│   │   │   │   │   └── pokeBall.component.ts
│   │   │   │   │
│   │   │   │   ├── pokedexWrapper\
│   │   │   │   │   ├── pokedexWrapper.component.html
│   │   │   │   │   ├── pokedexWrapper.component.scss
│   │   │   │   │   └── pokedexWrapper.component.ts
│   │   │   │   │
│   │   │   │   ├── spinner\
│   │   │   │   │   ├── spinner.component.html
│   │   │   │   │   └── spinner.component.ts
│   │   │   │   │
│   │   │   │   └── toolbar\
│   │   │   │       │
│   │   │   │       ├── mainNavigation\
│   │   │   │       │   │
│   │   │   │       │   ├── navigationItems\
│   │   │   │       │   │   ├── navigationItems.component.html
│   │   │   │       │   │   ├── navigationItems.component.scss
│   │   │   │       │   │   └── navigationItems.component.ts
│   │   │   │       │   │
│   │   │   │       │   ├── mainNavigation.component.html
│   │   │   │       │   ├── mainNavigation.component.scss
│   │   │   │       │   └── mainNavigation.component.ts
│   │   │   │       │
│   │   │   │       ├── toolbar.component.html
│   │   │   │       ├── toolbar.component.scss
│   │   │   │       └── toolbar.component.ts
│   │   │   │
│   │   │   │
│   │   │   └── errorComponent\
│   │   │       ├── errorComponent.component.html
│   │   │       ├── errorComponent.component.scss
│   │   │       └── errorComponent.component.ts
│   │   │
│   │   │
│   │   ├── interceptors\
│   │   │   └── interceptor.ts
│   │   │
│   │   ├── modules\
│   │   │   ├── pokedex.module.ts
│   │   │   ├── pokemonDetails.module.ts
│   │   │   └── shared.module.ts
│   │   │
│   │   ├── pages\
│   │   │   │
│   │   │   ├── PokedexPage\
│   │   │   │   │
│   │   │   │   ├── pokeSearch\
│   │   │   │   │   ├── pokeSearch.component.html
│   │   │   │   │   └── pokeSearch.component.ts
│   │   │   │   │
│   │   │   │   └── pokedex\
│   │   │   │       │
│   │   │   │       ├── card\
│   │   │   │       │   ├── card.component.html
│   │   │   │       │   ├── card.component.scss
│   │   │   │       │   └── card.component.ts
│   │   │   │       │
│   │   │   │       ├── pokedex.component.html
│   │   │   │       └── pokedex.component.ts
│   │   │   │
│   │   │   │
│   │   │   └── PokemonDetailsPage\
│   │   │       │
│   │   │       ├── pokemonDetailsCard\
│   │   │       │   ├── pokemonDetailsCard.component.html
│   │   │       │   ├── pokemonDetailsCard.component.scss
│   │   │       │   └── pokemonDetailsCard.component.ts
│   │   │       │
│   │   │       ├── pokemonDetails.component.html
│   │   │       └── pokemonDetails.component.ts
│   │   │
│   │   │
│   │   ├── resolvers\
│   │   │   └── pokedex-resolver.service.ts
│   │   │
│   │   ├── services\
│   │   │   ├── loader.service.ts
│   │   │   └── pokedex.service.ts
│   │   │
│   │   ├── types\
│   │   │   ├── navItem.model.ts
│   │   │   ├── pokemon.model.ts
│   │   │   └── simplePokemon.model.ts
│   │   │
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   │
│   ├── assets\
│   │   │
│   │   ├── fonts\
│   │   │   └── Pokemon Solid.ttf
│   │   │
│   │   ├── images\
│   │   │   ├── angular-logo.png
│   │   │   └── github-logo.png
│   │   │
│   │   └── .gitkeep
│   │
│   ├── environments\
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   │
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── browserconfig.xml
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── manifest.json
│   ├── mstile-150x150.png
│   ├── site.webmanifest
│   └── styles.scss
│
├── .editorconfig
├── .gitignore
├── LICENSE
├── README.md
├── angular.json
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```


O output de produção de `npm run build`, que pode ser visualizado no branch`gh-pages` (encarregado da implementação/deployment do app):


```
.\
│
├── assets\
│   │
│   ├── fonts\
│   │   └── Pokemon Solid.ttf
│   │
│   └── images\
│       ├── angular-logo.png
│       └── github-logo.png
│
│
├── .nojekyll
├── 3rdpartylicenses.txt
├── Pokemon Solid.c76e219434a39b20.ttf
├── favicon.ico
├── index.html
├── main.b4397b76ab87e8f1.js
├── polyfills.fca542ed0eca6182.js
├── runtime.363954a89fca85d6.js
└── styles.4522b103f35ddef3.css
```




## Arquivos de Configuração do Projeto (package.json e tsconfig.json)

O arquivo package.json utilizado no projeto:

```
{
  "name": "angular-dex",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build --configuration production --base-href https://nothingnothings.github.io/AngularDex/",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^16.0.0",
    "@angular/common": "^16.0.0",
    "@angular/compiler": "^16.0.0",
    "@angular/core": "^16.0.0",
    "@angular/forms": "^16.0.0",
    "@angular/platform-browser": "^16.0.0",
    "@angular/platform-browser-dynamic": "^16.0.0",
    "@angular/router": "^16.0.0",
    "@types/axios": "^0.14.0",
    "axios": "^1.4.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.13.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^16.0.1",
    "@angular/cli": "~16.0.1",
    "@angular/compiler-cli": "^16.0.0",
    "@types/jasmine": "~4.3.0",
    "jasmine-core": "~4.6.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0",
    "typescript": "~5.0.2"
  }
}


```


O arquivo tsconfig.json utilizado no projeto: 

```

/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}



```

## Instalação/Utilização 


Para usar este projeto, clone-o usando Git:

1. Rode `git clone` para clonar o projeto dentro de seu repositório local Git
2. Rode `npm install` para instalar todas as dependências (`vue`, `angular`, etc)
3. Rode `npm run build` para criar a versão de produção/implementação (production/deployment) do aplicativo (produzido no diretório `/dist/angular-dex`)
4. Sirva os arquivos de produção/implementação localmente ou na web (com a ajuda de algum serviço de hospedagem)
5. Na página "Pokédex", clique/toque no Pokémon cujas características deseja visualizar. Na página "Procurar por um Pokémon", digite o nome do Pokémon que deseja buscar


## Destaques (features)

- Aplicativo página única, sem recarregamentos de página, arquivo HTML único (Angular)
- Aplicativo dividido em diversos componentes, alguns deles utilizados mais de uma única vez, em páginas distintas (filosofia de design da library Angular)
- Design criado com CSS (compilado a partir de arquivos .scss)
- Design responsivo (adaptativo, suporte a dispositivos móveis e desktop) criado com Bootstrap, Flexbox e media queries
- Utilização dos recursos GitHub Actions e GitHub Pages com a ferramenta `ng new project-name` para construir um workflow ininterrupto (transição da fase de desenvolvimento para a fase de produção/implementação). A partir do comando `git push`, o GitHub Actions transfere o conteúdo do branch `master` para dentro do branch `gh-pages`, o qual então implementa/faz deploy do app no endereço https://nothingnothings.github.io/AngularDex/
- Utilização do pacote/ferramenta Axios para a comunicação com o backend "pokeapi.co", que fornece os dados dos Pokémons (nomes, IDs, peso, altura, tipos, abilidades, etc) ao aplicativo Vue
- Utilização de directives da library Angular, como "``*ngIf``", "``*ngFor``", "``[ngClass]``" e "``[ngStyle]``"
- Utilização de recursos da library Vue.js como "``modules``", "``components``", "``services``" e "``interceptors``"
- Spinner customizado de carregamento (pokébola)
- Página de erro customizada, com output da mensagem/motivo do erro ao usuário
- Favicon compatível com diversos dispositivos

