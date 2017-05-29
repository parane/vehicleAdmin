import express from 'express';
import {Wizard} from '../models/wizard.model'

let router = express.Router();

//get all wizard
router.get('/',(req,res) => {
   Wizard.find((err,wizards)=>{
       if(err){
           res.send(err);
        
       }
       res.json(wizards)
   })
});

//add wizard
router.post('/',(req,res) => {

    let wizard = new Wizard();
    wizard.name = req.body.name;
    wizard.house = req.body.house;
    wizard.pet = req.body.pet;
    
    wizard.save((err,data) => {
        
        if(err){
            res.send(err);
        }

        res.json({
            message: "Wizard added scuess",
            data: data
        })
    }

    );

});

// view wizard from ID
router.get('/:id',(req,res) => {

  
});


// edit wizard from ID
router.put('/:id',(req,res) => {
  Wizard.findById(req.params.id,(err,wizard) =>{
        if(err){
          res.send(err);
        }

        wizard.name  = req.body.name;
        wizard.house  = req.body.house;
        wizard.pet  = req.body.pet;

    wizard.save((err,data) => {
        
        if(err){
            res.send(err);
        }

        res.json({
            message: "update scuess",
            data: data
        });
    })
  
});
});

// edit wizard from ID
router.delete('/:id',(req,res) => {
res.send(`View wizard of ID --> ${req.param.id}`)
});

//javascript module
export const WizardRoutes = router;