import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {


  vehicles =[{title:'hellp',description:'hellp',price:10},{title:'hell11',description:'hellp11',price:10}];
  constructor() { }

  ngOnInit() {
  }

}
