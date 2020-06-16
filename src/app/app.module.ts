import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { FormsModule } from '@angular/forms';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    GoalListComponent,
    GoalDetailsComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
