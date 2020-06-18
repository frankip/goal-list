import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { FormsModule } from '@angular/forms';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { GoalFormComponent } from './components/goal-form/goal-form.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GoalListComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
