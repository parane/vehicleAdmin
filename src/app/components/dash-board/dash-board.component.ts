import { Component, OnInit } from '@angular/core';
import { VehicleService } from "app/service/vehicle.service";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {


  vehicles:any; //=[{title:'hellp',description:'hellp',price:10},{title:'hell11',description:'hellp11',price:10}];
   constructor(private VehicleService: VehicleService) { }
  ngOnInit() {
        this.getVehicleList();

  }
getVehicleList() {
    this.VehicleService.getAllVehicles().then((res) => {
      this.vehicles = res;
    }, (err) => {
      console.log(err);
    });
  }
}
