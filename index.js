const express = require('express')
const morgan = require('morgan')

const app = express()
const cors = require('cors')

app.use(express.static('build'))
app.use(cors())
app.use(express.json()) 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))


let persons = [
    {
        name: "Arto Hellas",
        number: "05035053053",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "123413252523",
        id: 4
    }
]


app.get('/', (req, res) => {
    morgan.token('JSONpost', function (req, res) { return '-' })

    res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    morgan.token('JSONpost', function (req, res) { return '-' })

    res.json(persons)
})

app.get('/info', (req, res) => {
    morgan.token('JSONpost', function (req, res) { return '-' })

    const d = new Date()
    res.send('<p>Phonebook has info for ' + persons.length + ' people</p> <p>' + d + '</p>')
})

app.get('/api/persons/:id', (request, response) => {
    morgan.token('JSONpost', function (req, res) { return '-' })

    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    morgan.token('JSONpost', function (req, res) { return '-' })

    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})
const generateId = () => {
    const id = Math.floor(Math.random() * Math.floor(1000))
    return id
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    morgan.token('JSONpost', function (req, res) { return JSON.stringify(body) })

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'content missing'
        })
    }
    if (persons.find(person => person.name === body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)

    response.json(person)
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
