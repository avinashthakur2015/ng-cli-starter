import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bh-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  host: { 'class': 'bh-sidenav' }
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
