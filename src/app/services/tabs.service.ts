import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  activeTab: number;
  constructor(
    private router: Router,
    private location: Location
  ) { 
    this.activeTab = -1;
  }

  changeTab(tab: number) {
    if(this.activeTab === tab) return;

    switch(tab) {
      case 1:
      default: 
        this.activeTab = 1;
        this.router.navigateByUrl('/home');
        break;
      case 2:
        this.activeTab = 2;
        this.router.navigateByUrl('/903');
        break;
      case 3: 
        this.activeTab = 3;
        this.router.navigateByUrl('/904');
        break;
      case 4:
        this.activeTab = 4;
        this.router.navigateByUrl('/trebovanje-izvoza');
        break;
      case 5:
        this.activeTab = 5;
        this.router.navigateByUrl('/provera-trebovanja-izvoza');
        break;
    }
  }
}
