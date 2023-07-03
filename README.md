# API TODO list
Esta API e utilizada para realizar acoes basicas de uma lista de tarefas como:
 * Incluir tarefas
 * Exibir/recuperar tarefas
 * Editar tarefas
 * Excluir tarefas

## Endpoints
### POST /tasks
Este endpoint e responsavel por inserir a tarefa desejada, onde e enviado informacoes via *JSON*.
#### Parametros
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
Essa reposta ocorre quando as informacoes foram cadastradas corretamente no sistema.

Exemplo de resposta:
```
{
  "insertId": 10
}
```
##### 400 - Bad Request
Essa resposta ocorre quando algum parametro foi passado de forma indevida como por exemplo, chave ou valor fora do padrao.
Exemplo de resposta:
```
{
  "message": "The field \"title\" is required."
}
```
##### ERROR
Essa resposta ocorre pois algum problema de conexao ocorreu no instante da requisicao.

### GET /tasks
Este endpoint e responsavel por retornar a listagem de todas as tarefas cadastradas com suas respectivas informacoes como: titulo, status e data da criacao.
#### Parametros
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
Essa resposta ocorre pois algum problema de conexao ocorreu no instante da requisicao.

### PUT /tasks/:id
Este endpoint e responsavel por editar/atualizar a tarefa desejada, onde e enviado o id dessa tarefas na URL como parametro. E necessario tambem enviar parametros no corpo da requisicao com o formato *JSON*.
#### Parametros
title: Nome da tarefa a ser editada

status: Situacao da tarefa a ser editada

Exemplo de URL:
```
  localhost:8000/tasks/10
```

Exemplo de parametros:
```
{
  "title": "Estudar API em NodeJS",
  "status": "Finalizado"
}
```

#### Respostas
##### 204 - No Content
Essa reposta ocorre quando as informacoes foram editadas corretamente no sistema, nao retornando nenhum conteudo.

##### 400 - Bad Request
Essa resposta ocorre quando algum parametro foi passado de forma indevida como por exemplo, chave ou valor fora do padrao.
Exemplo de resposta:
```
{
  "message": "The field \"title\" is required."
}
```
##### ERROR
Essa resposta ocorre pois algum problema de conexao ocorreu no instante da requisicao.

### DELETE /tasks/:id
Este endpoint e responsavel por deletar a tarefa desejada, onde e enviado o id dessa tarefas na URL como parametro..
#### Parametros
Exemplo de URL:
```
  localhost:8000/tasks/10
```

#### Respostas
##### 204 - No Content
Essa reposta ocorre quando as informacoes foram deletadas corretamente no sistema, nao retornando nenhum conteudo.

##### ERROR
Essa resposta ocorre pois algum problema de conexao ocorreu no instante da requisicao.