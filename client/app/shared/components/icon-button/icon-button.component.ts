import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'teams-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {

  public disable: boolean;

  @Input() icon: string;
  @Input() action: string;

  @Input()
  set disabledIcon(disable: boolean) {
    this.disable = disable;
  }

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.icon = '';
    this.disable = false;
  }

  public actionClicked(disable: boolean, event: Event): void {
    if (!disable) {
      this.buttonClicked.emit({action: this.action, originalEvent: event});
    }
  }
}
