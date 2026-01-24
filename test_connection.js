const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/airbnb-clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("CONNECTION OPEN!!!");
        process.exit(0);
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!");
        console.log(err);
        process.exit(1);
    });
