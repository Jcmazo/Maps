require('dotenv').config()
const initApp = require('./src/app')
const app = initApp()

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
