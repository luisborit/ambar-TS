import express  from 'express'
import { login } from '@ambar-backend/handlers/index'
import {Login} from '@ambar-backend/types/MySql'

const app = express();
app.use(express.json())

app.post('/auth/login', async (req, res) => {
  try {
    const response = await login(req.body.username, req.body.password);
    res.json(response);
  } catch (error) {
    res.send(404).send(`Not Found with error: ${error}`)
  }
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000');
})