import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  data: any;
  categories = [];
  products = [];
  constructor(private http: HttpClient) { }
  matchesCategoryId(categories, id) {
    let matches = false;
    categories.forEach(element => element.category_id === id ? matches = true : matches);
    return matches;
  }
  ngOnInit(): void {
    this.http.get('http://www.mocky.io/v2/5ed0b4443500005b00ff9e02')
      .subscribe(Response => {
                console.log(Response)
        this.data = Response;
        this.categories = this.data.categories;
        this.categories.sort(function (a, b) {
          if (a.ordinal > b.ordinal) {
            return 1;
          }
          if (a.ordinal < b.ordinal) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        this.products = this.data.products;
      });
  }
} 