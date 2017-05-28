import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from "app/components/dash-board/dash-board.component";
import { AddVehicleComponent } from "app/components/add-vehicle/add-vehicle.component";
import { LoginComponent } from "app/components/login/login.component";
import { LoginGuard } from "app/shared/guards/login.guard";

const APP_ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: DashBoardComponent,
        canActivate: [LoginGuard],
        
    },
    {
        path: 'add',
        component: AddVehicleComponent
    }
];


export const Routing = RouterModule.forRoot(APP_ROUTES);