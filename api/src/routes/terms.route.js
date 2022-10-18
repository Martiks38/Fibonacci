import express from 'express'
import TermsController from '../Controller/term.controller.js'

const route = express.Router()

route.get('/:term', TermsController.get_Value_nth_Term)

export default route
