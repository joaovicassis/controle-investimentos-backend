import { PrismaClient } from '@prisma/client';
import { InvestimentoInput } from '../utils/validations';

const prisma = new PrismaClient();

export class InvestimentoRepository {
  async criar(dados: InvestimentoInput) {
    return prisma.investimento.create({
      data: dados,
    });
  }

  async listarTodos() {
    return prisma.investimento.findMany();
  }

  async buscarPorId(id: number) {
    return prisma.investimento.findUnique({
      where: { id },
    });
  }

  async atualizar(id: number, dados: InvestimentoInput) {
    return prisma.investimento.update({
      where: { id },
      data: dados,
    });
  }

  async deletar(id: number) {
    return prisma.investimento.delete({
      where: { id },
    });
  }
} 