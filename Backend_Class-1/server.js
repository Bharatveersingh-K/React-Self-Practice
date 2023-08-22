const express = require('express');
 const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());


//Local-Server Created
app.listen(3000, () => {
    console.log('Your server is running on localhost:3000');
});


//Routes

app.get('/', (req, res) => {
    res.send("hello G kya haal chaal");
});

app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car submitted successfully.");
});
