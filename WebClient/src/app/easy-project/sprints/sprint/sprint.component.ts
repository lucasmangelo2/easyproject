import { Component, OnInit, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project.model';
import { Stage } from '../../models/stage.model';
import { StageService } from '../../services/stage.service';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit, OnDestroy {

  @ViewChild('template') template : TemplateRef<any>;

  subs : Subscription = new Subscription(); // necessário para unsubscribe Observable's
  project : Project;
  stages :Stage[] = [];

  constructor(private dragulaService: DragulaService,
              private stageService: StageService,
              private taskService : TaskService,
              private route : ActivatedRoute) {}
  
  //#region interface implements methods 

  ngOnInit() {

    this.taskService.setModal(this.template);

    let group = this.dragulaService.find("task");

    if(group == null)
      this.dragulaService.createGroup("task",{
      });

    group = this.dragulaService.find("stage");

    if(group == null)
      this.dragulaService.createGroup("stage",{
        moves: (el, container, handle) => {
          return handle.className === 'stage-title';
        },
        direction:"horizontal"
      });

    this.subs.add(
      this.dragulaService.dropModel("task")
      .subscribe((r) =>{
        console.log(r);
        // registrar a troca de estágios
      }))

    this.subs.add(
      this.dragulaService.dropModel("stage")
        .subscribe((r) =>{
          // ordenar os estágios
          let atual = r.item;
          let diferenca = atual.order - r.targetIndex;

          let anterior = this.stages.find((value) =>{
            return value.order == r.targetIndex;
          });
        })
    )
    
    this.subs.add(
      this.stageService
          .getStageBySprint(this.route.snapshot.params['id'])
          .subscribe((r) => {
            this.stages = r;
          })
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  //#endregion

  //#region Dragula Events
  
  //#endregion

  patchStage(obj: Stage){
    this.subs
     .add(
       this.stageService
      .patchStage(obj)
      .subscribe()
     )
  }
}
