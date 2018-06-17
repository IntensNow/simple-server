import express from 'express'

const app = express();

app.get('/', (req,res) => {
    res.send('test my dev');
})

app.listen(8288, () => {
    console.log('example is running');
});