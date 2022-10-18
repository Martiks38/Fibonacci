import TermsModel from '../Model/term.model.js'
import { memoFibonacci } from '../util/fibonacci.js'

const fibonacci = memoFibonacci()

const get_Value_nth_Term = async (req, res, next) => {
  try {
    let { term } = req.params

    let response = await TermsModel.get_Value_nth_Term(term)

    if (response)
      return res.status(201).send({ status: 200, value: response.result })

    let newValue = (await fibonacci(term)).toString()

    res.status(200).send({ status: 200, value: newValue })

    if (newValue !== 'Infinity')
      TermsModel.newTerm({ term_id: term, result: newValue })
  } catch (error) {
    res.status(500).send({ status: 500, message: 'Internal Server Error' })
  }
}

const TermsController = { get_Value_nth_Term }

export default TermsController
