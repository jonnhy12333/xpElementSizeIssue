import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

import { CustomReuseStrategy } from './route-reuse-strategy';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy,
    },
  ]
})
export class AppModule { }
