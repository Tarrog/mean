const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tests:abcd1234@cluster0.n6uhb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('mongoDB connected');
}).catch(err => {
    console.log(err)
});

app.get('/', (req, res) => {
    res.send('success');
});

app.listen(port, () => {
    console.log('listening at port' + port);
});