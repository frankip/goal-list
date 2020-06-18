import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { GoalService } from 'src/app/goal-service/goal.service';
import { Quote } from '../quote-class/quote';
import { HttpClient } from '@angular/common/http';
import { QuoteRequestService } from 'src/app/quote-http/quote-request.service';




@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  // goals = 'nwe goals tonight'

  goals: Goal[];
  quote: Quote;

  selectedGoal: Goal;
  
  

  constructor(goalService:GoalService, private http:HttpClient, private quoteService:QuoteRequestService) {
    this.goals = goalService.getGoals()
  }

  ngOnInit(): void {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }


  onSelect(goal:Goal): void {
    this.selectedGoal= goal;
  }

  deleteGoal(isComplete){
    console.log('inafika pia');
    // if (isComplete) {
    //   let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

    //   if (toDelete){
    //     this.goals.splice(index,1)
    //   }
    // }
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

}
