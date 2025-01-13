# App Gerador de Nota Fiscal

## Introdução
O **App Gerador de Nota Fiscal** é um projeto desenvolvido em Electron.js com integração a um banco de dados MySQL. Ele permite buscar produtos, adicionar ao carrinho e calcular o total da compra, com foco em automação e praticidade.

## Funcionalidades Concluídas

### 1. Configuração Inicial
- Conexão com o banco de dados MySQL.
- Criação da tabela `produtos` com os campos:
  - `id` (int, chave primária, auto_increment).
  - `descricao` (varchar).
  - `valor` (decimal).

### 2. Funcionalidades do Frontend
- Campo de entrada para digitar o código do produto.
- Botão para buscar produto pelo código.
- Listagem dos produtos adicionados ao carrinho.
- Cálculo e exibição do total acumulado dos produtos no carrinho.

### 3. Funcionalidades do Backend
- Configuração do Electron com `preload.js` para comunicação segura entre o frontend e o backend.
- API para buscar produtos no banco de dados com base no código digitado.
- Tratamento de erros caso o produto não seja encontrado ou ocorram falhas na consulta ao banco de dados.

### 4. Integração com o GitHub
- Projeto configurado com `.gitignore` para evitar upload de arquivos desnecessários (como `node_modules` e binários grandes).
- Push do repositório completo para o GitHub.

## Próximos Passos

### Melhorias no Frontend
- Adicionar validação no campo de entrada (por exemplo, impedir envio de campos vazios).
- Estilização para melhorar a interface visual.
- Adicionar funcionalidade de remoção de produtos do carrinho.

### Melhorias no Backend
- Implementar API para salvar notas fiscais completas no banco de dados.
- Adicionar logs para monitoramento de erros no servidor.

### Funcionalidades Futuras
- Exportação da nota fiscal em PDF.
- Autenticação de usuários para segurança e personalização.
- Implementação de relatórios com estatísticas de vendas.

# App Gerador de Nota Fiscal

Este é um aplicativo simples e funcional que permite gerenciar produtos e gerar notas fiscais com cálculo automático do total de compras. O projeto utiliza **Electron.js** para criar uma interface desktop e **MySQL** como banco de dados para armazenar os produtos.

## Recursos do Projeto

- **Busca de Produtos**: Pesquise produtos no banco de dados utilizando códigos.
- **Lista de Produtos Adicionados**: Exibe os produtos adicionados na nota fiscal em uma lista.
- **Cálculo Automático do Total**: Soma automaticamente os valores dos produtos adicionados.
- **Interface Intuitiva**: Interface simples e responsiva para facilitar a usabilidade.

---

## Tecnologias Utilizadas

- **Electron.js**: Cria aplicações desktop multiplataforma com tecnologias web.
- **MySQL**: Gerenciamento de banco de dados relacional.
- **Node.js**: Ambiente de execução para o backend do aplicativo.
- **HTML/CSS/JavaScript**: Desenvolvimento da interface do usuário.

---

## Instalação e Configuração

### 1. Clonar o Repositório

```bash
$ git clone https://github.com/barretodf/app-gerador-de-nota-fiscal.git
$ cd app-gerador-de-nota-fiscal
```

### 2. Instalar Dependências

Certifique-se de que o Node.js está instalado no sistema.

```bash
$ npm install
```

### 3. Configurar o Banco de Dados

1. Crie um banco de dados MySQL chamado `notas_fiscais`.
2. Execute o script SQL localizado em `scripts/setup.sql` para criar a tabela de produtos.
3. Atualize o arquivo `db.js` com as credenciais do banco de dados:

```javascript
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'notas_fiscais'
});
```

### 4. Rodar o App

```bash
$ npm start
```

O aplicativo será iniciado e estará disponível.

---

## Funcionalidades Detalhadas

### Busca de Produtos
- Digite o código do produto e pressione **Enter** ou clique em "Buscar Produto".
- O produto será adicionado à lista se encontrado no banco de dados.

### Listagem de Produtos
- Os produtos adicionados aparecem em uma lista com sua descrição e preço.
- Cada produto pode ser visualizado com detalhes.

### Soma Automática
- Ao adicionar novos produtos, o total é recalculado automaticamente e exibido na interface.

---

## Contato

Para mais informações ou dúvidas, entre em contato:
- **E-mail**: edsb1981@gmail.com
- **GitHub**: [barretodf](https://github.com/barretodf)


