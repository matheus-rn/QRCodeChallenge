import { Router } from 'express';

const transactionRouter = Router();

transactionRouter.post('/', async (request, response) => {
  try {
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
