import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAction, ISubAction } from '../../../interfaces/actions';

@Component({
  selector: 'teams-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.scss']
})
export class ActionItemComponent implements OnInit {

  @Input() multi: boolean;
  @Input() disabled: boolean;
  @Input() filterTerm: string;
  @Input() selectedItem: boolean;

  @Output() selectedAction: EventEmitter<any> = new EventEmitter();
  public action: IAction;
  public subMenuOpen: boolean;

  constructor() {
    this.multi = false;
    this.disabled = false;
  }

  @Input('action')
  set inputAction(action: IAction) {
    if (action) {
      this.action = action;
    }
  }

  ngOnInit() {
    this.selectedItem = false;
    this.subMenuOpen = false;
  }

  public actionClicked(action: IAction) {
    if (!this.disabled) {
      this.toggle();
      this.selectedAction.emit(action);
    }
  }

  public toggleSubMenu(action: IAction) {
    if (action.subActions) {
      this.subMenuOpen = !this.subMenuOpen;
    }
  }

  public SubActionClicked(action: ISubAction) {
    this.selectedAction.emit({
      id: this.action.id, action: {},
      subAction: action, attributes: this.action.attributes, text: action.text, typeId: this.action.typeId
    });
  }

  public toggle() {
    if (this.multi) {
      this.selectedItem = !this.selectedItem;
    } else {
      this.selectedItem = false;
    }
    // this._CD.markForCheck();
  }

  public insertSelectedItem() {
    this.selectedItem = true;
    // this._CD.markForCheck();
  }

  public reset() {
    this.selectedItem = false;
    // this._CD.markForCheck();
  }
}
