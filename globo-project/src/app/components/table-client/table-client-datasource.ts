import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableClientItem {
  name: string;
  id: number;
  telefono: number;
  mail: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableClientItem[] = [
  {id: 1, name: 'Movistar', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 2, name: 'Claro', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 3, name: 'Personal', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 4, name: 'Nextel', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 5, name: 'Level(3)', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 6, name: 'CableVision', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 7, name: 'DirecTv', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 8, name: 'Fibertel', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 9, name: 'Telecom', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 10, name: 'Ericsson', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 11, name: 'NEC', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 12, name: 'Huawei', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 13, name: 'Ezentis', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 14, name: 'Radiotronica', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 15, name: 'Mach', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 16, name: 'CisGroup', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 17, name: 'Telkor', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 18, name: 'CyCSA', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 19, name: 'INVAP', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 20, name: 'CONAE', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 21, name: 'Nucleoelectrica Argentina', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 22, name: 'INTI', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 23, name: 'CEATSA', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 24, name: 'Ministerio de Planificacion', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 25, name: 'Ar-Sat', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 26, name: 'CNEA', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 27, name: 'Tanador', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 28, name: 'Esuco', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 29, name: 'Veng', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 30, name: 'ABB', telefono: 3512746954, mail: 'movistar@gmail.com'},
  {id: 31, name: 'EMFER', telefono: 3512746954, mail: 'movistar@gmail.com'},

];

/**
 * Data source for the TableClient view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableClientDataSource extends DataSource<TableClientItem> {
  data: TableClientItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableClientItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableClientItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableClientItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
