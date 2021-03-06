import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  products: any;
  searchTerm: string;
  selectedCategory: string;
  categories = ['All', 'Fruits', 'Vegetables','Chocolates','Breads'];
  constructor() { }

  ngOnInit() {
    

    this.products = [
      {
        id: 1,
        title: "Apple",
        description: "Fruits",
        img: "assets/images/apple.jpg",
        price: 8
      },
      {
        id:2,
        title: "Mango",
        description: "Fruits",
        img:"assets/images/mango.jpg",
        price: 6
      },
      {
        id:3,
        title: "Cabbage",
        description: "Vegetables",
        img:"assets/images/cabbage.jpg",
        price:3
      },
      {
        id:4,
        title: "Tomato",
        description: "Vegetables",
        img:"assets/images/tomato.jpg",
        price:2
      },
      {
        id:5,
        title: "Dairy Milk",
        description: "Chocolates",
        img:"assets/images/dairy milk.jpg",
        price:10
      },
      {
        id:6,
        title: "Kitkat",
        description: "Chocolates",
        img:"assets/images/kitkat.jpg",
        price:15
      },
      {
        id:7,
        title: "Brown Bread",
        description: "Breads",
        img:"assets/images/brown.png",
        price:13
      },
      {
        id:8,
        title: "White Bread",
        description: "Breads",
        img:"assets/images/white.jpg",
        price:12
      },
      {
        id:9,
        title: "Orange",
        description: "Fruits",
        img:"assets/images/orange.jpg",
        price:7
      },
      {
        id:10,
        title: "Carrot",
        description: "Vegetables",
        img:"assets/images/carrot.jpg",
        price:4
      },
      {
        id:5,
        title: "5 Star",
        description: "Chocolates",
        img:"assets/images/star.jpg",
        price:10
      },
    ]
  }
    
 
  

}
