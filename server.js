const
    express = require("express"),
    app = express(),
    ejs = require("ejs"),
    compression = require("compression"),
    port = process.env.PORT || 5000

app.use(compression())
app.use(express.static("src"))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.status(200).render("home/home.ejs")
})

app.listen(port,()=>{
    console.log(`Active on port ${port}`)
})
