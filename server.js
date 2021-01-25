let express = require('express')
let path = require('path')
let app = express()

app.get('/home', function(request, response){
    response.sendFile(
        path.join(__dirname,'adventure.html')
        )
})
app.get('/invest', function(request, response){
    response.sendFile(
        path.join(__dirname, 'invest.html')
        )
})
app.get('/liquorstore', function(request, response){
    response.sendFile(
        path.join(__dirname, 'liquorstore.html')
        )
})
app.get('/online', function(request, response){
    response.sendFile(
        path.join(__dirname, 'onlineBiz.html')
        )
})
app.get('/park', function(request, response){
    response.sendFile(
        path.join(__dirname, 'goodDuck.html')
        )
})
app.get('/criminal', function(request, response){
    response.sendFile(
        path.join(__dirname, 'criminal.html')
        )
})
app.get('/house', function(request, response){
    response.sendFile(
        path.join(__dirname, 'settle.html')
        )
})
app.get('/end', function(request, response){
    response.sendFile(
        path.join(__dirname, 'end.html')
    )
})
app.use(express.static('./'))
app.listen(8080)
