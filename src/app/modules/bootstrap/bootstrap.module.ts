import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BootstrapComponent } from './components/bootstrap/bootstrap.component';

@NgModule({
    declarations: [
        BootstrapComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [BootstrapComponent]
})
export class BootstrapModule { }