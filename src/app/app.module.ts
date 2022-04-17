import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule, IgxNavbarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { DetailsComponent } from './details/details.component';
import { LinkDeviceComponent } from './link-device/link-device.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchingComponent } from './searching/searching.component';
import { SettingsComponent } from './settings/settings.component';
import { BACComponent } from './bac/bac.component';
import { UberComponent } from './uber/uber.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfileComponent,
    EmergencyContactComponent,
    DetailsComponent,
    LinkDeviceComponent,
    AboutUsComponent,
    SearchingComponent,
    SettingsComponent,
    BACComponent,
    UberComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
