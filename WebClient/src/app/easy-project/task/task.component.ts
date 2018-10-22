import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Stage } from './task.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TaskService } from './task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @ViewChild('template') public template: TemplateRef<any>;

  stages :Stage[] = [];
  title : string = "Projeto";

  modalRef: BsModalRef;

  config = {
    
    animated: true
  };

  constructor(private dragulaService: DragulaService,
              private modalService: BsModalService,
              private taskService : TaskService) { 

    let group = dragulaService.find("card");

    if(group == null)
      dragulaService.createGroup("card",{
      });
    
    group = dragulaService.find("stage");

    if(group == null)
      dragulaService.createGroup("stage",{
        moves: (el, container, handle) => {
          return handle.className === 'stage-title';
        }
      });

    taskService.newTask.subscribe((r) => {
      this.onNewTaks(this.template);
    });

    this.stages = [
      {
        id : "1",
        title : "planejamento",
        cards: [
          {
            id:"1", 
            title:"RC 1852",
            description:"Lorem ipsum molestie per mi pretium varius aenean molestie malesuada, condimentum eu urna quis sapien posuere sapien per aliquam, risus consequat litora urna dapibus senectus nibh adipiscing. dictum curae hendrerit venenatis nibh hac"
          },
          {
            id:"2", 
            title:"RC 11875",
            description:"Mascared Lorem ipsum molestie per mi pretium varius aenean molestie malesuada, condimentum eu urna quis sapien posuere sapien per aliquam, risus consequat litora urna dapibus senectus nibh adipiscing. dictum curae hendrerit venenatis nibh hac"
          },
          {
            id:"3", 
            title:"RC 52021",
            description:"Pilterberg Lorem ipsum molestie per mi pretium varius aenean molestie malesuada, condimentum eu urna quis sapien posuere sapien per aliquam, risus consequat litora urna dapibus senectus nibh adipiscing. dictum curae hendrerit venenatis nibh hac"
          }
        ]
      },
      {
        id : "2",
        title : "Execução",
        cards: [
          {
            id:"1", 
            title:"RC 51220",
            description:"Lorem ipsum molestie per mi pretium varius aenean molestie malesuada, condimentum eu urna quis sapien posuere sapien per aliquam, risus consequat litora urna dapibus senectus nibh adipiscing. dictum curae hendrerit venenatis nibh hac"
          },
          {
            id:"2", 
            title:"RC 212335",
            description:"Mascared Lorem ipsum molestie per mi pretium, condimentum eu urna quis sapien posuere sapien per aliquam, risus consequat litora urna dapibus senectus nibh adipiscing. dictum curae hendrerit venenatis nibh hac"
          }
        ]
      },
      {
        id : "3",
        title : "Concluído",
        cards: [
          {
            id:"1", 
            title:"RC 32218",
            description:"Lorem ipsum molestie per mi pretium varius aenean molestie malesuada, condimentum eu urna quis sapien posuere sapien per aliquam, risus consequat litora urna dapibus senectus nibh adipiscing. dictum curae hendrerit venenatis nibh hac"
          },
          {
            id:"2", 
            title:"RC 2120",
            description:"Mascared Lorem ipsum molestie per mi pretium, condimentum eu urna quis sapien posuere sapien per aliquam, risus consequat litora urna dapibus senectus nibh adipiscing. dictum curae hendrerit venenatis nibh hac"
          },
          {
            id:"2", 
            title:"RC 4122",
            description:"Mascared Lorem ipsum molestie per mi pretium, condimentum eu urna quis sapien posuere sapien per aliquam, risus consequat litora urna dapibus senectus nibh adipiscing. dictum curae hendrerit venenatis nibh hac"
          },
          {
            id:"2", 
            title:"RC 12154",
            description:"Mascared Lorem ipsum molestie per mi pretium, condimentum eu urna quis sapien posuere sapien per aliquam, risus consequat litora urna dapibus senectus nibh adipiscing. dictum curae hendrerit venenatis nibh hac"
          }
        ]
      }
    ]
  }

  ngOnInit() {}

  onNewTaks(template: TemplateRef<any>){
    this.openCardDetailTemplate(template);
  }

  onEditTaks(template: TemplateRef<any>){
    this.openCardDetailTemplate(template);
  }

  openCardDetailTemplate(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template, this.config);
  }
}
