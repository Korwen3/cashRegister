import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsommableEditComponent } from './consommable-edit/consommable-edit.component';
import { ConsommableListComponent } from './consommable-list/consommable-list.component';
import { ConsommableCreateComponent } from './consommable-create/consommable-create.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PanierComponent } from './panier/panier.component';



@NgModule({
  declarations: [
    AppComponent,
    ConsommableEditComponent,
    ConsommableListComponent,
    ConsommableCreateComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
