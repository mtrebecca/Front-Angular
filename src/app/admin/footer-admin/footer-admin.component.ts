import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-admin',
  templateUrl: './footer-admin.component.html',
  styleUrls: ['./footer-admin.component.css']
})
export class FooterAdminComponent implements OnInit {
  links: 'http://localhost:4200/admin'
  constructor() { }

  ngOnInit(): void {
  }

}
