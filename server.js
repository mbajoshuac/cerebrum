const app = require('./app')
const port = 5000

app.listen(port, () => {
    console.log(`You have connected to port ${port}`);
})