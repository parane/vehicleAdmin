import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { Routing } from "app/app.routing";
import { AddVehicleComponent } from "app/components/add-vehicle/add-vehicle.component";
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from "app/shared/guards/login.guard";
import { VehicleService } from "app/service/vehicle.service";
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    DashBoardComponent,
    AddVehicleComponent,
    LoginComponent,
    UpdateVehicleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [
    LoginGuard,
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
