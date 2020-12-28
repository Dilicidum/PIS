import {Routes} from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FullFormComponent } from './full-form/full-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserSingleComponent } from './users-list/user-single/user-single.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StartPageComponent } from './start-page/start-page.component';
import { HomeComponent } from './home/home.component';

export const routes : Routes = [
  {
    path:'fullForm',component:FullFormComponent,outlet:'outlet1'
  },
  {path:'parent',component:ParentComponent,children:[
    {path:'child',component:ChildComponent}
  ]},
  {
    path:'users',component:UsersListComponent,children:[
      {path:':id',component:UserSingleComponent,pathMatch:'full'}
    ]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'registration',component:RegisterComponent
  },
  {
    path:'employees',component:EmployeesComponent
  },
  {
    path:'home',component:HomeComponent,
  },
  {
    path:'',component:StartPageComponent
  },
  {
    path:'**',redirectTo:'users'
  },
]
