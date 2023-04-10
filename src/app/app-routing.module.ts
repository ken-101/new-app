import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FacultyComponent } from './faculty/faculty.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { Frame1Component } from './frame1/frame1.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'admission', component: AdmissionComponent},
  {path: 'news-updates', component: NewsUpdatesComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'faculty', component: FacultyComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'frame1', component: Frame1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
