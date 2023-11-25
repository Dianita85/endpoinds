//1. importar express
const express = require("express");

//2. crear constante app que tiene todas las funciones de express

const app = express();

app.use(express.json());// permitir obtener el body en formato json 
app.use(express.urlencoded({ extended: true }));// permitir obtener el body en formato url-encoded


// definicion de funciones 

const findAll = (req, res) => {


  return res.status(200).json({
    
    message:"method get findAll"
})

}

const create = (req, res) => {

  const disease = req-body;

  return res.status(201).json({
    
    message:"method post - create",
    data: disease
 })
 
 }

 const findOne = (req, res) => {


  return res.status(200).json({
    
    message:"method get findOne"
})

}

const update = (req, res) => {


  return res.status(200).json({
    
    message:"method get update"
})

}

const deleteOne = (req, res) => {


  return res.status(200).json({
    
    message:"method get delete"
})

}


//3. definir el endpoint

//endpoint para buscar todas las enfermedades genericas

app.get('/api/v1/genetic-diseases', findAll)

//endpoint para crear enfermedad generica 
app.post('/api/v1/genetic-diseases', create)

//endpoint para buscar enfermedad generica 
app.get('/api/v1/genetic-diseases', findOne)

//endpoint para actualizar enfermedad generica 
app.patch('/api/v1/genetic-diseases', update)

//endpoint para eliminar enfermedad generica 
app.delete('/api/v1/genetic-diseases', deleteOne)





//endpoint para buscar una enfermedade genetica  

app.get('/api/v1/genetic-diseases/:id', (req, res) =>{

  console.log(req.params);

return res.status(200).json({
  message : 'method get-findOne',
  id: req.params.id
})

})

//endpoint para actualizar  una enfermedad en especial 

app.patch('/api/v1/genetic-diseases/:id'), (req, res) =>{

  const { id } = req.params;

 return res.status(200).json({
    message : 'method patch-update',
    id,

  })
}


//endpoint para delete una enfermedad en especial 

app.delete('/api/v1/genetic-diseases/:id'), (req, res) =>{

  const { id } = req.params;

 return res.status(200).json({
    message : 'method delete -delete',
    id,

  })
}


//4. poner a escuhar por un puerto
app.listen(3000, () => {
  console.log("Server running on port: " + 3000);
});

//localhost

// el app listen prima  cuando se hace console log
/*
get(parametro1)

parametro1= endpoint
parametro2 =callback //funcion que se le pasa como parametro a otra funcion*/


