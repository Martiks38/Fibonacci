export const memoFibonacci = () => {
  let terms = [0, 1]

  return async (nTerm) => {
    if (terms[nTerm]) return terms[nTerm]

    let ind = terms.length - 1

    for (ind; ind < nTerm; ind++) {
      let value = terms[ind] + terms[ind - 1]

      if (!Number.isFinite(value)) return Promise.resolve(Infinity)

      terms.push(value)
    }

    return Promise.resolve(terms[nTerm])
  }
}
