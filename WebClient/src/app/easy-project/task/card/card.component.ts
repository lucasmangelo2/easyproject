import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() task : Task;
  
  private count : number = 0;

  constructor(private taskService: TaskService) { }

  ngOnInit() {}

  onEditTask(event){
    this.taskService.onEditTask(this.task);
  }

}
