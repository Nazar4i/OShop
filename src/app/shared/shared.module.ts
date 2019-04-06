import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ProductQuantityComponent} from "./components/product-quantity/product-quantity.component";
import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";
import {ProductService} from "./services/product.service";
import {CategoryService} from "./services/category.service";
import {OrderService} from "./services/order.service";
import {AuthGuard} from "./services/auth-guard.service";
import {ShoppingCartService} from "./services/shopping-cart.service";
import {FormsModule} from "@angular/forms";
import {CustomFormsModule} from "ng2-validation";
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
} from "@angular/material";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ToastrModule} from "ngx-toastr";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [
        ProductCardComponent,
        ProductQuantityComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CustomFormsModule,
        MatTableModule,
        MatSortModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        NgxDatatableModule,
        MatPaginatorModule,
        MatIconModule,
        ToastrModule.forRoot(),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgbModule.forRoot()
    ],
    exports: [
        CommonModule,
        ProductCardComponent,
        ProductQuantityComponent,
        FormsModule,
        CustomFormsModule,
        MatTableModule,
        MatSortModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        NgxDatatableModule,
        MatPaginatorModule,
        MatIconModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgbModule.forRoot().ngModule
    ],
    providers: [
        AuthService,
        AuthGuard,
        UserService,
        CategoryService,
        ProductService,
        ShoppingCartService,
        OrderService
    ]
})
export class SharedModule {
}
