import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISubAction } from '../../../../interfaces/actions';

@Component({
  selector: 'teams-sub-action-item',
  templateUrl: './sub-action-item.component.html',
  styleUrls: ['./sub-action-item.component.scss']
})
export class SubActionItemComponent implements OnInit {

  @Input() subAction: ISubAction;
  @Input() multi: boolean;
  @Input() disabled: boolean;
  @Input() parentId: number;
  @Output() selectedSubAction: EventEmitter<ISubAction> = new EventEmitter();

  public selectedItem: boolean;

  constructor() {
    this.multi = true;
    this.disabled = false;
    this.parentId = null;
  }

  ngOnInit() {
  }

  public actionClicked(action: ISubAction) {
    if (!this.disabled) {
      this.toggle();
      this.selectedSubAction.emit(action);
    }
  }

  private toggle() {
    if (this.multi ) {
      this.selectedItem = !this.selectedItem;
    } else {
      this.selectedItem = false;
    }
  }
}
