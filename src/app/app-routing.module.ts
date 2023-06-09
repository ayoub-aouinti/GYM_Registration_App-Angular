import { UserDetailComponent } from './user-detail/user-detail.component';
import { ResitrationListComponent } from './resitration-list/resitration-list.component';
import { CreateResitrationComponent } from './create-resitration/create-resitration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path: 'register', component:CreateResitrationComponent},
  {path: 'list', component:ResitrationListComponent},
  {path: 'detail/:id', component: UserDetailComponent},
  {path: 'update/:id', component: CreateResitrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
