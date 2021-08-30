import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { AngularComponent } from './angular/angular.component';
import { AngularionicComponent } from './angularionic/angularionic.component';
import { FormComponent } from './form/form.component';
import { HrComponent } from './hr/hr.component';
import { NetComponent } from './net/net.component';
import { PolicyComponent } from './policy/policy.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { TermsComponent } from './terms/terms.component';
import { InnerPageComponent } from './inner-page/inner-page.component';
import { BlogComponent } from './blog/blog.component';
import { NavsmallComponent } from './navsmall/navsmall.component';
import { NavbigComponent } from './navbig/navbig.component';
import { WorkComponent } from './work/work.component';
import { MailComponent } from './mail/mail.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    CareersComponent,
    ContactComponent,
    AngularComponent,
    AngularionicComponent,
    FormComponent,
    HrComponent,
    NetComponent,
    PolicyComponent,
    PortfolioDetailsComponent,
    TermsComponent,
    InnerPageComponent,
    BlogComponent,
    NavsmallComponent,
    NavbigComponent,
    WorkComponent,
    MailComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
