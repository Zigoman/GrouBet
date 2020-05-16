import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'teams-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() public tabs: any[];
  @Output() selectedMain: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.tabs = [];
  }

  ngOnInit() {
  }

  public selectedTab($event: string) {
    this.selectedMain.emit($event);
  }
}
