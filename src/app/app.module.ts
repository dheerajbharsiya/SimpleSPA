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
    PtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
