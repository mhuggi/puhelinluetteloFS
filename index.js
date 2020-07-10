const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config()
const Person = require('./models/person')

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))


app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/', (req, res) => {
  morgan.token('JSONpost', function () { return '-' })
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  morgan.token('JSONpost', function () { return '-' })
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/info', (req, res) => {
  morgan.token('JSONpost', function () { return '-' })
  const d = new Date()

  Person.find({}).then(persons => {
    const pl = persons.length
    res.send('<p>Phonebook has info for ' + pl + ' people</p> <p>' + d + '</p>')
  }
  )

})

app.get('/api/persons/:id', (request, response, next) => {
  morgan.token('JSONpost', function () { return '-' })

  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end
      }

    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  morgan.token('JSONpost', function () { return '-' })

  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      console.log(result)
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  morgan.token('JSONpost', function () { return JSON.stringify(body) })

  if (!body.name || !body.number) {

    return response.status(400).json({
      error: 'content missing'
    })
  }
  const person = new Person({
    name: body.name,
    number: body.number,
  })
  person.save()
    .then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => {
      return response.status(400).json({
        error: error.message
      })
    })
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
