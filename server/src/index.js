import express from 'express'
import bodyParser from 'body-parser'
import {WizardRoutes} from './routes/wizard.route'
import {VehicleRoutes} from './routes/vehicle.route'
import mongoose from 'mongoose';
import  {CONFIG} from './config'

import {USER_ROUTES} from './routes/user.route'

import jwt from 'jsonwebtoken'

//application init
let app = express()

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.set('port',3000);

//connect to mongoDB instance create on mongoLabs
mongoose.connect('mongodb://root:root@ds133321.mlab.com:33321/parane1');

/*app.use('/wizard',(req,res,next) =>{
   console.log("middle for authentication");
   let token = req.headers['x-access-token']
   if(!token){
       res.status().json({message:"Not autherized"})
   }else{
       jwt.verify(token,CONFIG.secretKey,(err,decoded)=>{
           if(err){
              res.send(err);
           }else{
               req.decoded = decoded;
               next();
           }
       })
   }
   //check for authentication
   //i true ==>
  // next();
})*/

app.get('/',(req,res) =>{
    res.json({'message':'hello world'});
})

// app.post('/example-post',(req,res) =>{
//   res.json({
//       message: 'Poste sucessful',
//       payload: req.body,
//       header: req.header 
//   });
  
// });
app.use('/wizard',WizardRoutes)
app.use('/vehicle',VehicleRoutes)
app.use(USER_ROUTES)
app.listen(app.get('port'),() =>{
    console.log(`Node is running on port ${app.get('port')}`);
});
