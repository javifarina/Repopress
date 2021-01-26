import { Component, OnInit } from '@angular/core';
import { RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
 imagen= "assets/img/Polisinfondoyborde.png"
  
constructor() { }

  ngOnInit(): void {
  }

}
