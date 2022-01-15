import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/app.animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    flyInOut()
  ]
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
