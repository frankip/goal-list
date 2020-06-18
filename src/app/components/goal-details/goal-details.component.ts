import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GoalService } from 'src/app/goal-service/goal.service';


@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() goal:Goal;
  @Output() isComplete =  new EventEmitter<boolean>();

  goalComplete(deletegoal: boolean){
    this.isComplete.emit();
  }
  
  goalDelete(deletegoal:boolean){
    // console.log('inafika');
    this.isComplete.emit(deletegoal)
  }

  constructor(private route:ActivatedRoute, private service:GoalService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id)
  }

}
