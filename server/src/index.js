import express from 'express'
import bodyParser from 'body-parser'
import {WizardRoutes} from './routes/wizard.route'
import {VehicleRoutes} from './routes/vehicle.route'
import mongoose from 'mongoose';
import  {CONFIG} from './config';

import {USER_ROUTES} from './routes/user.route'

import jwt from 'jsonwebtoken'

//application init
let app = express()


app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   next();
});

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());


//connect to mongoDB instance create on mongoLabs
mongoose.connect('mongodb://root:root@ds133321.mlab.com:33321/parane1');

//token has some verfication issues
app.use('/vehicle/add', function (req, res, next) {

    if(req.method !==  'OPTIONS'){ 
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        // verifies has some problem, need some fix. 
       /* jwt.verify(token, CONFIG.secret, function (err, decoded) {
            if (err) {
                return res.status(401).json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });*/
       next();
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
   }else{
    next();
  }

});


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
const port = process.env.PORT || '5000';
app.set('port', port);



/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
