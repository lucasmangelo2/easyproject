import { Component, OnInit, Input } from '@angular/core';
import { Stage } from 'src/app/easy-project/models/stage.model';
import { Task } from 'src/app/easy-project/models/task.model';
import { TaskService } from 'src/app/easy-project/services/task.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  @Input() stage : Stage;
  tasks: Task[] = []

  constructor(private taskService : TaskService) {}

  ngOnInit() {
    
    this.taskService
        .getTaskByStage(this.stage._id)
        .subscribe((r) =>{
          this.tasks = r;
        })
  }

  onAddNewTask(){
    this.taskService.onNewTask(this.stage._id);
  }

}
