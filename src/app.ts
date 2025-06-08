import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import investimentoRoutes from './routes/investimentoRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Documentação Swagger
const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'API de Controle de Investimentos',
    version: '1.0.0',
    description: 'API para gerenciamento de investimentos',
  },
  paths: {
    '/criaInvestimentos': {
      post: {
        summary: 'Criar novo investimento',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  nome: { type: 'string' },
                  tipo: { type: 'string', enum: ['Ação', 'Fundo', 'Título'] },
                  valor: { type: 'number' },
                  data: { type: 'string', format: 'date' },
                },
              },
            },
          },
        },
        responses: {
          '201': { description: 'Investimento criado com sucesso' },
          '400': { description: 'Dados inválidos' },
        },
      },
    },
    '/listaInvestimentos': {
      get: {
        summary: 'Listar todos os investimentos',
        responses: {
          '200': { description: 'Lista de investimentos' },
        },
      },
    },
    '/atualizaInvestimentos/{id}': {
      put: {
        summary: 'Atualizar investimento',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  nome: { type: 'string' },
                  tipo: { type: 'string', enum: ['Ação', 'Fundo', 'Título'] },
                  valor: { type: 'number' },
                  data: { type: 'string', format: 'date' },
                },
              },
            },
          },
        },
        responses: {
          '200': { description: 'Investimento atualizado com sucesso' },
          '404': { description: 'Investimento não encontrado' },
        },
      },
    },
    '/deletaInvestimentos/{id}': {
      delete: {
        summary: 'Deletar investimento',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '204': { description: 'Investimento deletado com sucesso' },
          '404': { description: 'Investimento não encontrado' },
        },
      },
    },
  },
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(investimentoRoutes);

export default app; 