import { Component, OnInit } from '@angular/core';
import { VehicleService } from "app/service/vehicle.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {
vehicle = {};

  constructor(private router: Router, private route: ActivatedRoute, private VehicleService: VehicleService) { }

  ngOnInit() {
    this.getVehicle(this.route.snapshot.params['id']);
  }

  getVehicle(id) {
    this.VehicleService.showVehicles(id).then((res) => {
      this.vehicle = res;
      console.log(this.vehicle);
    }, (err) => {
      console.log(err);
    });
  }

  updateVehicle(id) {
    this.VehicleService.updateVehicle(id, this.vehicle).then((result) => {
        this.router.navigate(['/']);
    }, (err) => {
      console.log(err);
    });
  }

  deleteVehicle(id) {
  this.VehicleService.deleteVehicle(id).then((result) => {
     this.router.navigate(['/']);
  }, (err) => {
    console.log(err);
  });
}

}
