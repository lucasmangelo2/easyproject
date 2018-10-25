import { Component, OnInit } from '@angular/core';
import { Sprint } from '../models/sprint.model';
import { SprintService } from '../services/sprint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {

  list : Sprint[];

  constructor(private sprintService : SprintService,
              private router : Router) { }

  ngOnInit() {
    this.sprintService
        .getSprints()
        .subscribe((r) => {
          this.list = r;
        })
  }

  getItemDrection(item :Sprint): string{
    let index : number = this.list.indexOf(item);

    return index % 2 == 0 ? "left" : "right"; 
  }

}
