import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DomainComponent } from './domain/domain.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
		{path: '', component: HomeComponent},
		{path: 'domain/:type', component: DomainComponent},
		{path: 'domain/:type/home', component: HomeComponent},
		{path: 'domain/:type/about-us', component: AboutUsComponent},
		{path: 'domain/:type/blog', component: BlogComponent},
		{path: 'domain/:type/contact-us', component: ContactUsComponent},
		{path: ':type/error', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
