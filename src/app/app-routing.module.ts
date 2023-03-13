import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostComponent } from './all-post/all-post.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [

{path:'',component:DashboardComponent},
{path:'category',component:CategoryComponent},

{path:'AllPost',component:AllPostComponent},
{path:'Post/New',component:NewPostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
