import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenForm1Component } from './template-driven-form1/template-driven-form1.component';
import { ViewChildExComponent } from './view-child-ex/view-child-ex.component';

const routes: Routes = [
  /* {path: 'admin', loadChildren:() => import('./admin/admin.module')
.then(mod => mod.AdminModule)},
{path: 'user', loadChildren:() => import('./user/user.module')
.then(mod => mod.UserModule)}, */
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'place-holder', component: PlaceHolderComponent},
  {path: 'course-list', component: CourseListComponent},
  {path: 'course/:id', component: CourseDetailsComponent},
  {path: 'view-child', component: ViewChildExComponent},
  {path: 't-form', component: TemplateDrivenForm1Component},
  {path: 'r-form', component: ReactiveFormComponent},
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/* ,
    { enableTracing: true } */)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModules = [EmployeeListComponent, PlaceHolderComponent, CourseListComponent, CourseDetailsComponent, PageNotFoundComponent];
