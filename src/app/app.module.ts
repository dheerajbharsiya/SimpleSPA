import {environment} from './../environments/environment'
import { AuthService } from './core/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileComponent } from './aboutus/profile/profile.component';
import { TeamComponent } from './aboutus/team/team.component';
import { ContactusComponent } from './aboutus/contactus/contactus.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { HealthreportComponent } from './healthreport/healthreport.component';
import { PtoComponent } from './pto/pto.component';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DatepipePipe } from './datepipe.pipe';
import { HealthReportDynamicComponent } from './health-report-dynamic/health-report-dynamic.component'
declare let require: any;
export function highchartsFactory() {
  const highcharts = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  dd(highcharts);
  return highcharts;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    AboutusComponent,
    ProfileComponent,
    TeamComponent,
    ContactusComponent,
    SidenavComponent,
    HealthreportComponent,
    PtoComponent,
    DatepipePipe,
    HealthReportDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  },
  AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
