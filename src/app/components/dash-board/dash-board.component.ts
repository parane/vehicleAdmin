import { Component, OnInit } from '@angular/core';
import { VehicleService } from "app/service/vehicle.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

 filteredItems:any;
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

  onUpdateClick(id){
   console.log('click'+id);
   this.router.navigate(['/update',id]);
  }

  assignCopy(){
   this.filteredItems = Object.assign([], this.vehicles);
}

  deleteVehicle(id) {
  this.VehicleService.deleteVehicle(id).then((result) => {
     this.router.navigate(['/']);
  }, (err) => {
    console.log(err);
  });
}



filterItem(value){
   if(!value) this.assignCopy(); //when nothing has typed
   this.filteredItems = Object.assign([], this.vehicles).filter(
      vehicle => vehicle.title.toLowerCase().indexOf(value.toLowerCase()) > -1
   )
}

}
