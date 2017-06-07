import { CanDeactivate } from '@angular/router';
import { AddVehicleComponent } from "app/components/add-vehicle/add-vehicle.component";

export class UnsavedGuard implements CanDeactivate<AddVehicleComponent> {

    canDeactivate(target: AddVehicleComponent) {
        if (target.hasChanges()) {
            return confirm('Do you really want to cancel?');
        }
        return true;
    }
}