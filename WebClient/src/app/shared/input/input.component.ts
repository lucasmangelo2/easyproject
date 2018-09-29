import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel, FormControlName} from '@angular/forms';

@Component({
  selector: 'input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
  
})
export class InputComponent implements OnInit, AfterContentInit {

  input: any;
  col_class: string;

  @Input() label: string;
  @Input() errorMessage: string;
  @Input() showIcons: boolean = true;

  // habilita a referencia ao NgModel e FormControlName
  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  //chamado quando o conteúdo for definido
  ngAfterContentInit(){
    // utiliza uma das duas diretivas, a que estiver disponível é atribuido a propriedade this.input
    this.input = this.model || this.control;
    if(this.input === undefined){
      throw new Error('Componente precisa ser utilizada com a diretiva ngModel ou FormControlName')
    }
  }

  hasSucess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean{
    return !this.input.valid && (this.input.dirty || this.input.touched);
  }
}
