import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() goal:Goal;
  @Output() isComplete =  new EventEmitter();

  goalComplete(goal){
    this.isComplete.emit();
  }
  
  goalDelete(complete:boolean){
    // console.log('inafika');
    this.isComplete.emit(complete)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
