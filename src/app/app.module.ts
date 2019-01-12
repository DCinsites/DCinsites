import { RegisterComponent } from './register/register.component';

// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './core/material';
import { AppRoutingModule } from './core/app-routing.module';

// Guarded Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

// Main Components
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LegalComponent } from './components/legal/legal.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { PricingPackagesComponent } from './components/pricing-packages/pricing-packages.component';
import { WebsitesComponent } from './components/websites/websites.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LegalComponent,
    MarketingComponent,
    NavigationComponent,
    PortfolioComponent,
    PricingPackagesComponent,
    WebsitesComponent,
    RegisterComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
