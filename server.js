const app = require('./app')
const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_LOCAL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connection Successful');
}).catch((err) => {
    console.log(err);
})

app.listen(process.env.PORT, () => {
    console.log(`You have connected to port ${process.env.PORT}`);
})