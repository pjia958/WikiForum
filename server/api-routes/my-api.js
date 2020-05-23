import { v4 as uuid } from 'uuid';
import bcypt from 'bcrypt'
import { useStore } from 'react-redux';

const users = []
export default router => {
    // test
    router.get("/msg", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json({ message: `Hello, WikiForum User! Unique ID: ${uuid()}` });
        //res.send(`Hello you touched the server and the id is ${uuid()}`)
    });

    router.get("/greeting", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");

        res.json({ message: `Hello, world! Unique ID: ${uuid()}` });

    });

    router.post("/calculate", (req, res) => {

        const result = parseInt(req.body.a) + parseInt(req.body.b);
        res.json({ result });

    });

    router.post('/signup', async (req, res) => {
        try{
            const hashedPassword = await bcypt.hash(req.body.password, 10)
            users.push({
                id: uuid().toString(),
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            })
            res.redirect('/login_page')
        } catch {
            res.redirect('/signup_page')
        }
        console.log(users)
    })

    
}