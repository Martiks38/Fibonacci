import TermsModel from '../Model/term.model.js'
import { memoFibonacci } from '../util/fibonacci.js'

const fibonacci = memoFibonacci()

const get_Value_nth_Term = async (req, res) => {
  try {
    let { term } = req.params

    if (term < 0 || /\D/.test(term))
      throw { status: 400, message: `El término n = ${term} no es válido.` }

    let response = await TermsModel.get_Value_nth_Term(term)

    if (response)
      return res.status(201).send({ status: 200, value: response.result })

    let newValue = await fibonacci(term)

    let value = Number.isFinite(newValue)
      ? BigInt(newValue).toString()
      : newValue

    if (newValue == Infinity)
      return res.status(200).send({ status: 200, value })

    res.status(200).send({ status: 200, value })

    TermsModel.newTerm({ term_id: term, result: value })
  } catch (error) {
    if (error.status) return res.status(error.status).send(error)

    res.status(500).send({ status: 500, message: 'Internal Server Error' })
  }
}

const TermsController = { get_Value_nth_Term }

export default TermsController
