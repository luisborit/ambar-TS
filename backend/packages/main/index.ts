import express  from 'express'
import { login } from '@ambar-backend/handlers/index'
import * as dotenv from "dotenv"
import path from 'path'

dotenv.config({ path: path.join(__dirname+'/../../../.env') })

const app = express();

app.use(express.json())

app.post('/auth/login', async (req, res) => {
  try {
    const response = await login(req.body.username, req.body.password);
    res.json(response);
  } catch (error) {
    res.status(404).send(`Not Found with error: ${error}`)
  }
})

app.listen(process.env.EXPRESS_PORT, () => { console.log(`The application is listening on port ${process.env.EXPRESS_PORT}`); })