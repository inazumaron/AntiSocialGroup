import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestSite';
  memCont = [
    {"name":"Person A", "cont":"Leader, manager"},
    {"name":"Person B", "cont":"AGF #1 handler"},
    {"name":"Person C", "cont":"AGF #2 handler"},
  ]
  
}
