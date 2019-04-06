import {Component, OnDestroy, ViewChild} from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {Subscription} from "rxjs";
import {Product} from "../../../shared/models/product";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";


@Component({
    selector: 'app-admin-products',
    templateUrl: './admin-products.component.html',
    styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
    products: Product[];
    subscription: Subscription;
    items: Product[];
    searchKey: string;

    listData: MatTableDataSource<any>;
    displayedColumns: string[] = ['title', 'price', 'actions'];
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private productService: ProductService) {
        this.subscription = this.productService.getAll().subscribe(products => {
            this.products = products;
            this.listData = new MatTableDataSource(this.products);
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
            console.log(this.listData);
        });
    }

    onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
    }

    applyFilter() {
        this.listData.filter = this.searchKey.trim().toLowerCase();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
