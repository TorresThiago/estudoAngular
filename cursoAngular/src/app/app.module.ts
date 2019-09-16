import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SegundoComponenteComponent,
    NgIfNgForComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
