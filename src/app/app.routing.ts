import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from "app/components/dash-board/dash-board.component";
import { AddVehicleComponent } from "app/components/add-vehicle/add-vehicle.component";
import { LoginComponent } from "app/components/login/login.component";
import { LoginGuard } from "app/shared/guards/login.guard";
import { UpdateVehicleComponent } from "app/components/update-vehicle/update-vehicle.component";
import { ClientViewComponent } from "app/components/client-view/client-view.component";
import { UnsavedGuard } from "app/shared/guards/unsaved.guard";

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
        component: AddVehicleComponent,
        canActivate: [LoginGuard],
        canDeactivate: [UnsavedGuard]
    },
    {
        path: 'update/:id',
        component: UpdateVehicleComponent,
         canActivate: [LoginGuard],
    },
    {
        path: 'client',
        component: ClientViewComponent
    }
];


export const Routing = RouterModule.forRoot(APP_ROUTES);