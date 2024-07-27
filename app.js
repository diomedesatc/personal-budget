const express = require('express');
const app = express();
const port = 3000;


const envelopes = [
    {
        id: 1,
        title: "Gas",
        amount: 50000
    },
    {
        id: 2,
        title: "Rent",
        amount: 300000
    },
    {
        id: 3,
        title: "School",
        amount: 400000
    }
];

app.get('/', (req,res,next) =>{
    res.send(envelopes);

});

app.post('/envelopes', (req,res,next) =>{
    const {id, title, amount} = req.params;
    
    envelopes.push({
        id: `${id}`,
        title: `${title}`,
        amount: `${amount}`

    });

    res.send(envelopes);

});

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);

});