import express from 'express';
import configureMyApi from './my-api.js';
import configureMyAuthApi from './auth'



const router = express.Router();
configureMyApi(router);
configureMyAuthApi(router)

router.get('/', (req, res) => {
    res.json({ isAlive: true });
})

export default router;