import { Request, Response } from 'express';
import { InvestimentoService } from '../services/investimentoService';
import { investimentoSchema } from '../utils/validations';
import { ZodError } from 'zod';

export class InvestimentoController {
  private service: InvestimentoService;

  constructor() {
    this.service = new InvestimentoService();
  }

  async criar(req: Request, res: Response) {
    try {
      const dados = investimentoSchema.parse(req.body);
      const investimento = await this.service.criar(dados);
      return res.status(201).json(investimento);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async listarTodos(req: Request, res: Response) {
    try {
      const investimentos = await this.service.listarTodos();
      return res.json(investimentos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async atualizar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const dados = investimentoSchema.parse(req.body);
      const investimento = await this.service.atualizar(Number(id), dados);
      return res.json(investimento);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      if (error instanceof Error && error.message === 'Investimento não encontrado') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async deletar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.service.deletar(Number(id));
      return res.status(204).send();
    } catch (error) {
      if (error instanceof Error && error.message === 'Investimento não encontrado') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
} 