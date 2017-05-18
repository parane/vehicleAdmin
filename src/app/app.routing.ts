import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from "app/components/dash-board/dash-board.component";
import { AddVehicleComponent } from "app/components/add-vehicle/add-vehicle.component";

const APP_ROUTES: Routes = [
 
    {
        path: '',
        component: DashBoardComponent
    },
    {
        path: 'add',
        component: AddVehicleComponent
    }
];


export const Routing = RouterModule.forRoot(APP_ROUTES);