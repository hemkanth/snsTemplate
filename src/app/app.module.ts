import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// angular material design libaray
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LevelsComponent } from './levels/levels.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { BadgesComponent } from './badges/badges.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LevelsComponent,
    AchievementsComponent,
    BadgesComponent,
    ActivitiesComponent,
    ProfileComponent,
    ContactAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
