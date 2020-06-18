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

  constructor() { }
}
