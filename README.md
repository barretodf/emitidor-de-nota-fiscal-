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

