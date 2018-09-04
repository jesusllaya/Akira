
import { NewProjectComponent } from '../app/components/new-project/new-project.component';
import { NewClientComponent } from '../app/components/new-client/new-client.component';
import { NewTaskComponent } from '../app/components/new-task/new-task.component';
import { TableClientComponent } from '../app/components/table-client/table-client.component';
import { TableTaskComponent } from '../app/components/table-task/table-task.component';
import { PlannedTableProjectsComponent } from '../app/components/planned-table-projects/planned-table-projects.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: 'newProject', component: NewProjectComponent},
    {path: 'newClient', component: NewClientComponent},
    {path: 'newTask', component: NewTaskComponent},
    {path: 'tableClient', component: TableClientComponent},
    {path: 'tableTask', component: TableTaskComponent},
    {path: 'plannedTableProjects', component: PlannedTableProjectsComponent}
];