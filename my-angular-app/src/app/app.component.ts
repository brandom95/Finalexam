import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JavaScript Frameworks Final Exam';
  data = [
    { name: 'John', age: 30, contact: 'john@gmail.com', homeAddress: '123 Main St', workAddress: '456 Business Ave' },
    { name: 'Alice', age: 25, contact: 'alice@gmail.com', homeAddress: '789 Park Rd', workAddress: '101 Corporate Blvd' },
    { name: 'Max', age: 25, contact: 'max@gmail.com', homeAddress: '360 york st', workAddress: '2201 bank Blvd' },

  ];
}
