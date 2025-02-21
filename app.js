const express = require('express')
const path = require("node:path");

const app = express()
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  

const PORT = 3000;

app.get('/', (req, res) => {
    res.render("index", { messages: messages, title: "Message Board"})
})

app.get('/new', (req, res) => {
    res.render("form", {title: "New Message"})
})

app.post('/new', (req, res) => {
    let messageText = req.body.messageText
    let messageUser = req.body.messageUser
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/")
})



app.listen(PORT, () => {
    console.log('listening!')
})