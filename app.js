// app.js
const express = require('express')
const app = express()
const port = 3000

//design time function
function formatTime(object, req, res, next) {
  let year = object.getFullYear()
  let month = object.getMonth() + 1
  let day = object.getDate()
  let hour = object.getHours()
  let minute = object.getMinutes()
  let second = object.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second} | ${req.method} from ${req.originalUrl}`
}
//middleware
app.use(function (req, res, next) {
  const start = new Date()
  if (req) {
    next('route')
  }
  const end = new Date()
  console.log(`${formatTime(start, req, res, next)} | total time : ${end.getTime() - start.getTime()}ms`)
})

//set routes
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
