import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {
  links: 'http://localhost:4200/admin'
  constructor() { }

  ngOnInit(): void {
  }

}
