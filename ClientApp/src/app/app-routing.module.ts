import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';
import { ComputerRootComponent } from './computer-root/computer-root.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import {UserRole} from 'src/app/Models/userRole';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {
    path: 'user',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    data: { roles : [UserRole.User.toString()] },
    children: [
      {
        path: '',
        component: HomeComponent
      },
      { path: 'about', component: AboutComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'computer', component: ComputerRootComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  {
    path: 'admin',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    data: { roles : [UserRole.Admin.toString()] },
    children: [
      {
        path: '',
        component: AdminComponent
      },
      { path: 'about', component: AboutComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'computer', component: ComputerRootComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
