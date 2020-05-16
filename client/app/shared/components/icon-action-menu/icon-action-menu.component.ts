import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IActionIcon } from '../../interfaces/actions';

@Component({
  selector: 'teams-icon-action-menu',
  templateUrl: './icon-action-menu.component.html',
  styleUrls: ['./icon-action-menu.component.scss']
})
export class IconActionMenuComponent implements OnInit {

  public showActions: boolean;

  @Input() actionIcon: IActionIcon;

  @Output() actionClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    this.showActions = false;
  }

  public actionSelected(event) {
    this.showActions = false;
    this.actionClicked.emit({icon: this.actionIcon.action, action: event.action});
  }

}
