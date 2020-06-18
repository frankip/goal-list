import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';
GoalDetailsComponent

const routes: Routes = [
  {path : 'goals', component: GoalListComponent},
  {path : 'about', component: AboutComponent},
  { path: 'goals/:id', component: GoalDetailsComponent},
  {path : '**', component: NotFoundComponent},
  {path : '', redirectTo:"/goals", pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
