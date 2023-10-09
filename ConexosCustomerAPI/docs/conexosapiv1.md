# conexos-api-v1

Modelo de dados

Order

Descrição: Representa um pedido de cliente.

Campos:

id (Tipo: Inteiro, Autoincremento)

Descrição: Identificador único do pedido.

nome (Tipo: String, Máximo de 255 caracteres)

Descrição: Nome do cliente.

cpf (Tipo: String, Máximo de 20 caracteres, Único)

Descrição: CPF do cliente.

telefone (Tipo: String, Máximo de 20 caracteres)

Descrição: Número de telefone do cliente.

plano (Tipo: String, Máximo de 100 caracteres)

Descrição: Plano escolhido pelo cliente.

email (Tipo: String, Máximo de 100 caracteres)

Descrição: Endereço de e-mail do cliente.

horario (Tipo: String, Máximo de 100 caracteres)

Descrição: Horário do pedido.

status (Tipo: String, Máximo de 100 caracteres)

Descrição: Status do pedido.

User

Descrição: Representa um usuário.

Campos:

id (Tipo: Inteiro, Autoincremento)

Descrição: Identificador único do usuário.

nome (Tipo: String, Máximo de 35 caracteres)

Descrição: Nome do usuário.

codigoAcesso (Tipo: String, Máximo de 35 caracteres)

Descrição: Código de acesso único do usuário.

senha (Tipo: String, Máximo de 100 caracteres)

Descrição: Senha do usuário (criptografada).

Controladores

OrderController

Descrição: Controla operações relacionadas a pedidos.

Métodos Disponíveis:

getAll

Descrição: Recupera todos os pedidos.

Método HTTP: GET

Endpoint: /orders

Resposta de Sucesso: Código de Status 200 e lista de pedidos.

Resposta de Erro: Código de Status 500 em caso de erro interno.

getByID

Descrição: Recupera um pedido por ID.

Método HTTP: GET

Endpoint: /orders/:id

Parâmetros de URL: id (ID do pedido)

Resposta de Sucesso: Código de Status 200 e detalhes do pedido.

Resposta de Erro: Código de Status 404 se o pedido não for encontrado, código de Status 500 em caso de 
erro interno.


createOrder

Descrição: Cria um novo pedido.

Método HTTP: POST

Endpoint: /orders

Corpo da Solicitação: Dados do pedido (nome, cpf, telefone, email, plano, horário, status).

Resposta de Sucesso: Código de Status 201 e mensagem de sucesso.

Resposta de Erro: Código de Status 500 em caso de erro interno.

updateOrder

Descrição: Atualiza um pedido por ID.

Método HTTP: PUT

Endpoint: /orders/:id

Parâmetros de URL: id (ID do pedido)

Corpo da Solicitação: Dados atualizados do pedido (nome, cpf, telefone, email, plano, horário, status).

Resposta de Sucesso: Código de Status 200 e mensagem de sucesso.

Resposta de Erro: Código de Status 404 se o pedido não for encontrado, código de Status 500 em caso de erro interno.

deleteOrder

Descrição: Exclui um pedido por ID.

Método HTTP: DELETE

Endpoint: /orders/:id

Parâmetros de URL: id (ID do pedido)

Resposta de Sucesso: Código de Status 204 (Sem conteúdo) e mensagem de sucesso.

Resposta de Erro: Código de Status 404 se o pedido não for encontrado, código de Status 500 em caso de erro interno.

UserController

Descrição: Controla operações relacionadas a usuários.

Métodos Disponíveis:

createUser

Descrição: Cria um novo usuário.

Método HTTP: POST

Endpoint: /users

Corpo da Solicitação: Dados do usuário (nome, código de acesso, senha).

Resposta de Sucesso: Código de Status 201 e mensagem de sucesso.

Resposta de Erro: Código de Status 500 em caso de erro interno.

getAll

Descrição: Recupera todos os usuários.

Método HTTP: GET

Endpoint: /users

Resposta de Sucesso: Código de Status 200 e lista de usuários.

Resposta de Erro: Código de Status 500 em caso de erro interno.

getById

Descrição: Recupera um usuário por ID.

Método HTTP: GET

Endpoint: /users/:id

Parâmetros de URL: id (ID do usuário)

Resposta de Sucesso: Código de Status 200 e detalhes do usuário.

Resposta de Erro: Código de Status 404 se o usuário não for encontrado, código de Status 500 em caso de erro interno.

updateUser

Descrição: Atualiza um usuário por ID.

Método HTTP: PUT

Endpoint: /users/:id

Parâmetros de URL: id (ID do usuário)

Corpo da Solicitação: Dados atualizados do usuário (nome, código de acesso, senha).

Resposta de Sucesso: Código de Status 200 e mensagem de sucesso.

Resposta de Erro: Código de Status 404 se o usuário não for encontrado, código de Status 500 em caso de erro interno.

deleteUser

Descrição: Exclui um usuário por ID.

Método HTTP: DELETE

Endpoint: /users/:id

Parâmetros de URL: id (ID do usuário)

Resposta de Sucesso: Código de Status 204 (Sem conteúdo) e mensagem de sucesso.

Resposta de Erro: Código de Status 404 se o usuário não for encontrado, código de Status 500 em caso de erro interno.

login

Descrição: Realiza o login de um usuário.

Método HTTP: POST

Endpoint: /login

Corpo da Solicitação: Dados de login (código de acesso, senha).

Resposta de Sucesso: Código de Status 200 e dados do usuário autenticado com token.

Resposta de Erro: Código de Status 401 se a autenticação falhar, código de Status 500 em caso de erro interno.

Middleware

verifyToken

Descrição: Middleware para verificar a autenticação por token.

Uso: Deve ser aplicado a rotas que exigem autenticação.

Comportamento: Verifica se um token válido está presente nas solicitações. Se o token for válido, permite o acesso à rota; caso contrário, retorna um erro de autorização.

Rotas

Endpoint: /orders

GET: Recupera todos os pedidos.

POST: Cria um novo pedido.

Endpoint: /orders/:id

GET: Recupera um pedido por ID.

PUT: Atualiza um pedido por ID.

DELETE: Exclui um pedido por ID.

Endpoint: /users
GET: Recupera todos os usuários.

POST: Cria um novo usuário.

Endpoint: /users/:id

GET: Recupera um usuário por ID.

PUT: Atualiza um usuário por ID.

DELETE: Exclui um usuário por ID.

Endpoint: /login

POST: Realiza o login de um usuário.