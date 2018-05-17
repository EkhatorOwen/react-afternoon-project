require('dotenv').config();

const experss = require('express');
const app = experss();
const cors = require('cors');
const { json } = require('body-parser');
const massive = require('massive') ;

const port = process.env.PORT || 3000;
 
const {create, getOne, getAll, update, deleteProduct } = require('./controllers/product_controller/product_controller')

//require(`${__dirname}/conrollers/product_controller/product_controller`)



app.use(json());
app.use(cors());


massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db',db);
    // app.get('db')
    // .init.createUserTable()
    // .then((response)=>{
    //     console.log('table created');
    // })
})

app.get('/api/products', getAll)
app.get('/api/product/:id', getOne)
app.put('/api/product/:id', update)  //for params, the / just works
app.post('/api/product', create)
app.delete('/api/product/:id',deleteProduct)


app.listen(port,()=>{
    console.log(`I am listening on port ${port}`)
})