import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { ComputerRootComponent } from './computer-root/computer-root.component';
import { ContactComponent } from './contact/contact.component';

// import { routing } from './app.routing';

// used to create fake backend
import { JwtInterceptor } from 'src/app/helpers/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/helpers/error.interceptor';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavLeftComponent,
    HomeComponent,
    AboutComponent,
    PaymentComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    ComputerRootComponent,
    ContactComponent,
    LoginComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
    // ,
    // ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
