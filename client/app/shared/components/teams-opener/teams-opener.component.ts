import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'teams-opener',
  templateUrl: './teams-opener.component.html',
  styleUrls: ['./teams-opener.component.scss']
})

export class OpenerComponent implements OnInit {

  public title: string;
  public text: string;

  @Input() bold: boolean;

  @Output() BeforeHidePanel: EventEmitter<any> = new EventEmitter();

  @ViewChild('op1', {static: true}) overlayPanel;

  constructor() {
    this.bold = false;
  }

  @Input('title')
  set inputTitle(inputTitle: string) {
    this.title = inputTitle;
    this.text = this.title;
  }

  ngOnInit() {
    this.reset();
  }

  public reset() {
    this.text = this.title;
    this.toggleOff();
  }

  public switchToggle(event) {
    this.overlayPanel.toggle(event);
  }

  public toggleOff() {
    this.overlayPanel.hide();
  }

  public toggleOn() {
    this.overlayPanel.show();
  }

  public BeforeHide() {
    this.BeforeHidePanel.emit();
  }
}
