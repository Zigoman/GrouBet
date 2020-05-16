import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IActionMenu } from '../../interfaces/actions';

@Component({
  selector: 'teams-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})

export class ContextMenuComponent implements OnInit {

  public open: boolean;
  public top: number;
  public left: number;
  public actions: IActionMenu;

  @Output() actionClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('actionMenu', {static: false}) actionMenu;

  constructor() {
    this.open = false;
    this.top = 0;
    this.left = 0;
  }

  @Input('context')
  set context(value) {
    if (value) {
      this.open = !this.open;
      this.top = value.positions.y;
      this.left = value.positions.x;
      // let menuHeight;
/*      setTimeout(() => {
        if (this.actionMenu) {
          menuHeight = 31 * this.actionMenu.actions.length;
          if (this.left > window.innerWidth - 210) {
            this.left = window.innerWidth - 210 - 65;
          }
          if (this.top > window.innerHeight - menuHeight) {
            this.top = window.innerHeight - menuHeight - 10;
          }
        }
      }, 0);*/
/*      this.operationsMap = {
        node: [
          {
            text: 'Edit label',
            action: 'editLabel',
            icon: 'edit-label'
          },
          {
            text: 'Open node',
            action: 'openNode',
            icon: 'open'
          },
/!*          {
            text: 'Project to',
            action: 'projectNodes',
            icon: 'project-to'
          },*!/
          {
            text: 'Hide',
            action: 'hideNodes',
            icon: 'hide'
          },
/!*          {
            text: 'Show Image/Icon',
            action: 'showImage',
            icon: 'drag-flick'
          },*!/
          {
            text: 'Filter by node type',
            action: 'filterByNodeType',
            icon: 'drag-flick'
          }
        ],
        nodes: [
/!*          {
            text: 'Open nodes',
            action: 'openNode',
            icon: 'open'
          },*!/
/!*          {
            text: 'Project to',
            action: 'projectNodes',
            icon: 'project-to'
          },*!/
          {
            text: 'Hide',
            action: 'hideNodes',
            icon: 'hide'
          }/!*,
          {
            text: 'Show Images/Icons',
            action: 'showImage',
            icon: 'drag-flick'
          }*!/
        ],
        edge: [
          {
            text: 'Hide',
            action: 'hideNodes',
            icon: 'hide'
          }
        ],
        edges: [
          {
            text: 'Hide',
            action: 'hideNodes',
            icon: 'hide'
          }
        ],
        group: [
/!*          {
            text: 'Open nodes',
            action: 'openNode',
            icon: 'open'
          },*!/
/!*          {
            text: 'Project to',
            action: 'projectNodes',
            icon: 'project-to'
          },*!/
          {
            text: 'Ungroup',
            action: 'ungroup',
            icon: 'drag-flick'
          },
          {
            text: 'Change group name',
            action: 'changeGroupName',
            icon: 'drag-flick'
          },
          {
            text: 'Hide',
            action: 'hideNodes',
            icon: 'hide'
          }
        ],
        empty: [
          {
            text: 'Automatic grouping',
            action: 'createAutomaticGroup',
            icon: 'auto-group'
          },
          {
            text: 'Add general notification',
            action: 'addAnnotation',
            icon: 'add-annotation'
          },
          {
            text: 'Refresh Graph',
            action: 'refreshGraph',
            icon: 'refresh'
          },
          {
            text: 'Save as Image',
            action: 'saveImage',
            icon: 'save-img'
          },
          {
            text: 'Zoom to Fit',
            action: 'zoomToFit',
            icon: 'save-img'
          },
          {
            text: 'Unhighlight',
            action: 'unhighlight',
            icon: 'hide'
          }
        ]
      };*/

    }
  }

  ngOnInit() {
  }

  public actionSelected(action) {
    this.actionClicked.emit({action: action.action});
    this.reset();
  }

  public reset() {
    this.open = false;
  }

}
