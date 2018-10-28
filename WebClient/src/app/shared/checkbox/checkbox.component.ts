import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() obj: any;
  @Input() description : string;
  @Input() showTrashButton : boolean = true; 
  @Output() onDelete : EventEmitter<any> = new EventEmitter<any>();  
  constructor() { }

  ngOnInit() {
  }

  onClickDelete($event){
    this.onDelete.emit(this.obj);
  }
}
