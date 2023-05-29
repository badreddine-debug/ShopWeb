import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Produit } from 'src/app/Model/Produit';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-search-produit',
  templateUrl: './search-produit.component.html',
  styleUrls: ['./search-produit.component.css'],
})
export class SearchProduitComponent implements OnInit {
  product: Produit = new Produit();
  @Output() SearchListProduit = new EventEmitter();

  SearchInputProduit = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    stock: new FormControl(),
  });

  constructor(private serviceProduct: ProductService) {}

  ngOnInit(): void {}

  // SearchProduit() {
  //   this.product.name = this.SearchInputProduit.value.name;
  //   this.product.price = this.SearchInputProduit.value.price ?? 0;
  //   this.product.stock = this.SearchInputProduit.value.stock ?? 0;
  //   this.serviceProduct.SearchListProduct(this.product).subscribe((data) => {
  //     this.SearchListProduit.emit(data);
  //   });
  // }

  SearchProduit() {
    this.serviceProduct.GetListProduct().subscribe((data) => {
      debugger;
      if (
        this.SearchInputProduit.value.name != '' &&
        this.SearchInputProduit.value.name != null
      ) {
        data = data.filter((x) =>
          x.name.includes(this.SearchInputProduit.value.name)
        );
      }

      if (this.SearchInputProduit.value.price > 0) {
        data = data.filter(
          (x) => x.price == this.SearchInputProduit.value.price
        );
      }

      if (this.SearchInputProduit.value.stock > 0) {
        data = data.filter(
          (x) => x.stock >= this.SearchInputProduit.value.stock
        );
      }

      this.SearchListProduit.emit(data);
    });
  }
}
