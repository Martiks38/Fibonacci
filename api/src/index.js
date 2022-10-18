import app from './app.js'

app.listen(app.get('PORT'), () => {
  console.log('Server up on port ', app.get('PORT'))
})
