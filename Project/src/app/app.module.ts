import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { FullFormComponent } from './full-form/full-form.component';
import { ForbiddenNameDirective } from './shared/forbidden-name.directive';
import { WhiteForbiddenDirective } from './shared/white-forbidden.directive';
import { IdentityRevealedDirective } from './shared/identity-revealed.directive';
import { httpInterceptorProviders } from './shared/httpInterceptors';
import { UsersListComponent } from './users-list/users-list.component';
import { UserSingleComponent } from './users-list/user-single/user-single.component';
import {RouterModule} from '@angular/router';
import { routes } from './routes';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { HomeComponent } from './home/home.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    FullFormComponent,
    ForbiddenNameDirective,
    WhiteForbiddenDirective,
    IdentityRevealedDirective,
    UsersListComponent,
    UserSingleComponent,
    EmployeesComponent,
    EmployeeComponent,
    HomeComponent,
    StartPageComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
