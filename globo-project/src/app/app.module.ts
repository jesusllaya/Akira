import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { appRoutes } from './app.routing';
import { Routes, RouterModule } from '@angular/router';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NavHMenuComponent } from './components/nav-h-menu/nav-h-menu.component';
import { NewClientComponent } from './components/new-client/new-client.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TableClientComponent } from './components/table-client/table-client.component';
import { TableTaskComponent } from './components/table-task/table-task.component';
import { PlannedTableProjectsComponent } from './components/planned-table-projects/planned-table-projects.component';



@NgModule({
  declarations: [
    AppComponent,
    NewProjectComponent,
    NavMenuComponent,
    NavHMenuComponent,
    NewClientComponent,
    NewTaskComponent,
    TableClientComponent,
    TableTaskComponent,
    PlannedTableProjectsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
