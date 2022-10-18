import express from 'express'
import cors from 'cors'
import termRoute from './routes/terms.route.js'

const app = express()

const { PORT } = await import('./env.js')

const port = PORT || 5501

app.set('PORT', port)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1', termRoute)

export default app
