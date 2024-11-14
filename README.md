## Turma Full Stack 2 (+praTi e Codifica) - 2024/2  
**Atividade 5 - Desenvolva um ToDoApp**

Este é um aplicativo de lista de tarefas (Todo List) simples, desenvolvido com HTML, JavaScript e estilizado com a biblioteca **Tailwind CSS**. O aplicativo permite aos usuários adicionar, editar, marcar como concluídas e excluir tarefas, com armazenamento local para persistência de dados entre sessões.

### Página: 

## Funcionalidades

- **Adicionar Tarefa**: Adiciona uma nova tarefa na lista.
- **Editar Tarefa**: Permite modificar o texto de uma tarefa existente.
- **Marcar como Concluída**: Marca uma tarefa como concluída, aplicando um estilo riscado.
- **Excluir Tarefa**: Remove uma tarefa da lista.
- **Persistência de Dados**: As tarefas são salvas no `localStorage` do navegador, garantindo que elas permaneçam mesmo após a atualização ou o fechamento do navegador.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica do aplicativo.
- **JavaScript**: Lógica para manipulação das tarefas e interação com o `localStorage`.
- **Tailwind CSS**: Biblioteca de utilitários para estilização rápida e responsiva dos elementos da interface.

## Estrutura de Arquivos

    ```toDolist
    ├── index.html       # Estrutura HTML do aplicativo com links para Tailwind CSS e script.js
    └── script.js        # Lógica de manipulação das tarefas
    ```

## Como Executar o Projeto

- **Clone este repositório:**

    ```bash
    git clone https://github.com/seu-usuario/todo-list-app.git
    ```

- **Abra o arquivo `index.html` em um navegador.**

## Código Principal

O JavaScript gerencia as principais funcionalidades do app, como adicionar, editar, concluir e excluir tarefas. Abaixo está uma parte essencial do código para adicionar uma tarefa:

    ```script.js
    function addTodoToList(todo) {
        const newTodo = {
            id: Date.now(),
            text: todo.text,
            completed: false
        };
        todos.push(newTodo);
        updateLS();
        addTodo(newTodo);
    }
    ```

## Uso do `localStorage`

As tarefas são armazenadas no `localStorage` para garantir que o usuário possa fechar o navegador e, ao retornar, suas tarefas ainda estarão lá.

## Exemplo de Interface

- **Adicionar Tarefa:** Um formulário de entrada simples para adicionar novas tarefas.
- **Botões de Controle:** Cada tarefa tem botões estilizados para concluir, editar e excluir. Tailwind CSS é utilizado para adicionar classes utilitárias, como `bg-blue-500`, `hover:bg-blue-600`, etc., que controlam a aparência desses botões.

## Autor
[Guilherme M S](https://github.com/GuiStelmach).

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.

