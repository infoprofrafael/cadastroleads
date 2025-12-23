import express from 'express';

import {
    listarLeads,
    inserirLead,
    editarLead,
    deleteLead

} from '../controllers/leadController.js';

const router = express.Router();

router.get('/', listarLeads);
router.post('/', inserirLead);
router.put('/:id', editarLead);
router.delete('/:id', deleteLead);


export default router;









