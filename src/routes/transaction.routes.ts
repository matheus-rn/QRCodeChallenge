import { Router } from 'express';
import { hash } from 'bcryptjs';

const transactionRouter = Router();

transactionRouter.post('/', async (request, response) => {
  const { body } = request;
  try {
    const qrCodeString = await hash(JSON.stringify(body), 10);

    return response.json({ qrCodeString });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
