# API TODO list
Esta API e utilizada para realizar acoes básicas de uma lista de tarefas como:
* Incluir tarefas
* Exibir/recuperar tarefas
* Editar tarefas
* Excluir tarefas

## Endpoints
### POST /tasks
Este endpoint e responsável por inserir a tarefa desejada, onde e enviado informações via *JSON*.
#### Parâmetros
title: Nome da tarefa

status: Situacao da tarefa

Exemplo de parametros:
```
{
"title": "Estudar API em NodeJS",
"status": "Pendente"
}
```
#### Respostas
##### 201 - CREATED
Essa reposta ocorre quando as informações foram cadastradas corretamente no sistema.

Exemplo de resposta:
```
{
"insertId": 10
}
```
##### 400 - Bad Request
Essa resposta ocorre quando algum parâmetro foi passado de forma indevida como por exemplo, chave ou valor fora do padrão.
Exemplo de resposta:
```
{
"message": "The field \"title\" is required."
}
```
##### ERROR
Essa resposta ocorre pois algum problema de conexão ocorreu no instante da requisição.

### GET /tasks
Este endpoint e responsável por retornar a listagem de todas as tarefas cadastradas com suas respectivas informações como: titulo, status e data da criação.
#### Parâmetros
Nenhum
#### Respostas
##### 200 - OK!
Essa reposta ocorre quando tudo esta funcionando normalmente e os dados foram retornados com sucesso.
Exemplo de resposta:
```
[
{
"id": 10,
"title": "Estudar API em NodeJS",
"status": "Pendente",
"created_at": "Mon, 03 Jul 2023 12:57:01 GMT"
}
]
```
##### ERROR
Essa resposta ocorre pois algum problema de conexão ocorreu no instante da requisição.

### PUT /tasks/:id
Este endpoint e responsável por editar/atualizar a tarefa desejada, onde e enviado o id dessa tarefas na URL como parâmetro. E necessário também enviar parâmetros no corpo da requisição com o formato *JSON*.
#### Parâmetros
title: Nome da tarefa a ser editada

status: Situação da tarefa a ser editada

Exemplo de URL:
```
localhost:8000/tasks/10
```

Exemplo de parâmetros:
```
{
"title": "Estudar API em NodeJS",
"status": "Finalizado"
}
```

#### Respostas
##### 204 - No Content
Essa reposta ocorre quando as informações foram editadas corretamente no sistema, não retornando nenhum conteúdo.

##### 400 - Bad Request
Essa resposta ocorre quando algum parâmetro foi passado de forma indevida como por exemplo, chave ou valor fora do padrão.
Exemplo de resposta:
```
{
"message": "The field \"title\" is required."
}
```
##### ERROR
Essa resposta ocorre pois algum problema de conexão ocorreu no instante da requisição.

### DELETE /tasks/:id
Este endpoint e responsável por deletar a tarefa desejada, onde e enviado o id dessa tarefas na URL como parâmetro..
#### Parâmetros
Exemplo de URL:
```
localhost:8000/tasks/10
```

#### Respostas
##### 204 - No Content
Essa reposta ocorre quando as informações foram deletadas corretamente no sistema, não retornando nenhum conteúdo.

##### ERROR
Essa resposta ocorre pois algum problema de conexão ocorreu no instante da requisição.
