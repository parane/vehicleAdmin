import { Component, OnInit } from '@angular/core';
import { VehicleService } from "app/service/vehicle.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {
filteredItems:any;
link ='http://www.luxury-carhire-marbella.com/upload/1420044666-luxury-car-hire-sport-cars.jpg'
vehicleImageLinks = [
  'https://www.ingenie.com/wp-content/uploads/2014/11/vauxhallcorsa-14.png',
  'http://www.luxury-carhire-marbella.com/upload/1420044666-luxury-car-hire-sport-cars.jpg',
  'http://www.georgianjournal.ge/pictures/image2/c0bd0cfca2643b02ac12cb647a9e6d18.jpg',
  'http://images.carzone.ie/Photolib/irl/Audi/A6/2018/4SA-4.JPG',
  'https://www.mayfairrentacar.com/wp-content/uploads/2014/05/Wauwatosa-outside.jpg'
]
  vehicles:any; //=[{title:'hellp',description:'hellp',price:10},{title:'hell11',description:'hellp11',price:10}];
   constructor(private VehicleService: VehicleService,private router: Router) { }
  ngOnInit() {
        this.getVehicleList();

  }
getVehicleList() {
    this.VehicleService.getAllVehicles().then((res) => {
      this.vehicles = res;
      this.assignCopy();
    }, (err) => {
      console.log(err);
    });
  }


  assignCopy(){
   this.filteredItems = Object.assign([], this.vehicles);
}

filterItem(value){
   if(!value) this.assignCopy(); //when nothing has typed
   this.filteredItems = Object.assign([], this.vehicles).filter(
      vehicle => vehicle.title.toLowerCase().indexOf(value.toLowerCase()) > -1
   )
}
}
