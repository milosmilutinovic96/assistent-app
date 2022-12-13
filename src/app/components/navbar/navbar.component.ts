import { Component, Input, OnInit } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public tabsService: TabsService) { }

  ngOnInit(): void {
    this.tabsService.changeTab(1);
  }

}
