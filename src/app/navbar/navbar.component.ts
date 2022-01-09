import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  list = ['SOFTWARE ENGINEER', 'FRONT-END DEVELOPER', 'UI/UX ENTHUSIAST',]
  constructor() { }

  ngOnInit(): void {
  }

}
