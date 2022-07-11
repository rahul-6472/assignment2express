const express = require("express")

const app = express()

const port = 5000

app.get("", (req,res) => {
    res.send("Hello")
})

books = [
    {
       title : "The Road",
       author : "bandini",
       publisher: "penguin"
    }, 
    {
        title : "The immortals of meluha",
        author : "amish",
        publisher: "penguin"
     }, 
     {
        title : "how to win friends and influence people",
        author : "dale carnegie",
        publisher: "ney work house"
     }, 
     {
        title : "Rich dad poor dad",
        author : "Robert Kiyosaki",
        publisher: "tmh"
     }
 ]



app.get("/books", (req,res) => {
    res.json(books)
})

app.listen(port, () => console.log(`server is running at ${port}`))