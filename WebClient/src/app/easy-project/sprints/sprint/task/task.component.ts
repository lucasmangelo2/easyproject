import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Task } from 'src/app/easy-project/models/task.model';
import { TaskService } from 'src/app/easy-project/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task : Task;
  
  private count : number = 0;

  constructor(private taskService: TaskService) { }

  ngOnInit() {}

  onEditTask(event){
    this.taskService.onEditTask(this.task);
  }

}
