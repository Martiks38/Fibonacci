import mysql from 'promise-mysql'

import { config } from './db.config.js'
import { USER, PASSWORD } from '../env.js'

const conf = { ...config, user: USER, password: PASSWORD }

const myConn = mysql.createConnection(conf)

export const getConnection = () => myConn
