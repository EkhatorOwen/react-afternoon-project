const create=(req,res)=>{
req.app
.get('db')
.create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl])
.then(response=>{ res.status(200).json("Success") })
.catch(err=>res.status(500).json(err))
}

const getOne=(req,res)=>{
    console.log(req.params.id)
req.app
.get('db')
.read_product([req.params.id])     
.then(response=>{ res.status(200).json(response) })
.catch(err=>res.status(500).json(err))
}

const getAll=(req,res)=>{
req.app
.get('db')
.read_products()
.then(response=>{ res.status(200).json(response)})
.catch(err=>res.status(500).json(err))
}

const update=(req,res)=>{
req.app
.get('db')
.update_product([req.params.id,req.query.desc])  
.then(response=>{ res.status(200).json('Success') })
.catch(err=>res.status(500).json(err))
}

const deleteProduct=(req,res)=>{
req.app
.get('db')
.delete_product([req.params.id])                         
.then(response=>{ res.status(200).json('Success') })
.catch(err=>res.status(500).json(err))
}


module.exports = {
create,
getOne,
getAll,
update,
deleteProduct
};