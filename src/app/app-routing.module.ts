import { ContactusComponent } from './aboutus/contactus/contactus.component';
import { TeamComponent } from './aboutus/team/team.component';
import { ProfileComponent } from './aboutus/profile/profile.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgModule } from '@angular/core';
import { Routes, PreloadAllModules } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HealthreportComponent } from './healthreport/healthreport.component';
import { PtoComponent } from './pto/pto.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', component: HealthreportComponent
    },
    {
        path: 'login', component: SigninComponent
    },
    {
        path: 'healthreport', component: HealthreportComponent
    },
    {
        path: 'pto', component: PtoComponent
    },
    {
        path: 'aboutus', component: AboutusComponent,
        children: [{
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full'
        },
        {
            path: 'profile',
            component: ProfileComponent
        },
        {
            path: 'team',
            component: TeamComponent
        },
        {
            path: 'contactus',
            component: ContactusComponent
        }
        ]
    },
    {
        path: '**', component: HealthreportComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}