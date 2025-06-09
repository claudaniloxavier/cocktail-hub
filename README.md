#### [Demo do projeto](https://gaming-hub-delta.vercel.app/games)

## O projeto

### Principais Tecnologias

- React
- Next
- Typescript
- Material UI

### Integrações

- [IGDB API](https://api-docs.igdb.com/#getting-started)

## Rodando o projeto localmente

Este projeto utiliza o node na versão 18.20.5, tenha certeza de o ter na sua maquina.

    $ git clone    https://github.com/claudaniloxavier/gaming-hub.git
    $ cd gaming-hub
    $ npm i

Antes de rodar a aplicação é necessario configurar nosso ambiente. Crie um arquivo .env com as seguintes informações:

    TWITCH_CLIENT_ID=your-twitch-client-id
    TWITCH_CLIENT_SECRET=your-twitch-secret

Para conseguir as suas credenciais da twitch veja a [documentação do IGBD](https://api-docs.igdb.com/#getting-started).

Após configurar tudo, apenas rode:

    $ npm run dev

Se voce fez tudo corretamente, acesse `http://localhost:3000` e veja a aplicação rodando.
