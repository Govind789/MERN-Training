const express =  require('express');
const fsPromises = require('fs/promises');
const productRouter = require('./route/productRouter.js')
const userRouter = require('./route/userRouter.js')

const app = express();

app.use(express.json());

app.use('/api/products',productRouter)

app.use('/api/users',userRouter);

app.listen(3000);


//controller
//      -> productController.js


//routes
//      -> productRoute.js
//              -import(express , productController)
//              ->const productRouter = express.Router()
//              ->Assigned the handlers on router
//              ->module.exports = productRouter


// script.js
//      ->import(express,fs/promises,productRouter)
// app = express()


// userRouter.route('/')
//     .get(userController.getAllUsers)
//     .post(userController.addAllUsers)
//     .put(userController.replaceUser)
//     .patch(userController.modifyUser)
//     .delete(userController.deleteUser);



// app.get('/api/products',productController.getAllProducts);
// app.post('/api/products', productController.addAllProducts);
// app.put('/api/products/:id',productController.replaceProducts);
// app.delete('/api/products/:id',productController.deleteProduct);
// app.get('/api/users',userController.getAllUsers);
// app.post('/api/users',userController.addAllUsers);
// app.put('/api/users',userController.replaceUser);
// app.patch('/api/users',userController.modifyUser);
// app.delete('/api/users',userController.deleteUser);


