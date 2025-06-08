import { Router, RequestHandler } from 'express';
import { InvestimentoController } from '../controllers/investimentoController';

const router = Router();
const controller = new InvestimentoController();

router.post('/criaInvestimentos', (controller.criar.bind(controller) as unknown) as RequestHandler);
router.get('/listaInvestimentos', (controller.listarTodos.bind(controller) as unknown) as RequestHandler);
router.put('/atualizaInvestimentos/:id', (controller.atualizar.bind(controller) as unknown) as RequestHandler);
router.delete('/deletaInvestimentos/:id', (controller.deletar.bind(controller) as unknown) as RequestHandler);

export default router; 