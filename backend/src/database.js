const mongoose =require('mongoose')

URI =('mongodb://localhost/ensayo')

mongoose.connect(URI,{
    // useNewUrlParser:true,
    // userUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:false
})
    .then(db=>console.log('conectado'))
    .catch(error=>console.log('error de conexion',error))

module.exports = mongoose