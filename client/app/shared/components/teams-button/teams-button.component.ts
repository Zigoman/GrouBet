import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'teams-button',
  templateUrl: './teams-button.component.html',
  styleUrls: ['./teams-button.component.scss']
})
export class ButtonComponent {

  @Input() prime: boolean;
  @Input() text: string;
  @Input() action: string;

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<string>();

  constructor() {
    this.prime = false;
    this.text = '';
  }

  public actionClicked(): void {
    this.buttonClicked.emit(this.action);
  }

/*  use Like that */
/*  <teams-button [action]="'primeTest'" [prime]="false" [text]="'test'"></teams-button>  */

}
