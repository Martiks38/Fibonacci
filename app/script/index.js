const $ = (selector) => document.querySelector(selector)

const $btnText = $('.btn-text')
const $spin = $('#spin')
const $error = $('#error')
const $term = $('#term')
const $value = $('#value')

const expregNumber = /\D/

const handleError = (message) => {
  $error.classList.toggle('hidden')
  $error.textContent = message

  return
}

const searchTerm = async (event) => {
  const controller = new AbortController()

  const { numberTerm } = event.target

  let term = numberTerm.value

  event.preventDefault()
  $error.classList.add('hidden')
  numberTerm.value = null

  if (expregNumber.test(parseInt(term)) || term < 0) {
    let message = `${term} no es un valor válido.`

    handleError(message)
  }

  $spin.classList.toggle('hidden')
  $btnText.classList.toggle('hidden')

  const waitingResponse = setTimeout(() => {
    controller.abort()

    let message =
      'El período de tiempo de espera se agotó antes de la finalización de la operación o el servidor no responde.'

    handleError(message)
  }, 10000)

  const res = await fetch(`http://localhost:5501/api/v1/${term}`, {
    signal: controller.signal,
  })

  $spin.classList.toggle('hidden')
  $btnText.classList.toggle('hidden')

  clearTimeout(waitingResponse)

  const resData = await res.json()

  if (resData.status !== 200) handleError(resData.message)

  $term.textContent = term
  $value.textContent = resData.value ?? 'Infinity'
}

document.addEventListener('submit', searchTerm)
