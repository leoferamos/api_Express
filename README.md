# API Express

A API Express é um projeto de exemplo que demonstra como criar uma API simples usando o <a href="https://nodejs.org/pt-br/docs">Node.js</a> e o framework <a href="https://expressjs.com/pt-br/">Express</a>. Este projeto inclui endpoints para manipular categorias de produtos, produtos e usuários, bem como autenticação básica.

## Tecnologias Utilizadas

- <a href="https://nodejs.org/pt-br/docs">Node.js</a>
- <a href="https://expressjs.com/pt-br/">Express.js</a>
- <a href="https://www.typescriptlang.org"/>TypeScript</a>
- <a href="https://www.npmjs.com/package/bcryptjs">bcryptjs</a>
- <a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a>



## Como Usar

1. Clone este repositório para a sua máquina local.<br>
git clone https://github.com/leoferamos/api_Express<br>

2. Instale as dependências usando o Yarn.<br>
   yarn install<br>
3. Inicie o servidor.<br>
   yarn start<br>
4. Acesse a API em `http://localhost:3000`.

## Rotas da API

### Usuários 
 
- `POST /login`: Autentica um usuário.
 
- `POST /users`: Cria um novo usuário.

- `GET /users`: Lista todos os usuários.

- `DELETE /users/:id`: Remove um usuário.

- `PUT /users/:id`: Edita um usuário.

### Produtos 

- `POST /products`: Cria um novo produto.

- `GET /products`: Lista todos os produtos.

- `DELETE /products/:id`: Remove um produto.

- `PUT /products/:id`: Edita um produto.

### Categorias

- `POST /categories`: Cria uma nova categoria.

- `GET /categories`: Lista todas as categorias.
 
- `DELETE /categories/:id`: Remove uma categoria.

- `PUT /categories/:id`: Edita uma categoria.

## Estrutura de Diretórios

- **src**: Contém o código-fonte da API.
  - **controller**: Controladores para manipular solicitações HTTP.
    - **category**: Controladores para manipular categorias.
      - `CreateCategoryController.ts`: Cria uma nova categoria.
      - `DeleteCategoryController.ts`: Remove uma categoria.
      - `EditCategoryController.ts`: Edita uma categoria.
      - `ListCategoryController.ts`: Lista todas as categorias.
    - **product**: Controladores para manipular produtos.
      - `CreateProductController.ts`: Cria um novo produto.
      - `DeleteProductController.ts`: Remove um produto.
      - `EditProductController.ts`: Edita um produto.
      - `ListProductController.ts`: Lista todos os produtos.
    - **user**: Controladores para manipular usuários.
      - `AuthenticateUserController.ts`: Autentica um usuário.
      - `CreateUserController.ts`: Cria um novo usuário.
      - `DeleteUserController.ts`: Remove um usuário.
      - `EditUserController.ts`: Edita um usuário.
      - `ListUsersController.ts`: Lista todos os usuários.
  - **middleware**: Middlewares da aplicação.
    - `ensureAuthenticated.ts`: Middleware para garantir a autenticação.
  - **service**: Lógica de negócios da aplicação.
    - **category**: Serviços relacionados a categorias.
      - `CreateCategoryService.ts`: Lógica para criar uma categoria.
    - **product**: Serviços relacionados a produtos.
      - `CreateProductService.ts`: Lógica para criar um produto.
    - **user**: Serviços relacionados a usuários.
      - `AuthenticateUserService.ts`: Lógica para autenticar um usuário.
      - `CreateUserService.ts`: Lógica para criar um usuário.
- **routes.ts**: Define as rotas da API e conecta os controladores.
- **server.ts**: Inicializa o servidor Express e configura as rotas.

## Autenticação

Para acessar as rotas protegidas, você precisa incluir um token de autenticação no cabeçalho da solicitação. Use a rota de login para obter um token válido.

## Contribuição

Contribuições para este projeto são bem-vindas. Sinta-se à vontade para enviar um pull request ou abrir uma issue.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).







