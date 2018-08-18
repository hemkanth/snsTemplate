import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snsTemplate';
  status: boolean = true;
  dashboardButton = true;
  levelsButtom = false;
  achievementsButton = false;
  badgesButton = false;
  activitiesButton = false;
  profileButton = false;
  contactAdminButton = false;
  clickEvent() {
    this.status = !this.status;
  }

  onClick(whichButton: String) {
    switch (whichButton) {
      case "dashboard": {
        this.dashboardButton = true;
        this.levelsButtom = false;
        this.achievementsButton = false;
        this.badgesButton = false;
        this.activitiesButton = false;
        this.profileButton = false;
        this.contactAdminButton = false;
        break;
      }
      case "levels": {
        this.dashboardButton = false;
        this.levelsButtom = true;
        this.achievementsButton = false;
        this.badgesButton = false;
        this.activitiesButton = false;
        this.profileButton = false;
        this.contactAdminButton = false;
        break;
      }
      case "achievements": {
        this.dashboardButton = false;
        this.levelsButtom = false;
        this.achievementsButton = true;
        this.badgesButton = false;
        this.activitiesButton = false;
        this.profileButton = false;
        this.contactAdminButton = false;
        break;
      }
      case "badges": {
        this.dashboardButton = false;
        this.levelsButtom = false;
        this.achievementsButton = false;
        this.badgesButton = true;
        this.activitiesButton = false;
        this.profileButton = false;
        this.contactAdminButton = false;
        break;
      }
      case "activities": {
        this.dashboardButton = false;
        this.levelsButtom = false;
        this.achievementsButton = false;
        this.badgesButton = false;
        this.activitiesButton = true;
        this.profileButton = false;
        this.contactAdminButton = false;
        break;
      }
      case "profile": {
        this.dashboardButton = false;
        this.levelsButtom = false;
        this.achievementsButton = false;
        this.badgesButton = false;
        this.activitiesButton = false;
        this.profileButton = true;
        this.contactAdminButton = false;
        break;
      }
      case "contactAdmin": {
        this.dashboardButton = false;
        this.levelsButtom = false;
        this.achievementsButton = false;
        this.badgesButton = false;
        this.activitiesButton = false;
        this.profileButton = false;
        this.contactAdminButton = true;
        break;
      }

      default: {
        console.log("no tab selected");

      }
    }
  }

}
