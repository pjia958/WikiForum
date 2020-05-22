import { v4 as uuid } from 'uuid';

export default router => {
    // test
    router.get("/msg", (req, res) => {
        // res.header("Access-Control-Allow-Origin", "*");
        res.json({ message: `Hello, WikiForum User! Unique ID: ${uuid()}` });
        //res.send(`Hello you touched the server and the id is ${uuid()}`)
    });

    router.get("/greeting", (req, res) => {

        res.json({ message: `Hello, world! Unique ID: ${uuid()}` });

    });

    router.post("/calculate", (req, res) => {

        const result = parseInt(req.body.a) + parseInt(req.body.b);
        res.json({ result });

    });


    
}