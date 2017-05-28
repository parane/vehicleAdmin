import express from 'express';
import {User} from '../models/user.model'
import jwt from 'jsonwebtoken'
import  {CONFIG} from '../config'

let router = express.Router();


router.post('/register',(req,res)=>{
 let user = new User({
     name : req.body.name,
     password:  req.body.password,
      admin:  req.body.admin,
 });

 user.save((err,user)=> {
     if(err){
         res.send(err);
     }
     res.json({message:"saved",data:user});
 });

});

router.get('/authenticate',(req,res) =>{

    User.findOne({
        name:req.query.name
    },(err,user) =>{
        if(err)
          res.send(err);
    
       if(!user){
           res.status(401).json({message : "user not exsist"});

       }else{
         
         if(user.password === req.query.password) {
             let token = jwt.sign(user,CONFIG.secretKey,{
                 expiresIn: 1440
             })
             res.json({
                  message: "scuessfully login",
                  token:token
             });
         }else{
             res.status(401).json({message : "password wrong"});
         }

       }

    })

})

export const USER_ROUTES = router;