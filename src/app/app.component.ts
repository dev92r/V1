import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'myPortfolio';
  
  list = ['SOFTWARE ENGINEER', 'FRONT-END DEVELOPER', 'UI/UX ENTHUSIAST',]
  
}