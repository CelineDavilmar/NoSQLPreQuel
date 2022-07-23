const router = require('express').Router();
const apiRoutes = require("./api");

/* import apiRoutes from './api';
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).send('<h4>Error</h4>');
}); */
router.use('/api', apiRoutes);
router.use((req, res) => {
    return res.send("error: wrong route")
})

module.exports = router;