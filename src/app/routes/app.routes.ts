import { RouterModule, Routes } from '@angular/router'
import { ProtectedComponent } from '../modules/bootstrap/components/protected/protected.component';

const AppRoutes: Routes = [{
    path: '',
    component: ProtectedComponent
}];

export const APP_ROUTES = RouterModule.forRoot(AppRoutes);