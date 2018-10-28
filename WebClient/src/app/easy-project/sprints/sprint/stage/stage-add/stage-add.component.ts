import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/easy-project/services/task.service';

@Component({
  selector: 'app-stage-add',
  templateUrl: './stage-add.component.html',
  styleUrls: ['./stage-add.component.scss']
})
export class StageAddComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onNewTask(e){
    this.taskService.newTask.emit();
  }
}
