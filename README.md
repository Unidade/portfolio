# Site Portolio

Este é o meu site personal destinado a ser uma aglomerado dos meus projetos, descrever meu perfil profissional e minhas habilidades atuais.

## Desenvolvimento do Site

Este site foi criado utilizando Typescript, TailwindCSS e NextJS.
Utiliza a API getStaticProps para pré-renderizar as páginas durante o processo de build. Além de implementar isolamento dos componentes e recursos, facilitando a manutenção.

## Como iniciar

É necessário possuir o [NodeJS](https://nodejs.org/en/) instalado na sua máquina.

Primeiro clone/baixe o repositório, após isso abra algum terminal, na pasta base, execute:

```
npm install
```

Após terminar a instalação, você pode executar um servidor local com o comando, irá iniciar um servidor local, por padrão, no endereço: http://localhost:3000 . Você pode colocar em um navegador web para visualizar o site.

```
npm run dev
```

Para gerar uma build de produção:

```
npm run build
```

## Customização

Caso queira utilizar esse repositório como template para o seu portfólio, comece substituindo os arquivos na pasta ./data/projects e colocar seu projetos seguido o padrão objeto do tipo **_projectInfo_** presente na pasta ./types, import e exportar os projetos no arquivo index.ts presente na pasta ./data/projects.

Depois mude as informações presente nos Componentes **Navbar**, **CurriculoSection**, **ContatoSection**.
