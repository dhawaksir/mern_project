const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose");

const app=express();
const port= process.env.PORT || 500;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dhawaksir:gdblUzAwmHFu1fyN@cluster0.ogtzvd3.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("connected to mongoose...."))
.catch((err)=>console.log("error in connecting mongosoose...."));

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});
// Assuming you have defined the Person schema and model

// Create a new person
app.post('/people', (req, res) => {
    const { firstName, lastName, age } = req.body;
    const newPerson = new Person({ firstName, lastName, age });
  
    newPerson.save()
      .then(savedPerson => {
        res.json(savedPerson);
      })
      .catch(error => {
        res.status(500).json({ error: 'Could not save person' });
      });
  });
  
  // Fetch all people
  app.get('/people', (req, res) => {
    Person.find()
      .then(people => {
        res.json(people);
      })
      .catch(error => {
        res.status(500).json({ error: 'Could not fetch people' });
      });
  });
  
  // Set up other routes for updating and deleting people
  