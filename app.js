const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080
const HOST = '0.0.0.0'

// Middleware untuk file statis
app.use(express.static(path.join(__dirname, 'public')))

// Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// Profile
app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'profile.html'))
})

// Cart
app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cart.html'))
})

// Contact
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'))
})

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`)
})
