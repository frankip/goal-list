import { Injectable } from '@angular/core';
import { Goal } from '../components/goal';
import { Goals } from '../components/goals';


@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goals
  }
  getGoal(id){
    for (let goal of Goals){
      if (goal.id == id){
        return goal;
      }
    }
  }


  constructor() { }
}
