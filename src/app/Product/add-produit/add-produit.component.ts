import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Produit } from 'src/app/Model/Produit';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent implements OnInit {
  myform: FormGroup;
  Product: Produit = new Produit();

  constructor(
    private formBuild: FormBuilder,
    private cServiceProduct: ProductService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {
    this.myform = this.formBuild.group({
      name: ['', Validators.required, Validators.minLength(4)],
      price: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.activateRouter.params.subscribe((data) => {
      let id = data['id'];
      if (data['id'] > 0) {
        this.cServiceProduct.GetProductById(id).subscribe((item) => {
          debugger;
          this.myform.value.name = item.name;
          this.myform.value.price = item.price;
          this.myform.value.stock = item.stock;
          this.myform.value.id = item.id;
        });
      }
    });
  }

  get ValueRequired() {
    return this.myform.controls;
  }

  get name() {
    return this.myform.get('name');
  }

  SaveProduct(form: any) {
    if (this.myform.invalid) return;

    this.Product.name = form.name;
    this.Product.stock = form.stock;
    this.Product.price = form.price;

    this.cServiceProduct.SaveProduct(this.Product).subscribe((data) => {
      if (data) {
        this.router.navigate(['/Home/Product']);
      }
    });
  }
}
