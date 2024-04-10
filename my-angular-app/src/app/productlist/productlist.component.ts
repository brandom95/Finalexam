import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  title = 'Product List';
  products = [
    { name: 'Laptop', sales: { January: 100, February: 150, March: 200 } },
    { name: 'Smartphone', sales: { January: 200, February: 250, March: 300 } },
    { name: 'Tablet', sales: { January: 150, February: 180, March: 220 } },
  ];
}
