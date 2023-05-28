import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { setAriaHidden } from 'ag-grid-community/dist/lib/utils/aria';
import { Customer } from 'src/app/Model/Customer';
import { Produit } from 'src/app/Model/Produit';
import { ProductService } from 'src/app/Service/product.service';
import { BtnCellRendererComponent } from 'src/app/btn-cell-renderer/btn-cell-renderer.component';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css'],
})
export class ListProduitComponent implements OnInit {
  rowData: Produit[] = [];
  Produit: Produit = new Produit();
  constructor(private productService: ProductService, private router: Router) {}

  columnDefs = [
    { headerName: 'Id', field: 'id', hide: true, height: 100 },
    { headerName: 'Name', field: 'name', height: 100 },
    { headerName: 'Price', field: 'price' },
    { headerName: 'CreationDate', field: 'creationDate' },
    { headerName: 'UpdateDate', field: 'updateDate' },
    {
      field: 'Action',
      cellRenderer: BtnCellRendererComponent,
      cellRendererParams: {
        clicked: (field: any) => {
          this.Produit = field;
        },
      },
      minWidth: 350,
    },
  ];

  ngOnInit(): void {
    this.productService.GetListProduct().subscribe((data) => {
      this.rowData = data;
    });
  }

  ListProduit(Product: Produit[]) {
    debugger;
    this.rowData = Product;
  }

  AddProduct() {
    this.router.navigate(['Home/Product/Add']);
  }
}
