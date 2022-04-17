import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { DetailsComponent } from './details/details.component';
import { LinkDeviceComponent } from './link-device/link-device.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchingComponent } from './searching/searching.component';
import { SettingsComponent } from './settings/settings.component';
import { BACComponent } from './bac/bac.component';
import { UberComponent } from './uber/uber.component';
import { StatisticsComponent } from './statistics/statistics.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home-page', component: HomePageComponent, data: { text: 'Home Page' } },
  { path: 'profile', component: ProfileComponent, data: { text: 'Profile' } },
  { path: 'emergency-contact', component: EmergencyContactComponent, data: { text: 'Emergency Contact' } },
  { path: 'details', component: DetailsComponent, data: { text: 'Details' } },
  { path: 'link-device', component: LinkDeviceComponent, data: { text: 'Link Device' } },
  { path: 'about-us', component: AboutUsComponent, data: { text: 'About Us' } },
  { path: 'searching', component: SearchingComponent, data: { text: 'Searching...' } },
  { path: 'settings', component: SettingsComponent, data: { text: 'Settings' } },
  { path: 'bac', component: BACComponent, data: { text: 'BAC' } },
  { path: 'uber', component: UberComponent, data: { text: 'Uber' } },
  { path: 'statistics', component: StatisticsComponent, data: { text: 'Statistics' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
