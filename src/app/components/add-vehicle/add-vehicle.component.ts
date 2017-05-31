import { Component, OnInit } from '@angular/core';
import { VehicleService } from "app/service/vehicle.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

 vehicle = {};
  constructor(private vehicleService: VehicleService,private router: Router) { }

  ngOnInit() {
  }

  saveVehicle(){
   this.vehicleService.saveVehicle(this.vehicle).then((result) => {
      let id = result['_id'];
      console.log(id);
      this.router.navigate(['/']);
    }, (err) => {
      console.log(err);
    });
  }

}
