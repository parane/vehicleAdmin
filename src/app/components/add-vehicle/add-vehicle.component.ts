import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

 vehicle = {};
  constructor() { }

  ngOnInit() {
  }

  saveVehicle(){
    console.log(this.vehicle);
  }

}
