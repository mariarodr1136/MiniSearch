import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchQuery = '';

  search() {
    if (this.searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${this.searchQuery}`, '_blank');
    }
  }
}