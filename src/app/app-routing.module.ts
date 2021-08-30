import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AngularComponent } from './angular/angular.component';
import { AngularionicComponent } from './angularionic/angularionic.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { HrComponent } from './hr/hr.component';
import { InnerPageComponent } from './inner-page/inner-page.component';
import { MailComponent } from './mail/mail.component';
import { NetComponent } from './net/net.component';
import { PolicyComponent } from './policy/policy.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { ServicesComponent } from './services/services.component';
import { SocialComponent } from './social/social.component';
import { TermsComponent } from './terms/terms.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'angular', component: AngularComponent},
  { path: 'angularionic', component: AngularionicComponent},
  { path: 'form', component: FormComponent},
  { path: 'hr', component: HrComponent},
  { path: 'inner-page', component: InnerPageComponent},
  { path: 'net', component: NetComponent},
  { path: 'policy', component: PolicyComponent},
  { path: 'portfolio-details', component: PortfolioDetailsComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'work', component: WorkComponent},
  { path: 'mail', component: MailComponent},
  { path: 'social', component: SocialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
