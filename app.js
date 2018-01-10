let app = require("express")();

app.get('/v1/test', (req, res)=>{
    return res.status(200).json("okkk");
})

let PORT = process.env.PORT || 80
app.listen(PORT, ()=>{
    console.log("listenningo on port "+PORT);
})