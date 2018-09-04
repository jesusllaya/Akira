import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface PlannedTableProjectsItem {
  id: number;
  nameProject: string;
  description: string;
  typeProject: string;
  client: string;
  lider: string;
  dateEstimateInitial: string;
  dateEstimateFin: string;
  dateRealInitial: string;
  dateRealFin: string;
  presupuesto: string;
  city: string;
  provincia: string;
}
//agregar aca
// TODO: replace this with real data from your application
const EXAMPLE_DATA: PlannedTableProjectsItem[] = [
  {id: 1, nameProject: 'Proyecto BTS',description:'Ejecucion BTS+DAS',typeProject:'BTS+DAS',client:'Claro',lider:'Ezequiel Ramos',dateEstimateInitial:'',dateEstimateFin:'',dateRealInitial:'',dateRealFin:'',presupuesto:'$150350',city:'Capital',provincia:'Buenos Aires'},
  {id: 2, nameProject: 'Distribucion Cell',description:'Pequeña distribuccion',typeProject:'Small Cell Dist',client:'Claro',lider:'Carlos Jimenez',dateEstimateInitial:'15/09/2018',dateEstimateFin:'20/09/2018',dateRealInitial:'--',dateRealFin:'--',presupuesto:'$120000',city:'Capital',provincia:'Buenos Aires'},
  {id: 3, nameProject: 'Manejo',description:'Pruebas de manejo',typeProject:'Drive Test',client:'Movistar',lider:'Vanessa Arancay',dateEstimateInitial:'02/09/2018',dateEstimateFin:'10/09/2018',dateRealInitial:'02/09/2018',dateRealFin:'--',presupuesto:'$27800',city:'Capital',provincia:'Buenos Aires'},
  {id: 4, nameProject: 'Interferencia',description:'Interferencia de señales',typeProject:'Interferencia',client:'Logicalis',lider:'Juan Pablo Pra',dateEstimateInitial:'07/09/2018',dateEstimateFin:'27/09/2018',dateRealInitial:'--',dateRealFin:'--',presupuesto:'$450000',city:'Capital',provincia:'Cordoba'},
  {id: 5, nameProject: 'Services Outdoor',description:'Ajustes de inteferencias',typeProject:'Ajustes Outdoor',client:'Movistar',lider:'Ezequiel Ramos',dateEstimateInitial:'01/09/2018',dateEstimateFin:'04/09/2018',dateRealInitial:'01/09/2018',dateRealFin:'04/09/2018',presupuesto:'$8500',city:'Capital',provincia:'Satna fe'},
  
  
];

/**
 * Data source for the PlannedTableProjects view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PlannedTableProjectsDataSource extends DataSource<PlannedTableProjectsItem> {
  data: PlannedTableProjectsItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PlannedTableProjectsItem[]> {
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
  private getPagedData(data: PlannedTableProjectsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: PlannedTableProjectsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

//agregar aca

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nameProject': return compare(a.nameProject, b.nameProject, isAsc);
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
