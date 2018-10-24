import { Component, OnInit, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TaskService } from '../services/task.service';
import { Stage } from '../models/stage.model';
import { StageService } from '../services/stage.service';
import { Subscription } from 'rxjs';
import { Project } from '../models/project.model';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  @ViewChild('template') public template: TemplateRef<any>;

  project : Project;
  stages :Stage[] = [];
  
  subs : Subscription = new Subscription();

  modalRef: BsModalRef;

  config = {
    
    animated: true
  };

  constructor(private dragulaService: DragulaService,
              private modalService: BsModalService,
              private stageService: StageService,
              private taskService : TaskService) { 

    let group = dragulaService.find("task");

    if(group == null)
      dragulaService.createGroup("task",{
      });

    group = dragulaService.find("stage");

    if(group == null)
      dragulaService.createGroup("stage",{
        moves: (el, container, handle) => {
          return handle.className === 'stage-title';
        },
        direction:"horizontal"
      });

    this.subs.add(
      dragulaService.dropModel("task")
      .subscribe((r) =>{
        console.log(r)
      }))

    this.subs.add(
      dragulaService.dropModel("stage")
      .subscribe((r) =>{
      let atual = r.item;
      let diferenca = atual.order - r.targetIndex;

      console.log(diferenca);

      let anterior = this.stages.find((value) =>{
        return value.order == r.targetIndex;
      });
    }))

    taskService.newTask.subscribe((r) => {
      this.onNewTaks(this.template);
    });

    this.stageService.getStage()
    .subscribe((r) => {
      this.stages = r;
    })
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onNewTaks(template: TemplateRef<any>){
    this.openCardDetailTemplate(template);
  }

  onEditTaks(template: TemplateRef<any>){
    this.openCardDetailTemplate(template);
  }

  openCardDetailTemplate(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template, this.config);
  }

  patchStage(obj: Stage){
    this.subs
     .add(
       this.stageService
      .patchStage(obj)
      .subscribe()
     )
  }
}
