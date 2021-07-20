const express = require('express');
const app = express();
const port = 3000;

const config = require('./config/key')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
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


const Users = require('./models/user');
app.post('/register', (req, res) => {
    const user = new Users(req.body);
    
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });

});


app.listen(port, () => {
    console.log('listening at port' + port);
});