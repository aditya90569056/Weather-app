
const express = require("express")
const axios = require("axios")
const app = express()
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
const port = 3000
const api=`d2074fd6037a4f22a73125305252507`
app.use(express.urlencoded({ extended: true }))
app.get('/', function abcd(req,res){
    res.render("index.ejs")
})
app.post("/weather",async function idk(req,res){
    const city = req.body.city
    
    try{
    var data = await fetch(`http://api.weatherapi.com/v1/current.json?key=d2074fd6037a4f22a73125305252507&q=${city}`)
    data = await  data.json()
    
      res.render("show",{data: data})
        console.log(data)
}
catch(err){
    res.send(`
        <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
        `)
}



})
if(app.listen(3000)){
    console.log("Running...")
}
