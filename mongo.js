const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}


const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://admin:${password}@cluster0.zrkru.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: name,
  number: number,
})
if (process.argv.length == 3) {
    console.log("phonebook:")
    Person.find({}).then(result => {
        result.forEach(person => {
          console.log(person.name + " " + person.number)
        })
        mongoose.connection.close()
      })
    
} else {

person.save().then(response => {
  console.log('added ' + name + " number " + number + " to phonebook")
  mongoose.connection.close()
})
}