import express from 'express'
import cors from 'cors'

const app = express()

const { PORT } = await import('./env.js')

const port = PORT || 5501

app.set('PORT', port)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

export default app
