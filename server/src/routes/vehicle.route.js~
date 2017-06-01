import express from 'express';
import {Vehicle} from '../models/vehicle.model'

let router = express.Router();

//get all wizard
router.get('/',(req,res) => {
   Vehicle.find((err,vehicles)=>{
       if(err){
           res.send(err);
        
       }
       res.json(vehicles)
   })
});

//add wizard
router.post('/',(req,res) => {


    let vehicle = new Vehicle();
    vehicle.title = req.body.title;
    vehicle.description = req.body.description;
    vehicle.price = req.body.price;
    
    vehicle.save((err,data) => {
        
        if(err){
            res.send(err);
        }

        res.json({
            message: "Vehicle added scuess",
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

});

// edit wizard from ID
router.delete('/:id',(req,res) => {

});

//javascript module
export const VehicleRoutes = router;