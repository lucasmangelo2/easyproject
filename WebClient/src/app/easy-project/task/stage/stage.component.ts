import { Component, OnInit, Input } from '@angular/core';
import { Stage } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  @Input() stage : Stage;

  constructor(private taskService : TaskService) {}

  ngOnInit() {
  }

  onAddNewTask(){
    debugger;
    this.taskService.onNewTask(this.stage.id);
  }

}
