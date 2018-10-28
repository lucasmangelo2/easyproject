import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sprint } from '../../models/sprint.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sprint-time-line',
  templateUrl: './sprint-time-line.component.html',
  styleUrls: ['./sprint-time-line.component.scss']
})
export class SprintTimeLineComponent implements OnInit {

  @Input() direction : string;
  @Input() sprint : Sprint;
  @Output() onclick : EventEmitter<any> = new EventEmitter<any>();

  id : string;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  onClick(event){
    this.onclick.emit({event, item: this.sprint});
  }

}
