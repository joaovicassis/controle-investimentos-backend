import { z } from 'zod';

export const investimentoSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  tipo: z.enum(['Ação', 'Fundo', 'Título'], {
    errorMap: () => ({ message: 'Tipo deve ser Ação, Fundo ou Título' }),
  }),
  valor: z.number().positive('Valor deve ser maior que 0'),
  data: z.string()
    .transform((str) => new Date(str))
    .refine(
      (date) => date <= new Date(),
      'Data não pode estar no futuro'
    ),
});

export type InvestimentoInput = z.infer<typeof investimentoSchema>; 