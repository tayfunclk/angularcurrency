import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './employee/employee.component';
import { TablesComponent } from './tables/tables.component';
import { TopFiveComponent } from './top-five/top-five.component';

  const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'main', component: MainComponent },
    { path: 'table', component: TablesComponent },
    { path: 'table/:id', component: TablesComponent },
    { path: 'top5', component: TopFiveComponent }

  ];

  @NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
