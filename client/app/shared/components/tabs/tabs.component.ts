import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'teams-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

    public selectedView: string;
    public tabs: any[];
    @Output() selectedTab: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    public set tabsData(tabs: any[]) {
        this.tabs = tabs;
    }

    @Input()
    public set initialTab(tab: string) {
        this.selectedView = tab;
    }

    constructor() {
        this.tabs = [];
    }

    ngOnInit() {
        if (!this.selectedView) {
            this.selectedView = this.tabs[0].action;
        }
    }

    public changeTab(tab: string) {
        this.selectedView = tab;
        this.selectedTab.emit(tab);
    }
}
