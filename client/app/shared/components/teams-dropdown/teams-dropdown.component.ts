import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IAction } from '../../interfaces/actions';
import { HelpersService } from '../../services/helpers.service';

import { ActionMenuComponent } from '../action-menu/action-menu.component';

@Component({
  selector: 'teams-dropdown',
  templateUrl: './teams-dropdown.component.html',
  styleUrls: ['./teams-dropdown.component.scss']
})

export class DropdownComponent implements OnInit {

  public actions: any;
  public viewText: string;
  public multiActions: IAction[];
  public selectedSingleAction: IAction;
  public hasSubActions: boolean;
  @Input() bold: boolean;
  @Input() long: boolean;
  @Input() disabled: boolean;
  @Input() autoOpen: boolean;
  @Input() multi: boolean;
  @Input() applyFilter: boolean;
  @Output() actionSelect: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('opener', {static: true}) teamsOpener;
  @ViewChild(ActionMenuComponent, {static: true}) public actionMenu: ActionMenuComponent;
  private multiTextArray: string[];
  private _TEXT: string;

  constructor() {
    this.multi = false;
    this.disabled = false;
    this.multiActions = [];
    this.applyFilter = true;
    this.multiTextArray = [];
    this.hasSubActions = false;
    this.bold = false;
  }

  @Input('text')
  set text(text: any) {
    if (text) {
      if (this.multi && Array.isArray(text)) {
        const tempActions = [];
        text.forEach(item => {
          tempActions.push(item.text);
        });
        this.viewText = tempActions.join(', ');
        this.multiTextArray = tempActions;
        this.actionMenu.enterSelectedItems(text);
        this.multiActions = text;
      } else {
        this._TEXT = text;
        this.viewText = this._TEXT;
      }
    }
  }

  @Input('actions')
  set inputActions(inputActions: any) {
    if (inputActions) {
      this.actions = inputActions;
    }
  }

  ngOnInit() {
    this.viewText = this._TEXT;
    this.long = false;

  }

  public switchToggle(event) {
    if (!this.disabled) {
      this.teamsOpener.switchToggle(event);
    }
  }

  public actionSelected(event: IAction | any) {
    let tempText;
    if (event.text) {
      tempText = event.text;
    } else {
      tempText = event.action.toLowerCase();
    }

    if (this.multi) {
      // if that item is selected it will remove from selection
      if (HelpersService.containsObject(event, this.multiActions)) {
        this.multiTextArray = this.multiTextArray.filter(el => {
          return el !== tempText;
        });
        this.multiActions = this.multiActions.filter(el => {
          return el.text !== event.text;
        });
      } else {
        this.multiTextArray.push(tempText);
        this.multiActions.push(event);
      }

      this.multiActions.forEach(action => {
        if (action.hasOwnProperty('subAction') || action.hasOwnProperty('subActions')) {
          this.hasSubActions = true;
          return;
        } else {
          this.hasSubActions = false;
        }
      });

      // if the selection list empty set the default value
      if (this.multiActions.length > 0) {
        this.viewText = this.multiTextArray.join(', ');
      } else {
        this.viewText = this._TEXT;
      }

    } else {
      this.viewText = tempText;
      this.selectedSingleAction = event;
      this.teamsOpener.toggleOff();
    }
  }

  public multiActionsSelected() {
    if (this.multiActions) {
      this.teamsOpener.toggleOff();
    }
  }

  public reset() {
    this.long = false;
    this.viewText = this._TEXT;
    this.actionMenu.reset();
    this.multiActions = [];
    this.selectedSingleAction = null;
    this.multiTextArray = [];
  }

  public show() {
    this.teamsOpener.toggleOn();
  }

  public BeforeHidePanel() {
    if (this.multi) {
      this.actionSelect.emit(this.multiActions);
    } else {
      if (this.selectedSingleAction) {
        this.actionSelect.emit(this.selectedSingleAction);
        this.selectedSingleAction = null;
      }

    }


  }



  public setSingleValue(event: IAction) {
    this.disabled = true;
    this.actionSelected(event);
  }
}
