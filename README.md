# API de Controle de Investimentos

API para gerenciamento de investimentos, desenvolvida com Node.js, Express, TypeScript, Prisma e SQLite.

## Funcionalidades

- Cadastro de investimentos
- Listagem de investimentos
- Atualização de investimentos
- Exclusão de investimentos
- Validação de dados com Zod
- Documentação com Swagger

## Requisitos

- Node.js 14+
- npm ou yarn

## Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados:
```bash
npm run prisma:generate
npm run prisma:migrate
```

4. Inicie o servidor em modo desenvolvimento:
```bash
npm run dev
```

## Uso

A API estará disponível em `http://localhost:3000` e a documentação Swagger em `http://localhost:3000/api-docs`.

### Endpoints

- `POST /criaInvestimentos` - Criar novo investimento
- `GET /listaInvestimentos ` - Listar todos os investimentos
- `PUT /atualizaInvestimentos/:id` - Atualizar investimento
- `DELETE /deletaInvestimentos/:id` - Deletar investimento

### Exemplo de payload para criação/atualização

```json
{
  "nome": "PETR4",
  "tipo": "Ação",
  "valor": 28.50,
  "data": "2024-02-20"
}
```

## Validações

- Nome é obrigatório
- Tipo deve ser "Ação", "Fundo" ou "Título"
- Valor deve ser maior que 0
- Data não pode estar no futuro 