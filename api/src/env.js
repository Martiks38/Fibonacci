import { config } from 'dotenv'

config()

const { PASSWORD, PORT, USER } = process.env

export { PASSWORD, PORT, USER }
