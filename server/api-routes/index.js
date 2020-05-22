import express from 'express';
import configureMyApi from './my-api.js';

const router = express.Router();
configureMyApi(router);

router.get('/', (req, res) => {
    res.json({ isAlive: true });
})

export default router;