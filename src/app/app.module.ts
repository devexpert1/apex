import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {SharedModule} from './shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { AdminService } from './services/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { DomainComponent } from './domain/domain.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    BlogComponent,
    ContactUsComponent,
    DomainComponent,
    ErrorComponent
    
  ],
  imports: [ 
    HttpClientModule,
    BrowserModule,SharedModule,CarouselModule  , BrowserAnimationsModule ,
    AppRoutingModule
  ],
  providers: [
    AdminService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
