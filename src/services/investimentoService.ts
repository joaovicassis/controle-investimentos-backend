import { InvestimentoRepository } from '../repositories/investimentoRepository';
import { InvestimentoInput } from '../utils/validations';

export class InvestimentoService {
  private repository: InvestimentoRepository;

  constructor() {
    this.repository = new InvestimentoRepository();
  }

  async criar(dados: InvestimentoInput) {
    return this.repository.criar(dados);
  }

  async listarTodos() {
    return this.repository.listarTodos();
  }

  async buscarPorId(id: number) {
    const investimento = await this.repository.buscarPorId(id);
    if (!investimento) {
      throw new Error('Investimento não encontrado');
    }
    return investimento;
  }

  async atualizar(id: number, dados: InvestimentoInput) {
    await this.buscarPorId(id);
    return this.repository.atualizar(id, dados);
  }

  async deletar(id: number) {
    await this.buscarPorId(id);
    return this.repository.deletar(id);
  }
} 