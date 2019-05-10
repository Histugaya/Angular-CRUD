import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import {RouterModule} from '@angular/router';
import{ ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule,MatInputModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OperatorComponent } from './operator/operator.component';
import { ErrorComponent } from './error/error.component';
import { ErrorService } from './error/error.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    OperatorComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    
    RouterModule.forRoot([
      {
        path:'' , 
        component: DashboardComponent
      },
      {
        path:'login' ,
         component: LoginComponent
      },
      {
        path:'operator',
        component: OperatorComponent
      },
      {
        path:'error',
        component:ErrorComponent
      }
    ])  

  ],
  providers: [{
    provide:ErrorHandler,
    useClass: ErrorService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
