import {NgModule} from '@angular/core';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent,
        LoginComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([])
    ],
    exports: [
        NavbarComponent
    ]
})
export class CoreModule {
}
