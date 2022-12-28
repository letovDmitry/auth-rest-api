import express, { Express } from 'express'
import config from 'config'
import connect from './utils/connect';
import routes from './routes';

const port = config.get<number>('port')

const app: Express = express();

app.use(express.json())

app.listen(process.env.PORT || port, async () => {
    console.log('server runs')
    await connect()
    routes(app)
})