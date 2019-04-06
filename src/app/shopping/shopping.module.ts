import {NgModule} from '@angular/core';
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {CheckOutComponent} from "./check-out/check-out.component";
import {OrderSuccessComponent} from "./order-success/order-success.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {ProductFilterComponent} from "./products/product-filter/product-filter.component";
import {ShoppingCartSummaryComponent} from "./shopping-cart-summary/shopping-cart-summary.component";
import {ShippingFormComponent} from "./shipping-form/shipping-form.component";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../shared/services/auth-guard.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        ProductFilterComponent,
        ShoppingCartSummaryComponent,
        ShippingFormComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: 'products', component: ProductsComponent},
            {path: 'shopping-cart', component: ShoppingCartComponent},
            {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
            {path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]},
            {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
        ])
    ]
})
export class ShoppingModule {
}
