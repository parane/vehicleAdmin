import { Component, OnInit } from '@angular/core';
import { VehicleService } from "app/service/vehicle.service";
import { Router, ActivatedRoute } from "@angular/router/src";

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {
vehicle = {};

  constructor(private VehicleService: VehicleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getVehicle(this.route.snapshot.params['id']);
  }

  getVehicle(id) {
    /*this.bookService.showBook(id).then((res) => {
      this.book = res;
      console.log(this.book);
    }, (err) => {
      console.log(err);
    });*/
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
