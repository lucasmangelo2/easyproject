import { Component, OnInit, Input, ElementRef, ViewChild, TemplateRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/easy-project/models/task.model';
import { Checklist } from 'src/app/easy-project/models/checklist.model';
import { NotificationService } from 'src/app/shared/messages/notification.services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/easy-project/services/task.service';
import { CheckListService } from 'src/app/easy-project/services/checklist.servce';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit , OnDestroy{

  private inputCheckList: ElementRef;

  @ViewChild('inputCheckList') set inputCheck (elm: ElementRef){
    this.inputCheckList = elm;
  };

  subs : Subscription = new Subscription();
  task: Task;
  checkLists : Checklist[] = [];
  display : boolean = false;
  stage_id:string;
  taskForm : FormGroup;

  constructor(private fb : FormBuilder,
              private ns: NotificationService,
              private taskService : TaskService,
              private checkListServer: CheckListService ) { }
  
  //#region interface implements methods

  ngOnInit() {

    this.taskForm = this.fb.group({
      title: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      description: ['']
    })

    this.subs.add(
      this.taskService
          .newTask
          .subscribe((_id) => {
            this.onNewTaks(_id);
      })
    );

    this.subs.add(
      this.taskService
          .editTask
          .subscribe((r) => {
            this.onEditTaks(r);
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  //#endregion

  //#region CRUD

  saveTask(event){
    
    if(this.taskForm.valid){
      let task = this.task ? this.task : new Task();

      task.title = this.taskForm.get('title').value;
      task.description = this.taskForm.get('description').value;

      if(this.stage_id){
        task.stage = {_id: this.stage_id }
      }

      if(!this.task)
        this.addNewTask(task);
      else
        this.updateTask(task);
    }
    else {
      this.ns.notify("Preencha os campos");
    }
  }

  addNewTask(task : Task){

    this.subs.add(
      this.taskService
          .postTask(task)
          .subscribe((result) => {
            if(result && result._id){
              
              this.postCheckList(result._id);

              this.ns.notify("Tarefa registrada com sucesso");
              this.hideModal();
            }
          })
    );
  }

  updateTask(task: Task){
    this.subs.add(
      this.taskService
          .patchTask(task)
          .subscribe((result) => {
            if(result && result._id){
              //this.postCheckList(result._id);

              this.ns.notify("Tarefa atualizada com sucesso");
              this.hideModal();
            }
          })
    );
  }

  //#endregion

  //#region CheckList

  onAddCheckList($event){
    if(this.display)
      this.addNewCheckbox(this.inputCheckBox);
    else
      this.display = true;
  }

  addNewCheckbox(value : string){
    if(!value){
      this.ns.notify('Preencha o campo');
    }
    else {
      this.display = false;
      this.inputCheckList.nativeElement.value = "";
  
      let checklist = new Checklist();
  
      checklist.description = value;
      checklist.task_id = this.task != null ? this.task._id : null;
      this.checkLists.unshift(checklist);
    }
  }

  onDeleteCheckList(obj : Checklist){
    
    let index = this.checkLists.indexOf(obj);
    if(index != null)
      this.checkLists.splice(index, 1);
  }

  postCheckList(task_id : string) {
    this.checkLists.forEach((item) => {
      item.task_id = task_id;
      this.subs.add(
        this.checkListServer
          .postCheckList(item)
          .subscribe()
      )
    })
  }

 get inputCheckBox() {return this.inputCheckList.nativeElement.value};

  //#endregion
  
  //#region Modal Actions

  onNewTaks(_id: string){
    this.task = null;
    this.stage_id = _id;
    this.task = null;
  }

  onEditTaks(task: Task){
    this.task = task;
    this.stage_id = null;
    this.taskForm.get('title').setValue(task.title);
    this.taskForm.get('description').setValue(task.description);
  }

  hideModal(){
    this.taskService.hideModal();
    this.display = false;
    this.taskForm.reset();
  }

  //#endregion
}
