import { Component } from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'manage-app',
  styleUrls: [
    './manage-app.scss'
  ],
  templateUrl: './manage-app.html'
})
export class ManageAppComponent {
  constructor( router: Router ) { }
}
