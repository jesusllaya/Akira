import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { appRoutes } from './app.routing';
import { Routes, RouterModule } from '@angular/router';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NavHMenuComponent } from './components/nav-h-menu/nav-h-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    NewProjectComponent,
    NavMenuComponent,
    NavHMenuComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
