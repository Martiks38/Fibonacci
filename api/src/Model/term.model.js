import { getConnection } from '../db/connection.js'

const get_Value_nth_Term = async (term) => {
  try {
    const connection = await getConnection()

    const query = 'select result from fibonacci_terms where term_id = ?'

    let data = await connection.query(query, term)

    return data.at(0)
  } catch (error) {
    throw error
  }
}

const newTerm = async (newTerm) => {
  try {
    const connection = await getConnection()

    const query = 'insert into fibonacci_terms set ?'

    await connection.query(query, newTerm)
  } catch (error) {
    throw error
  }
}

const TermsModel = {
  get_Value_nth_Term,
  newTerm,
}

export default TermsModel
