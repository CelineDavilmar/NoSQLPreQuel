const router = require('express').Router();


import apiRoutes from './api';
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).send('<h4>Error</h4>');
});

export default router;