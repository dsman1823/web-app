import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  events: Array<String>;

  connect(): void {
    const source = new EventSource('http://localhost:8080/api-app/stream');
    source.addEventListener('message', (message: any) => {
      this.events.push(message.data);
    });
  }

  ngOnInit(): void {
    this.connect();
    this.events = [];
  }

}
