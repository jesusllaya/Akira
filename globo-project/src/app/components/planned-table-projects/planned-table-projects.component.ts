import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PlannedTableProjectsDataSource } from './planned-table-projects-datasource';

@Component({
  selector: 'app-planned-table-projects',
  templateUrl: './planned-table-projects.component.html',
  styleUrls: ['./planned-table-projects.component.css']
})
export class PlannedTableProjectsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PlannedTableProjectsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  /*agregar aca*/
  displayedColumns = ['id', 'nameProject', 'description','typeProject',
                      'client','lider','dateEstimateInitial','dateEstimateFin',
                    'dateRealInitial','dateRealFin','presupuesto',
                    'city','provincia'];

  ngOnInit() {
    this.dataSource = new PlannedTableProjectsDataSource(this.paginator, this.sort);
  }
}
