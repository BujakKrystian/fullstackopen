const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(express.static('build'))

app.use(cors())

morgan.token('json', function (req, res) {
  const body = req.body
  return JSON.stringify({
    name: body.name,
    number: body.number,
  })
})

app.use(morgan(':method :url :response-time :json'))

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-23445',
  },
  {
    id: 4,
    name: 'Mary Poppendick',
    number: '39-23-6423122',
  },
]

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0
  return maxId + 1
}

app.use(express.json())

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const amount = generateId() - 1

  response.send(
    `<p>Phonebook has info for ${amount} people</p><p>${new Date()}</p>`
  )
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)

  const person = persons.find((person) => {
    return person.id === id
  })

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter((person) => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons/', (request, response) => {
  const id = Math.floor(Math.random() * 1000000)

  const body = request.body

  const person = [
    {
      id: id,
      name: body.name,
      number: body.number,
    },
  ]

  const nameExists = persons.some((personA) => person.name === personA.name)
  if (nameExists) {
    response.send(`<p>error: 'name must be unique'</p>`)
  } else if (!person[0].name) {
    response.send(`<p>error: 'empty name'</p>`)
  } else if (!person[0].number) {
    response.send(`<p>error: 'empty number'</p>`)
  } else {
    persons = persons.concat(person)

    response.json(person)
  }
})

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
