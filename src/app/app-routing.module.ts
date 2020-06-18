import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path : 'goals', component: GoalListComponent},
  {path : 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
