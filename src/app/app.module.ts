import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormImputExemploComponent } from './form-imput-exemplo/form-imput-exemplo.component';
import { FormListaExemploComponent } from './form-lista-exemplo/form-lista-exemplo.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask'
import { CurrencyMaskModule } from "ng2-currency-mask";
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './shared/service/dropdown.service';


@NgModule({
  declarations: [
    AppComponent,
    FormImputExemploComponent,
    FormListaExemploComponent,
    FormDebugComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    DropdownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
