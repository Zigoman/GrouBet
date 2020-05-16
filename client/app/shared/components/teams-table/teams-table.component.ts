import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.scss']
})
export class TableComponent implements OnInit {

  public cols: any[];
  public tableData: any[];

  constructor() {
  }

  ngOnInit() {
    this.applyDataToTable();
    this.cols = [
      {field: 'EntityA', header: 'Entity A'},
      {field: 'EntityAType', header: 'Entity A Type'},
      {field: 'EntityB', header: 'Entity B'},
      {field: 'EntityBType', header: 'Entity B Type'},
      {field: 'RelationType', header: 'Relation Type'},
      {field: 'OperationalTime', header: 'Operational Time'}
    ];
  }

  private applyDataToTable() {
    // this.tableData = this.tableService.generateTable(this.graphViewService.unMergedData);
  }

  public refresh() {
    this.applyDataToTable();
  }
}


