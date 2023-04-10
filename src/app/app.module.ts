import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactComponent } from './contact/contact.component';
import { Frame1Component } from './frame1/frame1.component';
import { FooterComponent } from './footer/footer.component';
import { Frame2Component } from './frame2/frame2.component';
import { Frame3Component } from './frame3/frame3.component';
import { Frame4Component } from './frame4/frame4.component';
import { Frame5Component } from './frame5/frame5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NewsUpdatesComponent,
    FacultyComponent,
    AdmissionComponent,
    ContactComponent,
    Frame1Component,
    FooterComponent,
    Frame2Component,
    Frame3Component,
    Frame4Component,
    Frame5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
