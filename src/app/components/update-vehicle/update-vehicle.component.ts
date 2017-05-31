import { Component, OnInit } from '@angular/core';
import { VehicleService } from "app/service/vehicle.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {
vehicle = {};

  constructor(private route: ActivatedRoute,private VehicleService: VehicleService) { }

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

  updateBook(id) {
    /*this.VehicleService.updateVehicle(id, this.book).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/book-details', id]);
    }, (err) => {
      console.log(err);
    });*/
  }

}
