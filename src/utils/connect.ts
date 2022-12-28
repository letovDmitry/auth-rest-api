import mongoose from "mongoose";
import config from 'config'

function connect(): Promise<void> {
    const dbUri = config.get<string>('dbUri')

    return mongoose.connect(dbUri).then(() => console.log('connected to db')).catch((er) => {
        console.log(er)
        process.exit(1)
    })
}

export default connect