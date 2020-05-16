import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Actions, IAction, IActionMenu, ISubAction} from '../../interfaces/actions';
import {ActionItemComponent} from './action-item/action-item.component';
import {InputTextComponent} from '../teams-input/teams-input.component';

@Component({
  selector: 'teams-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss']
})
export class ActionMenuComponent implements OnInit {

  public mainTitle: string;
  public actions: Actions;
  public filterTerm: string;
  public actionEnabled: any;

  @Input() long: boolean;
  @Input() multi: boolean;
  @Input() applyFilter: boolean;
  @Input() multiIsEmpty: boolean;
  @Output() actionSelect: EventEmitter<IAction> = new EventEmitter();

  @ViewChild(InputTextComponent, {static: false}) public teamsInput: InputTextComponent;
  @ViewChildren(ActionItemComponent) ActionItems: QueryList<ActionItemComponent>;

  constructor() {
    this.long = false;
    this.multi = false;
    this.applyFilter = false;
    this.multiIsEmpty = true;
  }

  @Input('actions')
  set inputActions(inputActions: IActionMenu) {
    if (inputActions) {
      this.actions = inputActions.actions;
      if (this.actions && this.actions.length > 2) {
        this.actions.sort((actionA, actionB) => {
          const actionAName = !inputActions.numbersOnly ? actionA.text : parseInt(actionA.text, 10);
          const actionBName = !inputActions.numbersOnly ? actionB.text : parseInt(actionB.text, 10);
          if (actionAName < actionBName) {
            return -1;
          }
          if (actionAName > actionBName) {
            return 1;
          }
          // names must be equal
          return 0;
        });
        this.actions.forEach(action => {
          if (action.subActions && action.subActions.length > 2) {
            action.subActions.sort((actionA, actionB) => {
              const actionAName = !inputActions.numbersOnly ? actionA.text : parseInt(actionA.text, 10);
              const actionBName = !inputActions.numbersOnly ? actionB.text : parseInt(actionB.text, 10);
              if (actionAName < actionBName) {
                return -1;
              }
              if (actionAName > actionBName) {
                return 1;
              }
              // names must be equal
              return 0;
            });
          }
        });
        this.mainTitle = inputActions.mainTitle;
      }
    }
  }

  ngOnInit() {

  }

  public actionSelected(action: IAction | ISubAction) {
    this.actionSelect.emit(action);
    if (action.hasOwnProperty('subAction') || action.hasOwnProperty('subActions')) {
      this.actionEnabled = action.id;
    } else {
      this.actionEnabled = undefined;
    }
  }

  public reset() {
    if (this.ActionItems) {
      this.ActionItems.forEach(ActionItem => {
        ActionItem.reset();
      });
    }
    this.actionEnabled = undefined;
    if (this.teamsInput) {
      this.teamsInput.reset();
      this.filterTerm = '';
    }
  }

  public enterSelectedItems(selectedItems: any) {
    if (this.ActionItems) {
      this.ActionItems.forEach(ActionItem => {
        if (selectedItems.find(item => item.action === ActionItem.action.action)) {
          ActionItem.insertSelectedItem();
        }
      });
    }
  }

}
