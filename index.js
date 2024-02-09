import express  from "express";
// create express app
const app = express();
const port = +process.env.PORT || 4000;

// setup a router
app.get('/', (req,res)=>{
    res.json({
        status : res.statusCode,
        msg: 'You\'re home'
    })
})

app.get('/about', (req,res)=>{
    res.json({
        status : res.statusCode,
        msg: 'About page'
    })
})
app.get('*', (req,res)=>{
    res.json({
        status : 404,
        msg: '404 Page'
    })
})

app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`);
})