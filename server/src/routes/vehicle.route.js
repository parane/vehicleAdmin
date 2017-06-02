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
router.post('/add/',(req,res) => {


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

  Vehicle.findById(req.params.id, (err, vehicle) => {
        if (err)
            res.send(err);
        res.json(vehicle);
    });
});


// edit wizard from ID
router.put('/update/:id', (req, res) => {
    Vehicle.findById(req.params.id, (err, vehicle) => {
        if (err)
            res.send(err);

        vehicle.title = req.body.title;
    	vehicle.description = req.body.description;
    	vehicle.price = req.body.price;

        vehicle.save((err, data) => {
            if (err)
                res.send(err);

            res.json({
                message: "updated successfully",
                data: data
            });
        })
    });
});

// Delete wizard from ID
router.delete('/:id', (req, res) => {
    Vehicle.remove({
        _id: req.params.id
    }, (err, data) => {
        if (err)
            res.send(err);

        res.json({
            "message": "Deleted Successfully",
            data: data
        })
    });
});

//javascript module
export const VehicleRoutes = router;
