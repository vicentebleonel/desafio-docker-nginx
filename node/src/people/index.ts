import { Router } from 'express';
import { getPeople } from './controller';

const router = Router()

router.get('/', getPeople);

export default router;