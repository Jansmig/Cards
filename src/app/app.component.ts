import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'Weasel',
      content: 'I saw a neat tree today.'
    },
    {
      title: 'Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'Mountain-Geek',
      content: 'Snowy mountain rules.'
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biker123',
      content: 'best hobby ever!'
    }
  ];
} 
