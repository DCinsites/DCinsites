
// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guarded Components
import { UserComponent } from '../user/user.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../admin/admin.component';

// Main Components
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { PricingPackagesComponent } from '../components/pricing-packages/pricing-packages.component';
import { MarketingComponent } from '../components/marketing/marketing.component';
import { WebsitesComponent } from '../components/websites/websites.component';
import { ContactComponent } from '../components/contact/contact.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { LegalComponent } from '../components/legal/legal.component';


const routes: Routes = [
    { path: '',
      component: HomeComponent },
    { path: 'about',
      component: AboutComponent },
    { path: 'pricing',
      component: PricingPackagesComponent },
    { path: 'marketing',
      component: MarketingComponent },
    { path: 'websites',
      component: WebsitesComponent },
    { path: 'contact',
      component: ContactComponent },
    { path: 'portfolio',
      component: PortfolioComponent },
    { path: 'login',
      component: LoginComponent },
    { path: 'register',
      component: RegisterComponent },
    { path: 'admin',
      component: AdminComponent },
    { path: 'user',
      component: UserComponent },
    { path: 'legal',
      component: LegalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
