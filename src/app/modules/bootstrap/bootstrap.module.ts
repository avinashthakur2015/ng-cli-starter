import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { ProtectedComponent } from './components/protected/protected.component';

import { APP_ROUTES } from './../../routes/app.routes';

@NgModule({
    declarations: [
        BootstrapComponent,
        ProtectedComponent
    ],
    exports: [
        ProtectedComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,

        APP_ROUTES
    ],
    providers: [],
    bootstrap: [BootstrapComponent]
})
export class BootstrapModule { }